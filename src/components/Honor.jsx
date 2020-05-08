import {
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  Text
} from '@chakra-ui/core';
import React from 'react';

const Honor = ({ title, description, date }) => (
  <AccordionItem
    borderColor="primary.100"
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
        color="secondary.400"
      >
        {title}
      </Heading>
      <AccordionIcon color="primary.500" />
    </AccordionHeader>
    <AccordionPanel pb={4}>
      {date && (
        <Heading
          as="h5"
          fontSize={{ xs: 'xs', lg: 'sm' }}
          textTransform="capitalize"
          fontStyle="italic"
          pb={4}
        >
          {date}
        </Heading>
      )}
      <Text fontSize={{ xs: 'sm', lg: 'xl' }} whiteSpace="pre-line">
        {description}
      </Text>
    </AccordionPanel>
  </AccordionItem>
);

export default Honor;
