import React, {Component} from 'react'
import { Card, Icon, Image, Grid, Modal, Form, Input,  Container, Button,  } from 'semantic-ui-react'
import {fetchDataUser} from './api-user';

import Moment from 'react-moment';
import Menu from '../core/Menu';
import ProfileLoader from '../user/placeholders/ProfileLoader'

export default class Profile extends Component {

    _isMounted = true
    constructor({match}) {
        super()
        this.state = {
          user: null,
          open: false,
          error: [],
          loading: true
        }
        this.match = match
    }

onShowEditModal = () => {
  this.setState({open: true})
}
onCloseEditModa = () => {
  this.setState({open: false})
}
  
componentDidMount = () => {
    fetchDataUser(this.props.match.params.userId)
      .then(data => {
        setTimeout(() => {

          this.setState(
            {user: data,
              loading: false
            })
        }, 3000)
      });
   }
 
     render() {
      return (
        <div>
         
          <div>
            <Menu />
 <Container  style={{marginTop: '30px', align: 'center'}}>
 {this.state.loading ? (
          <>      <Card centered>
                  <ProfileLoader />
                  </Card>
          </>
        ) : (
        <>
          <Card centered>
      
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
          <Card.Header>{this.state.user !== null ?  this.state.user.User[0].name : ""}</Card.Header>
        <Card.Meta>
        <span className='date'> {"Joined: "} 
  
          <Moment format="dd mm YYYY HH:mm"> 
            {this.state.user !== null ?  this.state.user.User[0].created : ""} 
          </Moment>
          </span>
         
        </Card.Meta>
        <Card.Description>
        {this.state.user !== null ?  this.state.user.User[0].email : ""}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='github' />
          22 projects
        </a>
      </Card.Content>
      
    </Card>
   <Grid>
      <Grid.Column textAlign="center">
      <Button positive
      onClick={this.onShowEditModal}
      >Edit</Button>
      
      </Grid.Column>
    </Grid>
  
        </>) }
  
  {/* Modal edit */}
  <Modal dimmer={'blurring'} open={this.state.open} onClose={this.onCloseEditModa}>
          <Modal.Header>Edit profile</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
            />
            <Modal.Description>
            
              <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label=' Name'
        
        placeholder={this.state.user !== null ?  this.state.user.User[0].name : ""}
              />
    <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='New Password'
        type='password'
        placeholder='*******'
      />
     
    </Form.Group>
    
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder={this.state.user !== null ?  this.state.user.User[0].email : ""}
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='GitHub Repository'
      placeholder='https://github.com/username'
      error={{
        content: 'Please enter a valid email GitHub repository',
        pointing: 'below',
      }}
    />
  </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content="Update!"
              onClick={this.onCloseEditModa}
            />
          </Modal.Actions>
        </Modal>
  {/* end Modal edit */}

</Container>
          </div> 
        </div>
      )
    }
}
