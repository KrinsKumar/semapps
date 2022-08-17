import React from 'react';
import { Layout as RaLayout } from 'react-admin';
import { makeStyles, Typography } from '@material-ui/core';
import AppBar from './AppBar';
import TreeMenu from './TreeMenu/TreeMenu';

const useStyles = makeStyles((theme) => ({
  appFrame: {
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      '& #main-content': {
        paddingTop: 8, 
        paddingLeft: 5
      }
    }
  }
}));

const Layout = ({ appBar, menu, userMenu, children, ...otherProps }) => {
  const classes = useStyles();
  return (
    <RaLayout {...otherProps} classes={{ appFrame: classes.appFrame }} appBar={appBar} menu={menu}>
      {children}
    </RaLayout>
  );
};

Layout.defaultProps = {
  appBar: AppBar,
  menu: TreeMenu
};

export default Layout;
