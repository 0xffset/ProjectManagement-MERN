import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/auth-helper'
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

    export default class MenuUI extends Component {
      constructor() {
        super()
      }
      state = { activeItem: 'projects' }
      onSignOut = () => {
       
        signout();
      }
      handleItemClickMenu = (e, { name }) => this.setState({ activeItem: name })
      
        render() {
          const { activeItem } = this.state
          return (
            <div>
              <Menu pointing secondary size='huge'>
            
                <Menu.Item
                  name='projects'
                  active={activeItem === 'projects'}
                  onClick={this.handleItemClickMenu}
                />
                <Link to={"/profile/" + isAuthenticated().user._id }>
                <Menu.Item
                  name='profile'
                  active={activeItem === 'profile'}
                  onClick={this.handleItemClickMenu}
                />
               
                </Link>
                <Menu.Menu position='right'>
                <Link to='/'>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.onSignOut}
                  />
                </Link>
                </Menu.Menu>
              </Menu>
      
              
            </div>
          )
        }
      }
  
