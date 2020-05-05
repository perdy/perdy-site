import { Box, Flex, Link } from '@chakra-ui/core';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/all';
import Section from 'components/Section';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.500" flexShrink={0}>
      <Section py={5}>
        <Flex justify="space-between">
          <Box>
            Created by{' '}
            <Link href="https://perdy.io/" color="blue.700" isExternal>
              Perdy
            </Link>
          </Box>
          <Flex align="center" justify="center" direction="right">
            <Link href="https://github.com/perdy" px={1} isExternal>
              <Box as={FaGithub} size={{ xs: 4, md: 6 }} />
            </Link>
            <Link href="https://linkedin.com/in/p3rdy" px={1} isExternal>
              <Box as={FaLinkedin} size={{ xs: 4, md: 6 }} />
            </Link>
          </Flex>
        </Flex>
      </Section>
    </Box>
  );
};

export default Footer;
