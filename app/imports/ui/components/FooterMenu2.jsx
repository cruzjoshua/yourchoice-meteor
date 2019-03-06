import React from 'react';
import { Container, Grid, List } from 'semantic-ui-react';

export default class FooterMenu2 extends React.Component {
  render() {
    return (
        <div className="footer2">
          <Container>
            <Grid>
              <Grid.Column>
                <hr/>
                <List>© 2019 The Republik.</List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
