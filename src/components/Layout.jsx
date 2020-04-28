import { CSSReset, ThemeProvider, useTheme } from '@chakra-ui/core'
import { Global } from '@emotion/core';
import Background from 'assets/background.jpg';
import Container from 'components/Container';
import { Intro } from 'components/Intro';
import { globalStyles } from 'global';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

const pages = 2;

const Layout = () => {
  const parallax = React.useRef();
  const theme = useTheme();

  return (
    <ThemeProvider>
      <CSSReset />
      <Global styles={globalStyles} />
      <Parallax ref={parallax} pages={pages}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: theme.colors.teal["200"] }}
        />
        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{ backgroundColor: theme.colors.blue["200"] }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={pages}
          style={{
            opacity: 0.3,
            backgroundColor: theme.colors.gray["400"],
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'repeat'
          }}
        />
        <ParallaxLayer offset={0.5} speed={1}>
          <Container>
            <Intro />
          </Container>
        </ParallaxLayer>
      </Parallax>
    </ThemeProvider>
  );
};

export default Layout;
