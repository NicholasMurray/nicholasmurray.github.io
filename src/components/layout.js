import React from "react"
import { IconContext } from "react-icons"
import { FaStackOverflow, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(1),
          }}
        >
          <div
            style={{
              display: `flex`,
              justifyContent: `center`,
              padding: `1rem 0`,
            }}
          >
            <IconContext.Provider
              value={{ color: `#666`, size: rhythm(1.5) }}
            >
              <a 
                style={{
                  marginRight: rhythm(1),
                  boxShadow: `none`,
                }}
                href="http://github.com/nicholasmurray">
                  <FaGithub />
              </a> 
              <a 
                style={{
                  marginRight: rhythm(1),
                  boxShadow: `none`,
                }}
                href="http://twitter.com/theemurray"><FaTwitter />
              </a>
              <a 
              style={{
                  marginRight: rhythm(1),
                  boxShadow: `none`,
                }}
                href="http://stackoverflow.com/users/124966/nicholas-murray"><FaStackOverflow />
              </a>
            </IconContext.Provider>
          </div>
          <div>
            <p>
              © {new Date().getFullYear()}, Built now with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>

          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
