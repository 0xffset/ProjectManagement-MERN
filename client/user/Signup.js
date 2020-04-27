import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {createNewUser} from '../auth/api-auth';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal} from 'semantic-ui-react';

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            github_name: '',
            redirect: false,
            error: '',
        }
    }

    handlerSubmit = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined,
            githubname: this.state.github_name || undefined
        }
       
        createNewUser(user).then((data) => {
            if(data.error) {
                console.log(data.error)
                this.setState({error: data.error})
            }
            else {
                this.setState({error: '', open: true})
            }
        } )
    }


    render() {
       return (
           <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
           Sign-up to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' onChange={this.handlerSubmit('name')} />
            <Form.Input fluid icon='github' iconPosition='left' placeholder='GitHub Name' onChange={this.handlerSubmit('github_name')} />
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'  onChange={this.handlerSubmit('email')} />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.handlerSubmit('password')}
              />
    
              <Button color='blue' fluid size='large' onClick={this.clickSubmit}>
                Sign up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <a href='#'>Sign In</a>
          </Message>
        </Grid.Column>
      </Grid>


      <Modal size='mini' open={this.state.open}>
      <Modal.Header>New account </Modal.Header>
      <Modal.Content>
        <p>New account successfully created 👍</p>
      </Modal.Content>
      <Modal.Actions>
      <Link to='/signin'>
          <Button
            positive
            icon='checkmark'
            labelPosition='right'
            content='Sign-in'
        />
      </Link>
      
      </Modal.Actions>
    </Modal>
    </>
       )
    }
}

export default SignUp