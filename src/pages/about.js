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
        <div class="entry">
          <p>I’m a UI Engineer…</p>
          <p>…and I like to cycle</p>
          <h3 id="contact-me">Contact me</h3>
          <p>
            <a href="mailto:murray.nicholas@gmail.com">murray.nicholas@gmail.com</a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default About
