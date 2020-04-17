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
       state = { activeItem: 'home' }
      
        handleItemClick = (e, { name }) => this.setState({ activeItem: name })
      
        render() {
          const { activeItem } = this.state
      
          return (
            <Menu>
            <Menu.Item>
              <Button primary>Sign up</Button>
            </Menu.Item>
        
            <Menu.Item>
              <Button>Log-in</Button>
            </Menu.Item>
            
          </Menu>
          )
        }
      }
  
