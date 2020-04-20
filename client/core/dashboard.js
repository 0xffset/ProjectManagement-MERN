import React, {Component} from 'react';
import { Button, Checkbox, Icon, Table, Container} from 'semantic-ui-react';
import {signout} from '../auth/auth-helper'
import MenuUI from './Menu';

export default class Dashboard extends Component {
    constructor() {
        super()
      }
    
    render() {
      
        return (
<div>
<MenuUI />
<Container className='containerDashboard' style={{marginTop : '30px'}} >
<Table celled compact definition>
    <Table.Header fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Languaje</Table.HeaderCell>
        <Table.HeaderCell>GitHub repository</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
        <Button size='small'>Detail</Button>
        </Table.Cell>
        <Table.Cell>GreenTree</Table.Cell>
        <Table.Cell>Safe the world using machine learning</Table.Cell>
        <Table.Cell>JavaScript</Table.Cell>
        <Table.Cell>www.test.com</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            secondary
            size='small'
          >
            <Icon name='github'/> Add project
          </Button>
        
          
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
</Container>
  </div>
        )
    }
}