import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I am Kermin, a full-stack Developer.</h2>
      <p>Need a developer? <Link to="/contact">contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage