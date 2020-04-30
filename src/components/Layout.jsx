import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import Background from 'assets/images/background.jpg';
import Container from 'components/Container';
import { Intro } from 'components/Intro';
import globalStyles from 'global';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import theme from 'theme';

const pages = 2;

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
          factor={0.5}
          style={{ backgroundColor: theme.colors.primary['400'] }}
        />
        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{ backgroundColor: theme.colors.secondary['200'] }}
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
        <ParallaxLayer offset={0.25} speed={1}>
          <Container>
            <Intro />
          </Container>
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
};

export default Layout;
