import React from 'react';
import './base.css';
import Navigation from './navigation';
import Container from './container';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <div style={{ background: 'rgb(28, 28, 28)' }}>
          <Container>
            <Navigation />
          </Container>
        </div>
        {children}
      </>
    );
  }
}

export default Template;
