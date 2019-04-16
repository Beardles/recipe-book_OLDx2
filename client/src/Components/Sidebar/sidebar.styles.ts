import styled from '@emotion/styled/macro';
import { colors } from '../../themes';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled('nav')`
  background-color: ${colors.primary};
  height: 100vh;
`;

export const SidebarLogo = styled('div')`
  margin-bottom: 24px;
  padding: 16px 0;
  text-align: center;
`;

export const SidebarLink = styled(Link)`
  color: ${colors.secondary};
  display: inline-block;
  padding: 8px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: ${colors.secondary};
    color: ${colors.primary};
    cursor: pointer;
  }
`;
