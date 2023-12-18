import {createTheme} from '@shopify/restyle';

const palette = {
  cream: '#FAF0D7',
  blue: '#6C75FF',
  lightBlue: '#8CC0DE',
  green: '#CCEEBC',
  lightPurple: '#BEAFF8',
  purple: '#7C6FAF',
  darkPurple: '#473B76',

  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',

  redStrongError: '#FF0404',
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

    buttonPrimary: palette.lightPurple,

    backgroundPrimary: '#D8CFFB',
    backgroundSecondary: '#FAF0D7',

    error: palette.redError,
    errorLight: palette.redErrorLight,
    errorStrong: palette.redStrongError,

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
