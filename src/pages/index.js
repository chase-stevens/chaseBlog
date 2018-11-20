import React from 'react'
import { Link } from 'gatsby'
import Index from '../layouts/index.jsx'

import Layout from '../components/layout'

const IndexPage = ({data}) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <h1>Home Page</h1>
      <Index />
      {edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={node.frontmatter.path}>
              {node.frontmatter.title}{" "}
            </Link>
          </h3>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark (
    filter: { frontmatter: { draft: { eq: false} } }
    sort: {order: DESC, fields: [frontmatter___date]}
    ) {
    edges {
      node {
        id
        excerpt(pruneLength: 75)
        frontmatter {
          title
          date(formatString: "MM.DD.YYYY")
          path
        }
      }
    }
  }
}
`