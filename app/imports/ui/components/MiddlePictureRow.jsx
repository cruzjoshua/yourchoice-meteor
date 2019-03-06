import React from 'react';
import { Container, Grid, Image, List } from 'semantic-ui-react';

export default class MiddlePictureRow extends React.Component {
  render() {
    return (
        <div className='middle'>
          <Container>
            <br/>
            <br/>
            <Grid columns={4}>
              <Grid.Column>
                <Image src='http://jointherepublik.com/wp-content/uploads/2018/12/Ninja_Sex_Party_2019-1-615x615.jpg'
                       size='medium'/>
                <List>
                  <List.Item>
                    NINJA SEX PARTY: A GREAT LEI
                  </List.Item>
                  <List.Item>
                    February 20
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Image
                    src='http://jointherepublik.com/wp-content/uploads/2020/01/Atmosphere_Oahu_ig_1600x1600-615x615.jpg'
                    size='medium'/>
                <List>
                  <List.Item>
                    ATMOSPHERE
                  </List.Item>
                  <List.Item>
                    April 6
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Image
                    src='http://jointherepublik.com/wp-content/uploads/2019/02/Screenshot-2019-02-11-20.02.24-615x615.png'
                    size='medium'/>
                <List>
                  <List.Item>
                    DESENDENTS
                  </List.Item>
                  <List.Item>
                    April 19
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Image src='http://jointherepublik.com/wp-content/uploads/2019/01/SHALLOUTour-Poster-Square-1-1-615x615.jpg'
                    size='medium'/>
                <List>
                  <List.Item>
                    SLOW MAGIC & SHALLOU: INTO THE WILD TOUR
                  </List.Item>
                  <List.Item>
                    May 4
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Container>
        </div>
    );
  }
}
