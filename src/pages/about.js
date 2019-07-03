import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>Über mich</h1>
            <p>Bla Bla...</p>
            <Link to="/contact">Kontakt</Link>
        </Layout>
    )
}

export default AboutPage;