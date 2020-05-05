import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useTheme
} from '@chakra-ui/core';
import React from 'react';
import { FaCodeBranch, FaStar } from 'react-icons/fa';

const Project = ({ name, url, description, stars, forks, language }) => {
  const theme = useTheme();
  return (
    <Box
      mx="auto"
      w={{ xs: '2xs', sm: 'xs', lg: 'sm' }}
      borderColor="primary.400"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      bg="primary.200"
      opacity={0.8}
    >
      <Flex direction="column" justify="space-between" p={4} h="100%">
        <Stack>
          <Heading
            as="h4"
            fontSize={{ xs: 'lg', lg: '2xl' }}
            textTransform="capitalize"
            color="secondary.400"
          >
            <Link
              href={url}
              _hover={{ textDecoration: {} }}
              _focus={{ shadow: {} }}
            >
              {name.replace('-', ' ')}
            </Link>
          </Heading>
          <Text fontSize={{ xs: 'sm', lg: 'lg' }}>{description}</Text>
        </Stack>
        <Stack pt={4} direction="row" justify="flex-end" spacing={6}>
          <Box>{language}</Box>
          <Link
            href={`${url}/stargazers`}
            _hover={{
              textDecoration: null,
              color: theme.colors.secondary['400']
            }}
            _focus={{ shadow: {} }}
          >
            <Stack direction="row" align="center" spacing={1}>
              <Box d="inline" as={FaStar} />
              <Box>{stars}</Box>
            </Stack>
          </Link>
          <Link
            href={`${url}/network/members`}
            _hover={{
              textDecoration: null,
              color: theme.colors.secondary['400']
            }}
            _focus={{ shadow: {} }}
          >
            <Stack direction="row" align="center" spacing={1}>
              <Box d="inline" as={FaCodeBranch} />
              <Box>{forks}</Box>
            </Stack>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Project;
