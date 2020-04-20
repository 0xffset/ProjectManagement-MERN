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

    export default class MenuUI extends Component {
      constructor() {
        super()
      }
      state = { activeItem: 'projects' }

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
                <Menu.Item
                  name='profile'
                  active={activeItem === 'profile'}
                  onClick={this.handleItemClickMenu}
                />
                <Menu.Menu position='right'>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClickMenu}
                  />
                </Menu.Menu>
              </Menu>
      
              
            </div>
          )
        }
      }
  
