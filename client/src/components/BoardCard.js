import React from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';
import BoardForm from './BoardForm';
import { Link } from 'react-router-dom';

class BoardCard extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    });
  }

  submit = (board) => {
    this.props.updateBoard(board);
    this.setState({ edit: false })
  }

  render() {
    let { edit } = this.state;
    let { id, name, author, color, deleteBoard } = this.props;
    return (
      <Grid.Column
        mobile={16}
        tablet={16}
        computer={4}
      >
        <Card color={color}>
          { edit ? <BoardForm submit={this.submit} {...this.props} /> :
            <Link to={`/boards/${id}`}>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>{author}</Card.Meta>
            </Link>
          }
          <Card.Content extra>
            <div className="ui two buttons">
              <Button 
                onClick={this.toggleEdit} 
                basic 
                primary
              >
                { edit ? 'Cancel' : 'Edit' }
              </Button>
              <Button 
                onClick={() => deleteBoard(id) }
                basic 
                color="red"
              >
                 Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>

    )
  }


}

export default BoardCard;
