import React from 'react';
import { Form, Grid } from 'semantic-ui-react';

class BoardForm extends React.Component {
  defaultValues = { name: '', author: '', color: '' }
  state = { ...this.defaultValues }

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  submit = (e) => {
    e.preventDefault();
    let board = {...this.state}
    this.props.submit(board)
    this.setState({ ...this.defaultValues })
  }

  onChange = (e) => {
    let { id, value } = e.target;
    this.setState({ [id]: value });
  }

  options = () => {
    return [
      'red', 
      'orange', 
      'yellow', 
      'olive',
      'green', 
      'teal', 
      'blue', 
      'violet', 
      'purple', 
      'pink',
      'brown', 
      'grey', 
      'black'
    ].map( color => { 
      let text = color.charAt(0).toUpperCase() + color.slice(1)
      return { key: color, text, value: color }
    })
  }

  render() {
    let { name, author, color } = this.state;
    let { id } = this.props;
    let w = id ? 16 : 4;
    return (
      <Grid columns={12}>
        <Grid.Row>
          <Form onSubmit={this.submit}>
            <Grid.Column width={w}>
              <Form.Input
                label="Name"
                id="name"
                value={name}
                onChange={this.onChange}
                required
              />
            </Grid.Column>
            <Grid.Column width={w}>
              <Form.Input
                label="Author"
                id="author"
                value={author}
                onChange={this.onChange}
              />
            </Grid.Column>
            <Grid.Column width={w}>
              <Form.Select
                label="color"
                value={color}
                options={this.options()}
                onChange={ (e, data) => this.setState({ color: data.value }) }
              />
            </Grid.Column>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Row>
      </Grid>
    )
  }
}

export default BoardForm;
