import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Callout from '../components/callout';
import Container from '../components/container';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const guild = get(this, 'props.data.allContentfulGuild.edges')[0];
    console.log(guild);

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={guild.node} />
        <Container>
          <div className="wrapper">
            <ul className="article-list">
              <Callout callout={guild.node.leftCallOut} />
              <Callout callout={guild.node.centerCallOut} />
              <Callout callout={guild.node.rightCallOut} />
            </ul>
            <div className="apply-banner">
              <img alt="apply banner" src={guild.node.banner.fluid.src} />
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulGuild {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          leftCallOut: leftCallOut {
            fluid(maxWidth: 350, maxHeight: 210) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          centerCallOut: centerCallOut {
            fluid(maxWidth: 350, maxHeight: 210) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          rightCallOut: rightCallOut {
            fluid(maxWidth: 350, maxHeight: 210) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          banner: banner {
            fluid(maxWidth: 700, maxHeight: 176) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
