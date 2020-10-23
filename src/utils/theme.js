import { createMuiTheme } from '@material-ui/core/styles';

import * as globalConstants from './constants';

const { THEME_COLORS } = globalConstants;

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: THEME_COLORS.PRIMARY_LIGHT,
      main: THEME_COLORS.PRIMARY,
      dark: THEME_COLORS.PRIMARY_DARK,
    },
    secondary: {
      main: THEME_COLORS.SECONDARY,
    },
    background: { default: THEME_COLORS.BACKGROUND_COLOR },
  },
  props: {
    MuiAppBar: { elevation: 0 },
    MuiTabs: { variant: 'fullWidth' },
    MuiTab: { disableRipple: true },
  },
  overrides: {
    MuiAppBar: { colorPrimary: { backgroundColor: THEME_COLORS.PRIMARY_DARK } },
    MuiTab: { root: { textTransform: 'none', fontWeight: 'normal' } },
  },
  typography: {
    subtitle2: { fontSize: '1rem' },
    fontFamily: "'Montserrat','Roboto',sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
});

export default muiTheme;
