import { SimpleGrid } from '@chakra-ui/core';
import Experience from 'components/Experience';
import data from 'data/linkedin.yaml';
import React from 'react';

const ExperienceSection = () => (
  <SimpleGrid columns={1} spacing={{ xs: 4, lg: 10 }}>
    {data.positions.map((node, i) => (
      <Experience
        key={`experience-${i}`}
        company={node["company-name"]}
        title={node.title}
        description={node.description}
        started={node["started-on"]}
        finished={node["finished-on"]}
        location={node.location}
      />
    ))}
  </SimpleGrid>
);

export default ExperienceSection;
