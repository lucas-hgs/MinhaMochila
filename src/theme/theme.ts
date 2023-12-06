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
  spacing: {},
});

export type Theme = typeof theme;
