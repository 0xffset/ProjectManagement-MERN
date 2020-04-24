import React, {Component, useState, useEffect} from 'react'
import { Card, Icon, Image, Grid, Modal, Form, Input,  Container, Button,  } from 'semantic-ui-react'
import {fetchDataUser, updateUser} from './api-user';
import {isAuthenticated} from '../auth/auth-helper'
import Moment from 'react-moment';
import Menu from '../core/Menu';
import ProfileLoader from '../user/placeholders/ProfileLoader'
import { Redirect } from 'react-router-dom';

export default function Profile({match}) {
    const jwt = isAuthenticated();
    const [values, setValues] = useState({
        error: '',
        loading: true,
        open: false
        })

        const [update, setUpdate] = useState({
          name: '',
          password: '',
          email: '',
          error: ''
        })

const [Data, setData] = useState('')
const [DataChanged, DataChangedUpdate ] = useState(0)

const onClickSubmitUpdate = () => {
  const updateObj = {
    name:  update.name || undefined,
    email:  update.email|| undefined,
    password: update.password || undefined,
    id: match.params.userId
  }

   updateUser(updateObj)
    .then(data => {
      if(data.err) {
        setUpdate({...update, error: data.err})
      }
      else {
        setUpdate({error: ''})
        jwt.user.name = String(updateObj.name);
       <Redirect to={'/dashboard/'}/>
      }
    })
}

const handlerSubmitUpdate = name =>  event => {
setUpdate({...update, [name]: event.target.value})
}

const onShowEditModal = () => {
  setValues({open: true})
  
}
const onCloseEditModa = () => {
  setValues({open: false})
}

useEffect(() => {
  fetchDataUser(match.params.userId)
  .then(data => {
    setTimeout(() => {
      setData(data)
      setUpdate({name : data.User[0].name,
                password: data.User[0].password,
                email: data.User[0].email})
      setValues({loading: false})
    }, 3000)
  })
    .catch((err) => {})

},[DataChanged])

return (
        <div>
         
          <div>
            <Menu />
 <Container  style={{marginTop: '30px', align: 'center'}}>
 {values.loading ? (
          <>      <Card centered>
                  <ProfileLoader />
                  </Card>
          </>
        ) : (
        <>
          <Card centered>
      
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>{Data.User[0].name}</Card.Header>
        <Card.Meta>
        <span className='date'> {"Joined: "} 
  
          <Moment format="dd mm YYYY HH:mm"> 
            {Data.User[0].created}
          </Moment>
          </span>
         
        </Card.Meta>
        <Card.Description>
       {Data.User[0].email}
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
      onClick={onShowEditModal}
      >Edit</Button>
      
      </Grid.Column>
    </Grid>
  
        </>) }
  
  {/* Modal edit */}
  <Modal dimmer={'blurring'} open={values.open} onClose={onCloseEditModa}>
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
        label="Name"
        value={update.name }
        onChange={handlerSubmitUpdate('name')}
        placeholder='Name'
        
        
              />
    <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='New Password'
        type='password'
        obChange={handlerSubmitUpdate('password')}
        placeholder='Empty: old password'
      />
     
    </Form.Group>
    
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='Email'

      onChange={handlerSubmitUpdate('email')}
      value={update.email}
  
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='GitHub Repository'
      value={Data.User == null ? "" : Data.User[0].email}
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
              onClick={onClickSubmitUpdate}
            />
          </Modal.Actions>
        </Modal>
  {/* end Modal edit */}

</Container>
          </div> 
        </div>
      )
    
}
