import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import * as styles from './Bio.module.scss'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={styles.wrapperMasthead}>
            <div className={styles.container}>
              <header className={[styles.masthead, styles.clearfix].join(' ')}>
                <div>
                  <a href="/" className={styles.siteAvatar}>
                    <img src="https://avatars1.githubusercontent.com/u/1111211?v=3&amp;s=460" />
                  </a>
                </div>
                <div className={styles.siteInfo}>
                  <h1 className={styles.siteName}>
                    <a href="/">It's My Code Blog</a>
                  </h1>
                  <p className={styles.siteDescription}>Stuff I've learnt and stuff I like</p>
                </div>
                <div className={styles.nav}>
                  <a href="/">Blog</a>
                  <a href="/about">About</a>
                  <a href="/contributors">Contributors</a>
                </div>
              </header>
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
