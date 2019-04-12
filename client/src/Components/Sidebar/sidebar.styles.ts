import styled from '@emotion/styled/macro';

export const SidebarWrapper = styled('nav')`
  background-color: #ffdab9;
  height: 100vh;
`;

export const SidebarLink = styled('a')`
  color: #34385e;
  display: inline-block;
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: #34385e;
    color: #ffdab9;
    cursor: pointer;
  }
`;
