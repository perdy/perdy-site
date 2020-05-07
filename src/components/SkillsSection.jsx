import { Box, useTheme } from '@chakra-ui/core';
import data from 'data/linkedin.yaml';
import useResponsive from 'hooks/responsive'
import ReactWordcloud from 'react-wordcloud';
import React from 'react';

const GROUPS = 5;
const SKILLS = data.skills.map(({ name }, i) => {
  return {
    text: name,
    value: Math.ceil((GROUPS * (data.skills.length - i)) / data.skills.length)
  };
});
const FONT_SIZE = {xs: [18, 32], sm: [18, 32], md: [24, 48], lg: [32, 64], xl: [32, 64]};

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
          padding: 10,
          enableTooltip: false,
          fontSizes: FONT_SIZE[responsive],
          fontWeight: "700",
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
