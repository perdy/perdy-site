import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: 'Lora, system-ui, sans-serif',
    heading: 'Montserrat, Georgia, serif',
    mono: 'Fira Mono, Menlo, monospace'
  },
  colors: {
    ...theme.colors,
    primary: { ...theme.colors.teal },
    secondary: { ...theme.colors.blue }
  }
};

export default customTheme;
