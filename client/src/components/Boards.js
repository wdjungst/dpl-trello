import React from 'react';
import axios from 'axios';
import { Grid, Header, Card, Button, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Boards extends React.Component {
  state = { boards: [] }

  componentDidMount() {
    axios.get('/api/boards')
      .then( res => this.setState({ boards: res.data }) )
  }
  
  cards = () => {
    let { boards } = this.state;
    return boards.map( board => 
      <Grid.Column 
        mobile={16} 
        tablet={16} 
        computer={4}
        key={board.id}
      >
        <Card>
          <Link to={`/boards/${board.id}`}>
            <Card.Header>{board.name}</Card.Header>
            <Card.Meta>{board.author}</Card.Meta>
          </Link>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">Edit</Button>
              <Button basic color="red">Delete</Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">
          Welcome to boards
        </Header>
        <Grid columns={16}>
          <Grid.Row>
            { this.cards() }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Boards;
