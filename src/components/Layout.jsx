import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import Background from 'assets/images/background.jpg';
import ExperienceSection from 'components/ExperienceSection';
import { Intro } from 'components/Intro';
import ProjectsSection from 'components/ProjectsSection';
import Section from 'components/Section';
import SkillsSection from 'components/SkillsSection'
import globalStyles from 'global';
import useResponsive from 'hooks/responsive';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import theme from 'theme';

const LAYOUT_FACTOR = {
  xs: {
    intro: { factor: 1, offset: 0 },
    projects: { factor: 3, offset: 1 },
    experience: { factor: 6, offset: 3 },
    skills: {factor: 1, offset: 6},
    pages: 7
  },
  sm: {
    intro: { factor: 1, offset: 0 },
    projects: { factor: 3, offset: 1 },
    experience: { factor: 6, offset: 3 },
    skills: {factor: 1, offset: 6},
    pages: 7
  },
  md: {
    intro: { factor: 1, offset: 0 },
    projects: { factor: 1, offset: 1 },
    experience: { factor: 3, offset: 2 },
    skills: {factor: 1, offset: 4},
    pages: 5
  },
  lg: {
    intro: { factor: 1, offset: 0 },
    projects: { factor: 1, offset: 1 },
    experience: { factor: 3, offset: 2 },
    skills: {factor: 1, offset: 4},
    pages: 5
  },
  xl: {
    intro: { factor: 1, offset: 0 },
    projects: { factor: 1, offset: 1 },
    experience: { factor: 3, offset: 2 },
    skills: {factor: 1, offset: 4},
    pages: 5
  }
};

const Layout = () => {
  const parallax = React.useRef();
  const responsive = useResponsive();

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Parallax ref={parallax} pages={LAYOUT_FACTOR[responsive].pages}>
        {/* Background */}
        <ParallaxLayer
          offset={LAYOUT_FACTOR[responsive].projects.offset}
          factor={LAYOUT_FACTOR[responsive].projects.factor}
          speed={1}
          style={{ backgroundColor: theme.colors.secondary['100'] }}
        />
        <ParallaxLayer
          offset={LAYOUT_FACTOR[responsive].experience.offset}
          factor={LAYOUT_FACTOR[responsive].experience.factor}
          speed={1}
          style={{ backgroundColor: theme.colors.primary['100'] }}
        />
        <ParallaxLayer
          offset={0}
          factor={LAYOUT_FACTOR[responsive].pages}
          speed={0}
          style={{
            opacity: 0.3,
            backgroundColor: theme.colors.gray['400'],
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Intro */}
        <ParallaxLayer
          factor={LAYOUT_FACTOR[responsive].intro.factor - 0.25}
          offset={LAYOUT_FACTOR[responsive].intro.offset + 0.25}
          speed={-0.1}
        >
          <Section>
            <Intro />
          </Section>
        </ParallaxLayer>

        {/* Projects */}
        <ParallaxLayer
          offset={LAYOUT_FACTOR[responsive].projects.offset + 0.25}
          factor={LAYOUT_FACTOR[responsive].projects.factor - 0.25}
          speed={0.5}
        >
          <Section title="Projects">
            <ProjectsSection />
          </Section>
        </ParallaxLayer>

        {/* Experience */}
        <ParallaxLayer
          offset={LAYOUT_FACTOR[responsive].experience.offset + 0.25}
          factor={LAYOUT_FACTOR[responsive].experience.factor - 0.25}
          speed={0.5}
        >
          <Section title="Experience">
            <ExperienceSection />
          </Section>
        </ParallaxLayer>

        {/* Skills */}
        <ParallaxLayer
          offset={LAYOUT_FACTOR[responsive].skills.offset + 0.25}
          factor={LAYOUT_FACTOR[responsive].skills.factor - 0.25}
          speed={0.5}
        >
          <Section title="Skills">
            <SkillsSection />
          </Section>
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
};

export default Layout;
