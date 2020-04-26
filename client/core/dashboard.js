import React, {Component} from 'react';
import {Segment, Responsive, Button, Icon, Table, Container} from 'semantic-ui-react';
import MenuUI from './Menu';


//__test__
import {Projects} from '../__test__/projects.json.json'
export default class Dashboard extends Component {
    constructor() {
        super()
        this.state =({
          open: true
        })
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
      {Projects.map(project => 
         <Table.Row  key={project._id}> 
         <Table.Cell collapsing>
         <Button size='small'>Detail</Button>
         </Table.Cell>
         <Table.Cell>{project.Name}</Table.Cell>
         <Table.Cell>{project.Description}</Table.Cell>
         <Table.Cell>{project.Language}</Table.Cell>
         <Table.Cell><a href={project.GitHubRepo} target='_blank'>{project.GitHubRepo}</a></Table.Cell>
       </Table.Row>
        )}
     
    </Table.Body>
     <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan='4'>
       
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
</Container>
  </div>
        )
    }
}