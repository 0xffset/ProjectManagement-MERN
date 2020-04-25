import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth/auth-helper'

import { 
    Menu
   } from 'semantic-ui-react';

  const state = { activeItem: 'projects' }
  
// const  handleItemClickMenu = (e, { name }) => state.activeItem = name;
  const goTo = (history, path) =>
  {
    history.push(path)
  }
    const MENU = withRouter(({history}) => (
      <>
              <Menu pointing secondary size='huge'>
                  <Menu.Item
                  name='projects'
                  onClick={() => goTo(history, "/dashboard")}
                  />
             <Menu.Item
                  name='profile'
                  active={state.activeItem == 'profile'}
                  onClick={() => goTo(history, "/profile/" + isAuthenticated().user._id)}
                  
                />
               <Menu.Menu position='right'>
                  <Link to='/'>
                  <Menu.Item
                    name='logout'
                    onClick={() => {signout()}}
                    />
                    </Link>
               </Menu.Menu>
              </Menu>
           </>
    ))

export default MENU
  
      
