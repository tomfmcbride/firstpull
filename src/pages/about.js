import React from 'react';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import styles from './about.module.css';
import Layout from '../components/layout';

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>About</div>
        <div className="wrapper">
          <ul className="article-list"></ul>
        </div>
      </Layout>
    );
  }
}

export default AboutIndex;
