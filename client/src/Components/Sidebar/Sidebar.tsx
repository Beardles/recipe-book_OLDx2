import React from 'react';
import { Grid } from '@material-ui/core';
import { SidebarWrapper, SidebarLink } from './sidebar.styles';

const Sidebar: React.FC = () => (
  <SidebarWrapper>
    <Grid
      container
      direction="column"
      spacing={8}
      justify="center"
      alignItems="stretch"
      style={{ height: '100%' }}
    >
      <Grid item>
        <SidebarLink href="/">Home</SidebarLink>
      </Grid>
      <Grid item>
        <SidebarLink href="#">2</SidebarLink>
      </Grid>
      <Grid item>
        <SidebarLink href="#">3</SidebarLink>
      </Grid>
    </Grid>
  </SidebarWrapper>
);

export default Sidebar;
