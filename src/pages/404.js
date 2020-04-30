import { Heading, Text } from '@chakra-ui/core';
import { SEO } from 'components/SEO';
import React from 'react';

export default () => (
  <>
    <SEO title="404: Not found" location="/404" />
    <Heading as="h1">Not Found</Heading>
    <Text>You just hit a route that doesn&#39;t exist.</Text>
  </>
);
