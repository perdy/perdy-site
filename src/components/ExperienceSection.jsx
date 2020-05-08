import { Stack } from '@chakra-ui/core';
import Experience from 'components/Experience';
import data from 'data/linkedin.yaml';
import React from 'react';

const ExperienceSection = () => (
  <Stack spacing={{ xs: 4, lg: 10 }} align="center">
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
  </Stack>
);

export default ExperienceSection;
