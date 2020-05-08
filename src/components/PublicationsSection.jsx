import { Accordion } from '@chakra-ui/core'
import Publication from 'components/Publication'
import data from 'data/linkedin.yaml'
import React from 'react'

const PublicationsSection = () => (
  <Accordion
    borderWidth={1}
    borderColor="secondary.200"
    bg="secondary.50"
    opacity={0.8}
  >
    {data.publications.map((node, i) => (
      <Publication
        key={`honor-${i}`}
        name={node.name}
        description={node.description}
        date={node['published-on']}
        publisher={node.publisher}
        url={node.url}
      />
    ))}
  </Accordion>
);

export default PublicationsSection;
