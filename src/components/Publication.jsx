import {
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
  Text
} from '@chakra-ui/core';
import React from 'react';

const Publication = ({ name, description, date, publisher, url }) => (
  <AccordionItem
    borderColor="secondary.100"
    _first={{ borderTopWidth: 0 }}
    _last={{ borderBottomWidth: 0 }}
  >
    <AccordionHeader _focus={{ boxShadow: null }}>
      <Heading
        as="h4"
        flex="1"
        textAlign="left"
        fontSize={{ xs: 'sm', lg: 'xl' }}
        textTransform="capitalize"
        color="primary.400"
      >
        {name}
      </Heading>
      <AccordionIcon color="secondary.500" />
    </AccordionHeader>
    <AccordionPanel pb={4}>
        <Heading
          as="h5"
          fontSize={{ xs: 'xs', lg: 'sm' }}
          textTransform="capitalize"
          fontStyle="italic"
          pb={4}
        >
          {publisher} {date && `(${date})`}
        </Heading>
      <Text fontSize={{ xs: 'sm', lg: 'xl' }} whiteSpace="pre-line">
        {description}
      </Text>
    </AccordionPanel>
  </AccordionItem>
);

export default Publication;
