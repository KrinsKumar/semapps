module.exports = {
  visibility: 'public',
  async handler(ctx) {
    let context = [];

    const ontologies = await ctx.call('ldp.ontologies.list');

    for (const ontology of ontologies) {
      if (ontology.preserveContextUri === true) {
        // If we want to parse, we don't need a special merge operation
        context = context.concat(ontology.jsonldContext);
      }
    }

    if (this.settings.localContextUri) {
      const localContext = await this.actions.getLocal({}, { parentCtx: ctx });
      // Include the local context only if it is not empty
      if (Object.keys(localContext['@context']).length > 0) {
        context = context.concat(this.settings.localContextUri);
      }
    }

    return context;
  }
};
