import { Heading, theme } from '@chakra-ui/core'
import React from 'react'

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: 'Lora, system-ui, sans-serif',
    heading: 'Montserrat, Georgia, serif',
    mono: 'Fira Mono, Menlo, monospace',
    retro: '"Press Start 2P", Georgia, serif'
  },
  colors: {
    ...theme.colors,
    primary: {
      50: '#e0f0f0',
      100: '#b3d9d9',
      200: '#80c0c0',
      300: '#4da6a6',
      400: '#269393',
      500: '#008080',
      600: '#007878',
      700: '#006d6d',
      800: '#006363',
      900: '#005050'
    },
    secondary: {
      50: '#eae6e6',
      100: '#cbc0c1',
      200: '#a99798',
      300: '#866d6f',
      400: '#6c4d50',
      500: '#522e31',
      600: '#4b292c',
      700: '#412325',
      800: '#381d1f',
      900: '#281213'
    }
  }
};

export default customTheme;
