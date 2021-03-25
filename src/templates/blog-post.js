import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulHeroBanner');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}></div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulHeroBanner(slug: { eq: $slug }) {
      title
    }
  }
`;
