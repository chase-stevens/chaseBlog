import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout'

const Post = ({ data }) => {
    const post= data.markdownRemark
    return (
        <Layout>
            <div>
                <h2>{post.frontmatter.title}</h2>
                <h4>{post.frontmatter.date}</h4>
                <p><Link to="/">Home</Link></p>
                <div dangerouslySetInnerHTML={{ __html: post.html}} />
            </div>
        </Layout>
    )
}

export default Post

export const query = graphql`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: {path: {eq: $pathSlug} }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`