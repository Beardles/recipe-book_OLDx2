import { Home } from './Components/Home';
import { Ingredients } from './Components/Ingredients';
import { Recipes } from './Components/Recipes';

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
  {
    path: '/recipes',
    component: Recipes,
    exact: true,
  },
  {
    path: '/ingredients',
    component: Ingredients,
    exact: true,
  },
];
