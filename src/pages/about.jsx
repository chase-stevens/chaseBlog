import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = ({data}) => (
  <Layout>
    <h1>{data.site.siteMetadata.title} - About me</h1>
    <p>Welcome to my blog. I think you'll like it here.</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`