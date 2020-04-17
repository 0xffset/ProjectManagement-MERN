import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {signin} from '../auth/api-auth';
import {isAuthenticated} from './auth-helper';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal} from 'semantic-ui-react';


class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            open: false,
            redirect: false,
            error: ''
        }
    }
    onCloseModal = () => {
        this.setState({open: false})
    }
    
    handlerSubmit = name => event => {
        this.setState({[name]: event.target.value})
    }

    clickSubmit = () => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined,
        }
       
        signin(user).then((data) => {
            console.log(data)
            if(!data.error) {
                this.setState({error: data.error})
                this.setState({open: true})
            }
            else {
                isAuthenticated(res, () => {
                    this.setState({redirect: true})
                })
                
                
            }
        } )
    }

    render() {
        const {from} = this.props.location.state || {
            from: {pathname: '/'}
        }
        const {redirect} = this.state
        if(redirect) {
            return (<Redirect to={from}/>)
        }
       
        return (
            
            <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='blue' textAlign='center'>
           Sign-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
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
                Sign in
              </Button>
            </Segment>
          </Form>
          <Message>
            Do not have an account? <Link to="/signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>


      <Modal size='mini' open={this.state.open}>
      <Modal.Header>New account </Modal.Header>
      <Modal.Content>
        <p>Error</p>
      </Modal.Content>
      <Modal.Actions>
      
          <Button
            negative
            onClick={this.onCloseModal}
            >Close</Button>
     
      </Modal.Actions>
    </Modal>
            </>
        )
    }
}

export default SignIn