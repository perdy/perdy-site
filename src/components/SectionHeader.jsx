import { Heading, useTheme } from '@chakra-ui/core'
import React from 'react';

const SectionHeader = ({ title, ...rest }) => {
  const theme = useTheme();

  return (
    <Heading
      as="h3"
      color="primary.600"
      fontFamily={theme.fonts.retro}
      fontSize={{ xs: '2xl', md: '4xl' }}
      textAlign="center"
      {...rest}
    >
      {title}
    </Heading>
  );
}

export default SectionHeader;
