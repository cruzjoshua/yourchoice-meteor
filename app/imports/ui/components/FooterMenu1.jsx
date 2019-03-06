import React from 'react';
import { Container, Grid, List, Label, Icon, Input } from 'semantic-ui-react';

export default class FooterMenu1 extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid columns={3}>
              <Grid.Column>
                <br/>
                HOURS & LOCATION
                <hr/>
                <List>
                  <List.Item>1349 Kapiolani Blvd #30</List.Item>
                  <List.Item>Honolulu, HI 96814</List.Item>
                  <List.Item>Tuesday - Saturday 6 - 2am</List.Item>
                  <List.Item>The Republik Box Office</List.Item>
                  <List.Item>Tues-Fri 10a-6p with a $2 service fee per ticket.</List.Item>
                  <List.Item>(808) 941-7469</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <br/>
                CONNECT WITH US
                <hr/>
                <br/>
                <Icon name="circular mail" size='large'/>
                <Icon name="circular facebook f" size='large'/>
                <Icon name="circular instagram" size='large'/>
                <Icon name="circular twitter" size='large'/>
              </Grid.Column>
              <Grid.Column>
                <br/>
                GET OUR UPDATES
                <hr/>
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <Input size='small' placeholder='Enter email address'/>
                  <Label size='large' color='black'>SUBSCRIBE</Label>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
