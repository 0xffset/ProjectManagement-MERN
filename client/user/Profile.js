import React, {Component} from 'react'
import { Card, Icon, Image, Grid, Segment, Container, Button } from 'semantic-ui-react'
import {fetchDataUser} from './api-user';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

export default class Profile extends Component {

    _isMounted = true
    constructor({match}) {
        super()
        this.state = {
          user: null
        }
        this.match = match
        this.fetchUser = this.fetchUser.bind(this)
        
    }

    fetchUser = (userId) => {
      fetchDataUser(userId)
      .then(data => {
          if(this._isMounted) {
          this.setState({user: data})

          }
      });
    }

  
  componentDidMount = () => {
    fetchDataUser(this.props.match.params.userId)
      .then(data => {
          if(this._isMounted) {
          this.setState({user: data})

          }
      });
   }
 
     render() {
      return (
        <div>
          {this.state.user !== null ? 
          <div>
 <Container  style={{marginTop: '30px', align: 'center'}}>
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
      <Link to={"/user/edit/" + this.state.user !== null ?  this.state.user.User[0]._id : ""}>
    <Button positive>Edit</Button>
    </Link>
    </Grid.Column>
  </Grid>

</Container>
          </div>: ""}
        </div>
      )
    }
}
