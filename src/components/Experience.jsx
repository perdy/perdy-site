import { Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';

const Experience = ({
  company,
  title,
  description,
  started,
  finished,
  location,
  ...rest
}) => (
  <Stack
    spacing={4}
    w="100%"
    borderColor="primary.400"
    borderWidth={1}
    rounded="lg"
    bg="primary.50"
    opacity={0.8}
    p={4}
    {...rest}
  >
    <Stack>
      <Heading
        as="h4"
        fontSize={{ xs: 'xl', lg: '2xl' }}
        textTransform="capitalize"
        color="secondary.400"
      >
        {company}
      </Heading>
      <Heading
        as="h5"
        fontSize={{ xs: 'lg', lg: 'xl' }}
        textTransform="capitalize"
        fontStyle="italic"
        color="secondary.400"
      >
        {title}
      </Heading>
      <Heading
        as="h6"
        fontSize={{ xs: 'xs', lg: 'sm' }}
        textTransform="capitalize"
        fontStyle="italic"
      >
        {started} - {finished || 'Present'} {location && `(${location})`}
      </Heading>
    </Stack>

    <Text fontSize={{ xs: 'sm', lg: 'lg' }} whiteSpace="pre-line">
      {description}
    </Text>
  </Stack>
);

export default Experience;
