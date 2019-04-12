import { Home } from './Components/Home';

export interface IRouteConfig {
  path: string;
  component: React.FC<any>;
  exact?: boolean;
}

export const routes: IRouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
];
