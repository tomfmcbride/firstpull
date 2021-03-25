import React from 'react';
import Img from 'gatsby-image';

export default ({ callout }) => (
  <div className="callout">
    <Img alt="" fluid={callout.fluid} />
  </div>
);
