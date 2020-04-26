import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {isAuthenticated} from '../auth/auth-helper';
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

  export default class Home extends Component {
    constructor() {
      super() 
    }

    render() {
      
return (
          
<Container text>
  
    <Header
      as='h1'
      content='Projects Management'
      inverted
      style={{
        fontSize:  '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
        color: 'black'
      }}
    />
    <>
    <div style={{left: '100px', position: 'absolute'}}>
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/RolEYder/ProjectManagement-MERN?style=social"/>
    </div>
     </> 
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
    <Link to='/signin'>
      <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
    </Link>
  </Container>
      )
    
      
    }
  }


