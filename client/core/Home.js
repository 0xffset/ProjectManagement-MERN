import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility} from 'semantic-ui-react';

const Home = () => (
    <Container text>
    <Header
      as='h1'
      content='Product Management'
      inverted
      style={{
        fontSize:  '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
        color: 'black'
      }}
    />
    <Header
      as='h2'
      content='Manage your GitHub projects.'
      inverted
      style={{
        fontSize:'1.7em',
        fontWeight: 'normal',
        marginTop:  '1.5em',
        color: 'black'
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)



export default Home;