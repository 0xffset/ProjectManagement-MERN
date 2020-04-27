import React, { useState, useEffect} from 'react'
import { Card, Icon, Image, Grid, Modal, Form, Input,  Container, Button,  } from 'semantic-ui-react'
import {fetchDataUser, updateUser} from './api-user';
import Moment from 'react-moment';
import Menu from '../core/Menu';
import ProfileLoader from '../user/placeholders/ProfileLoader'
import {Redirect} from 'react-router-dom'
import {authenticate} from '../auth/auth-helper'

export default function Profile({match}) {
   const [values, setValues] = useState({
        error: '',
        loading: true,
        open: false
        })

        const [update, setUpdate] = useState({
          name: '',
          password: '',
          email: '',
          github_name: '',
          error: ''
        })

const [Data, setData] = useState('')
const [DataChanged, DataChangedUpdate ] = useState(0)

const onClickSubmitUpdate = () => {
  const updateObj = {
    name:  update.name || undefined,
    email:  update.email|| undefined,
    password: update.password || undefined,
    githubname: update.github_name || undefined,
    id: match.params.userId
  }

   updateUser(updateObj)
    .then(data => {
      if(data.err) {
        setUpdate({...update, error: data.err})
        
      }
      else {
        setUpdate({error: ''});
        authenticate(data)
        setValues({open: false});
        <Redirect to='/' />
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
                email: data.User[0].email,
                github_name: data.User[0].github_name})
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
        id='form-input-control-githuname-name'
        control={Input}
        label="GitHub name"
        value={update.github_name}
        onChange={handlerSubmitUpdate('github_name')}
        placeholder='Github name'
        
        
              />
    <Form.Field
        id='form-input-control-password'
        control={Input}
        label='New Password'
        type='password'
        onChange={handlerSubmitUpdate('password')}
        placeholder='Empty: old password'
      />
     
    </Form.Group>
    
    <Form.Field
      id='form-input-control-email'
      control={Input}
      label='Email'
      placeholder='Email'

      onChange={handlerSubmitUpdate('email')}
      value={update.email}
  
    />
    <Form.Field
      id='form-input-control-repository'
      control={Input}
      label='GitHub Repository'
      value={Data.User == null ? "" : `https://github.com/${update.github_name}`}
      readOnly
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
