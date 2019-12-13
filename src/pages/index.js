import React from "react"
import { FaRegCalendarAlt } from "react-icons/fa"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p
                  style={{
                    ...scale(-1 / 5),
                    color: `#666`,
                    display: `block`,
                    fontStyle: `italic`,
                    marginBottom: rhythm(1),
                  }}
                >
                  <FaRegCalendarAlt
                    style={{
                      fontSize: `1.3rem`,
                      marginRight: `0.5rem`,
                      marginBottom: `-2px`
                    }}
                  />
                  {node.frontmatter.date}
                </p>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Link 
                  style={{ 
                    boxShadow: `none`,
                    display: `block`,
                    marginTop: `-1.5rem`,
                  }} 
                  to={node.fields.slug}>
                  READ MORE
                </Link>
              </section>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: HTML, pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
