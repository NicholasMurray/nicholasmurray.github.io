import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

class Contributors extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Contributors" />
        <Bio />
        <div>
          <h1>Contributors</h1>
          <p>The Contributors page</p>   
          <p>Every post in my blog has an edit link that lets you edit the blog post directly in the browser and automatically sends me a pull request.</p>
          <p>Or <a href="">visit my repository</a> and send me a pull request the old fashioned way.</p>       
        </div>
      </Layout>
    )
  }
}

export default Contributors
