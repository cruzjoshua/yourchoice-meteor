import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default class MiddleContainer extends React.Component {
  render() {
    return (
        <div className='middle'>
          <Container>
            <br/>
            <Header as="h3">FEATURED EVENTS</Header><Header as="h5">all events</Header>
            <br/>
            <br/>
            <br/>
          </Container>
        </div>
    );
  }
}
