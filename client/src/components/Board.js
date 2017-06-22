import React from 'react';
import axios from 'axios';
import { Header, Divider } from 'semantic-ui-react';
import ListForm from './ListForm';

class Board extends React.Component {
  state = { lists: [], boardName: '' }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios.get(`/api/boards/${id}/lists`)
      .then( res => {
        let boardName = res.data[0].board_name;
        this.setState({ lists: res.data, boardName });
      }).catch( e => { debugger } )
  }

  submit = (list) => {
    let { id } = this.props.match.params;
    axios.post(`/api/boards/${id}/lists`, {list})
      .then( res => {
        let { lists } = this.state;
        this.setState({ lists: [...lists, {...res.data}] })
      });
  }

  render() {
    let { boardName } = this.state;
    return (
      <div>
        <Header as="h3">{ boardName }</Header>
        <Divider />
        <ListForm submit={this.submit} />
      </div>
    )
  }
}

export default Board;
