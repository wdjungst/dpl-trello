import React from 'react';
import axios from 'axios';
import { 
  Grid, 
  Header, 
  Card, 
  Button, 
  Container, 
  Divider,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BoardForm from './BoardForm';
import BoardCard from './BoardCard';

class Boards extends React.Component {
  state = { boards: [] }

  componentDidMount() {
    axios.get('/api/boards')
      .then( res => this.setState({ boards: res.data }) )
  }

  deleteBoard = (id) => {
    axios.delete(`/api/boards/${id}`)
      .then( () => {
        let boards = this.state.boards.filter( b => b.id !== id )
        this.setState({ boards });
      });
  }
  
  cards = () => {
    let { boards } = this.state;
    return boards.map( board => 
      <BoardCard 
        key={board.id} 
        {...board}
        deleteBoard={this.deleteBoard}
        updateBoard={this.updateBoard}
      />
    );
  }

  addBoard = (board) => {
    axios.post('/api/boards', { board })
      .then( res => {
        let { boards } = this.state;
        this.setState({ boards: [...boards, res.data] })
      });
  }

  updateBoard = (board) => {
    axios.put(`/api/boards/${board.id}`, {board})
      .then( res => { 
        let boards = this.state.boards.map( b => {
          if (b.id === res.data.id)
            return res.data
          else
            return b
        })
        this.setState({ boards })
      })
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">
          Welcome to boards
        </Header>
        <BoardForm submit={this.addBoard} />
        <Divider />
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
