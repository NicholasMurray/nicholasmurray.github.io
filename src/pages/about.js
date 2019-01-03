import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="About" />
        <Bio />
        <h1>About</h1>
        <p>The about page</p>
      </Layout>
    )
  }
}

export default About
