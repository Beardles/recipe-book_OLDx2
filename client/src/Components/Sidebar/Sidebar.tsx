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
      <Grid item>Recipe Book</Grid>
      <Grid item>
        <SidebarLink href="/" color="secondary">
          Home
        </SidebarLink>
      </Grid>
      <Grid item>
        <SidebarLink href="/recipes">Recipes</SidebarLink>
      </Grid>
      <Grid item>
        <SidebarLink href="/ingredients">Ingredients</SidebarLink>
      </Grid>
    </Grid>
  </SidebarWrapper>
);

export default Sidebar;
