import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  collectCoverageFrom: ['src/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules', 'index'],
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/react-native/extend-expect',
  ],
};

export default config;
