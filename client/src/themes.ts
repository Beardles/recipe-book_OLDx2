import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const colors: { [color: string]: string } = {
  primary: '#ffdab9',
  secondary: '#34385e',
};

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
  },
  typography: {
    useNextVariants: true,
  },
});
