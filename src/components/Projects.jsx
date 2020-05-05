import { SimpleGrid } from '@chakra-ui/core';
import Project from 'components/Project';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export const Projects = () => {
  const {
    github: {
      viewer: {
        pinnedItems: { edges }
      }
    }
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on GitHub_Repository {
                    id
                    name
                    description
                    primaryLanguage {
                      color
                      name
                    }
                    forkCount
                    stargazers {
                      totalCount
                    }
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <SimpleGrid columns={{ xs: 1, md: 2, lg: 3 }} spacing={{ xs: 4, lg: 10 }}>
      {edges.map(({ node }) => (
        <Project
          key={node.id}
          name={node.name}
          url={node.url}
          description={node.description}
          stars={node.stargazers.totalCount}
          forks={node.forkCount}
          language={node.primaryLanguage.name}
        />
      ))}
    </SimpleGrid>
  );
};
