import { Accordion } from '@chakra-ui/core';
import Honor from 'components/Honor';
import data from 'data/linkedin.yaml';
import React from 'react';

const HonorsSection = () => (
  <Accordion
    borderWidth={1}
    borderColor="primary.200"
    bg="primary.50"
    opacity={0.8}
  >
    {data.honors.map((node, i) => (
      <Honor
        key={`honor-${i}`}
        title={node.title}
        description={node.description}
        date={node['issued-on']}
      />
    ))}
  </Accordion>
);

export default HonorsSection;
