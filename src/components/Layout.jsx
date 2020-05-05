import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import Background from 'assets/images/background.jpg';
import Section from 'components/Section';
import { Intro } from 'components/Intro';
import { Projects } from 'components/Projects';
import globalStyles from 'global';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import theme from 'theme';

const pages = 4;

const Layout = () => {
  const parallax = React.useRef();

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Global styles={globalStyles} />
      <Parallax ref={parallax} pages={pages}>
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
          factor={pages}
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
        <ParallaxLayer offset={2.25} speed={0.5}>
          <Section title="Projects">
            <Projects />
          </Section>
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
};

export default Layout;
