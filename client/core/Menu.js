import React, {Component} from 'react';
import {Redirect, Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/auth-helper'
import PropTypes from 'prop-types';
import { 
    Menu
   } from 'semantic-ui-react';
   
   const state = { activeItem: 'projects' }
   const  onSignOut = () => {
       
        signout();
      }
    const  handleItemClickMenu = (e, { name }) => state.activeItem = name;

    const MENU = withRouter(({history}) => (
      <div>
              <Menu pointing secondary size='huge'>
            
               <Link to='/dashboard'>
               <Menu.Item
                  name='projects'
                  active={state.activeItem == 'projects'}
                  onClick={handleItemClickMenu}
                  
                />
               </Link>
                <Link to={"/profile/" + isAuthenticated().user._id }>
                <Menu.Item
                  name='profile'
                  active={state.activeItem == 'profile'}
                  onClick={handleItemClickMenu}
                  
                />
               
                </Link>
                <Menu.Menu position='right'>
                <Link to='/'>
                  <Menu.Item
                    name='logout'
                    />
                </Link>
                </Menu.Menu>
              </Menu>
      
              
            </div>
    ))

export default MENU
  
      
