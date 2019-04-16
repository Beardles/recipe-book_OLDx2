import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CollectionsBookmark } from '@material-ui/icons';
import { SidebarWrapper, SidebarLink, SidebarLogo } from './sidebar.styles';

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
        <SidebarLogo>
          <Typography
            style={{ marginBottom: '8px' }}
            variant="h5"
            color="secondary"
          >
            Recipe Book
          </Typography>
          <CollectionsBookmark fontSize="large" color="secondary" />
        </SidebarLogo>
      </Grid>
      <Grid item>
        <SidebarLink to="/" color="secondary">
          Home
        </SidebarLink>
      </Grid>
      <Grid item>
        <SidebarLink to="/recipes">Recipes</SidebarLink>
      </Grid>
      <Grid item>
        <SidebarLink to="/ingredients">Ingredients</SidebarLink>
      </Grid>
    </Grid>
  </SidebarWrapper>
);

export default Sidebar;
