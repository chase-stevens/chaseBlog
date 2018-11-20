import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout'
import TagsBlock from '../components/TagsBlock'

const Post = ({ data, pageContext }) => {
    const {next, prev} = pageContext;
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h2>{post.frontmatter.title}</h2>
                <TagsBlock list={post.frontmatter.tags || []} />
                <h4>{post.frontmatter.date}</h4>
                <p><Link to="/">Home</Link></p>
                <div dangerouslySetInnerHTML={{ __html: post.html}} />
            </div>
            <div>
                {next && 
                    <Link to={next.frontmatter.path}>
                    Next
                    </Link>
                }
            </div>
            <div>
                {prev && 
                    <Link to={prev.frontmatter.path}>
                    Prev
                    </Link>
                }
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
                tags
            }
            html
        }
    }
`