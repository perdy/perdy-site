import { Box, useTheme } from '@chakra-ui/core';
import data from 'data/linkedin.yaml';
import useResponsive from 'hooks/responsive';
import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const GROUPS = 5;
const SKILLS = data.skills.map(({ name }, i) => {
  return {
    text: name,
    value: Math.ceil((GROUPS * (data.skills.length - i)) / data.skills.length)
  };
});
const FONT_SIZE = {
  xs: [8, 16],
  sm: [8, 16],
  md: [16, 32],
  lg: [32, 64],
  xl: [32, 64]
};
const PADDING = { xs: 2, sm: 2, md: 5, lg: 10, xl: 10 };

const SkillsSection = () => {
  const theme = useTheme();
  const responsive = useResponsive();

  return (
    <Box w="100%" h="xl">
      <ReactWordcloud
        words={SKILLS}
        options={{
          colors: [
            theme.colors.primary['300'],
            theme.colors.primary['500'],
            theme.colors.primary['700'],
            theme.colors.secondary['300'],
            theme.colors.secondary['500'],
            theme.colors.secondary['700']
          ],
          rotations: 0,
          padding: PADDING[responsive],
          enableTooltip: false,
          fontSizes: FONT_SIZE[responsive],
          fontWeight: '700',
          fontFamily: theme.fonts.body,
          scale: 'sqrt',
          spiral: 'archimedean',
          transitionDuration: 1000
        }}
        maxWords={data.skills.length}
      />
    </Box>
  );
};

export default SkillsSection;
