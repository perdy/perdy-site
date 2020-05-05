import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import Background from 'assets/images/background.jpg';
import Section from 'components/Section';
import { Intro } from 'components/Intro';
import { Projects } from 'components/Projects';
import globalStyles from 'global';
import useResponsive from 'hooks/responsive';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import theme from 'theme';

const PAGES = { xs: 4, sm: 4, md: 3, lg: 3, xl: 3 };
const FACTOR_EXPERIENCE = { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 };
const FACTOR_PROJECTS = { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 };

const Layout = () => {
  const parallax = React.useRef();
  const responsive = useResponsive();

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Parallax ref={parallax} pages={PAGES[responsive]}>
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{ backgroundColor: theme.colors.primary['100'] }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={3}
          style={{ backgroundColor: theme.colors.secondary['100'] }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={PAGES[responsive]}
          style={{
            opacity: 0.3,
            backgroundColor: theme.colors.gray['400'],
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'repeat'
          }}
        />
        <ParallaxLayer offset={0.25} speed={-0.1}>
          <Section>
            <Intro />
          </Section>
        </ParallaxLayer>
        <ParallaxLayer offset={1.25} speed={0.5} factor={FACTOR_EXPERIENCE[responsive]}>
          <Section title="Experience">
          </Section>
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} speed={0.5} factor={FACTOR_PROJECTS[responsive]}>
          <Section title="Projects">
            <Projects />
          </Section>
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
};

export default Layout;
