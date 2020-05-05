import { Box } from '@chakra-ui/core';
import SectionHeader from 'components/SectionHeader';
import React from 'react';

const Section = ({ title, children, ...rest }) => (
  <Box width="full" maxWidth="1280px" mx="auto" px={6} {...rest}>
    {title && <SectionHeader title={title} />}
    <Box pt={{xs: 6, md: 24}}>
      {children}
    </Box>
  </Box>
);

export default Section;
