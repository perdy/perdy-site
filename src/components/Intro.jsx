import {
  Box,
  Heading,
  IconButton,
  Image,
  Link,
  Stack,
  useTheme
} from '@chakra-ui/core';
import Portrait from 'assets/images/perdy.png';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/all';

export const Intro = () => {
  const theme = useTheme();

  return (
    <Stack align="center" spacing={{ xs: 6, md: 12 }}>
      <Box borderWidth="2px" borderColor="primary.700" rounded="full">
        <Image
          rounded="full"
          size={{ xs: 24, md: 64 }}
          src={Portrait}
          alt="Perdy"
        />
      </Box>
      <Stack spacing={2}>
        <Heading
          as="h1"
          textAlign="center"
          fontFamily={theme.fonts.retro}
          fontSize={{ xs: 'md', md: '4xl' }}
          color="primary.700"
        >
          José Antonio Perdiguero López
        </Heading>
        <Heading
          as="h2"
          textAlign="center"
          fontStyle="italic"
          fontSize={{ xs: 'md', md: '3xl' }}
          color="primary.600"
        >
          Artificial Intelligence Engineer & Software Architect
        </Heading>
      </Stack>
      <Stack isInline>
        <IconButton
          rounded="full"
          as={Link}
          href="https://github.com/perdy/"
          variant="outline"
          variantColor="secondary"
          aria-label="LinkedIn"
          size="lg"
          fontSize={24}
          icon={FaGithub}
          _focus={{ boxShadow: 'none' }}
          isExternal
        />
        <IconButton
          rounded="full"
          as={Link}
          href="https://linkedin.com/in/p3rdy/"
          variant="outline"
          variantColor="secondary"
          aria-label="LinkedIn"
          size="lg"
          fontSize={24}
          icon={FaLinkedin}
          _focus={{ boxShadow: 'none' }}
          isExternal
        />
      </Stack>
    </Stack>
  );
};
