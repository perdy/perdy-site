import { Intro } from 'components/Intro';
import Layout from 'components/Layout';
import { SEO } from 'components/SEO';
import React from 'react';

export default () => (
  <>
    <SEO />
    <Layout>
      <Intro />
    </Layout>
  </>
);
