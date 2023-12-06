import {createTheme} from '@shopify/restyle';

const palette = {
  lightOcean: '#0FC2C0',
  ocean: '#0CABA8',
  greenOcean: '#008F8C',
  darkOcean: '#015958',
  darkerOcean: '#023535',

  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',

  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',

  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.grayWhite,

    buttonPrimary: palette.carrotSecondary,

    backgroundLightOcean: palette.lightOcean,
    backgroundOcean: palette.ocean,
    backgroundGreenOcean: palette.greenOcean,
    backgroundDarkOcean: palette.darkOcean,
    backgroundDarkerOcean: palette.darkerOcean,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.greenSuccess,
    successLight: palette.greenSuccessLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },

  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
