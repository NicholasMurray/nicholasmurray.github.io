import React from 'react'
import { Link } from 'gatsby'

import * as styles from './Layout.module.scss'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
        <footer>
          <div className={styles.social}>
            <a href="http://github.com/nicholasmurray"><i className={[styles.svgIcon, styles.github].join(' ')}></i></a> 
            <a href="http://twitter.com/theemurray"><i className={[styles.svgIcon, styles.twitter].join(' ')}></i></a>
            <a href="http://stackoverflow.com/users/124966/nicholas-murray"><i className={[styles.svgIcon, styles.stackoverflow].join(' ')}></i></a>
          </div>
          <div>
            © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
