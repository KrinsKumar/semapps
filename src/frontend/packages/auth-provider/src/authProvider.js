import jwtDecode from 'jwt-decode';
import { defaultToArray, getAclUri } from './utils';
import { ANONYMOUS_AGENT, FULL_ANONYMOUS_AGENT, AUTHENTICATED_AGENT, FULL_AUTHENTICATED_AGENT } from "./constants";

const authProvider = ({ middlewareUri, httpClient, checkPermissions, resources }) => ({
  login: params => {
    window.location.href = `${middlewareUri}auth?redirectUrl=` + encodeURIComponent(window.location.href);
    return Promise.resolve();
  },
  logout: () => {
    // Redirect to login page after disconnecting from SSO
    // The login page will remove the token, display a notification and redirect to the homepage
    const url = new URL(window.location.href);
    window.location.href =
      `${middlewareUri}auth/logout?redirectUrl=` + encodeURIComponent(url.origin + '/login?logout');

    // Avoid displaying immediately the login page
    return Promise.resolve('/');
  },
  checkAuth: () => {
    if (localStorage.getItem('token')) {
      return Promise.resolve();
    } else {
      return Promise.resolve();
    }
  },
  checkError: error => Promise.resolve(),
  getPermissions: async resourceId => {
    if (!checkPermissions) return true;

    // If a resource name is passed, get the corresponding container, otherwise assume we have the URI
    const resourceUri = resources[resourceId] ? resources[resourceId].containerUri : resourceId;

    const aclUri = getAclUri(middlewareUri, resourceUri);

    let { json } = await httpClient(aclUri);

    return json['@graph'];
  },
  addPermission: async (resourceId, agentId, predicate, mode) => {
    // If a resource name is passed, get the corresponding container, otherwise assume we have the URI
    const resourceUri = resources[resourceId] ? resources[resourceId].containerUri : resourceId;

    const aclUri = getAclUri(middlewareUri, resourceUri);

    // Use a full URI for the class agents as there is an issue
    // See https://github.com/assemblee-virtuelle/semapps/issues/727
    // An alternative could be to use the triple format
    if( agentId === ANONYMOUS_AGENT ) {
      agentId = FULL_ANONYMOUS_AGENT;
    } else if( agentId === AUTHENTICATED_AGENT ) {
      agentId = FULL_AUTHENTICATED_AGENT;
    }

    let authorization = {
      '@id': aclUri + '#' + mode.replace('acl:', ''),
      '@type': 'acl:Authorization',
      [predicate]: agentId,
      'acl:accessTo': resourceUri,
      'acl:mode': mode
    };

    await httpClient(aclUri, {
      method: 'PATCH',
      body: JSON.stringify({
        '@context': {
          acl: 'http://www.w3.org/ns/auth/acl#',
          foaf: 'http://xmlns.com/foaf/0.1/'
        },
        '@graph': [authorization]
      })
    });
  },
  removePermission: async (resourceId, agentId, predicate, mode) => {
    // If a resource name is passed, get the corresponding container, otherwise assume we have the URI
    const resourceUri = resources[resourceId] ? resources[resourceId].containerUri : resourceId;
    const aclUri = getAclUri(middlewareUri, resourceUri);

    // Fetch current permissions
    let { json } = await httpClient(aclUri);

    const updatedPermissions = json['@graph'].map(authorization => {
      const modes = defaultToArray(authorization['acl:mode']);
      let agents = defaultToArray(authorization[predicate]);
      if (mode && modes.includes(mode) && agents && agents.includes(agentId)) {
        agents = agents.filter(agent => agent !== agentId);
      }
      return { ...authorization, [predicate]: agents };
    });

    await httpClient(aclUri, {
      method: 'PUT',
      body: JSON.stringify({
        ...json,
        '@graph': updatedPermissions
      })
    });
  },
  getIdentity: () => {
    const token = localStorage.getItem('token');
    if (token) {
      const { webId, name } = jwtDecode(token);
      return { id: webId, fullName: name };
    }
  }
});

export default authProvider;
