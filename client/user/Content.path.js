import React, {Component} from 'react';
import { Icon, Table , Container } from 'semantic-ui-react'
import axios from 'axios';


export default class ContentPath extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: []
        })

    }

    componentDidMount() {
        axios.get(`https://api.github.com/repos/${this.props.match.params.repoUser}/${this.props.match.params.repoName}/contents`)
            .then((res) => {
                this.setState({data: res.data})
            })
    }

    render() {

        return (
           <Container>
                <Table>
            <Table.Body>
            
                  {this.state.data.map(res => 
            <Table.Row>
            <Table.Cell>
              {res.type == "dir" ? <Icon name='folder' /> :   <Icon name='file outline' />}
               <a href={res.html_url} target='_blank'>{ res.name}</a>
            </Table.Cell>
                  <Table.Cell>{res.size} kbs</Table.Cell>
            <Table.Cell>10 hours ago</Table.Cell>
            </Table.Row>
            )}
                
            </Table.Body>
          </Table>
           </Container>
        )
    }
} 