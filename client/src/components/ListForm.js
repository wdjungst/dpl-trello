import React from 'react';
import { Form } from 'semantic-ui-react';

class ListForm extends React.Component {
  defaultValues = { name: '', description: '' }
  state = {...this.defaultValues}

  onChange = (e) => {
    let { id, value } = e.target;
    this.setState({ [id]: value })
  }

  submit = (e) => {
    e.preventDefault();
    let list = {...this.state}
    this.props.submit(list);
    this.setState(this.defaultValues)
  }

  render() {
    let { name, description } = this.state;
    return (
      <Form onSubmit={this.submit}>
        <Form.Input
          label="name"
          id="name"
          required
          onChange={this.onChange}
          value={name}
        />
        <Form.Input
          label="description"
          id="description"
          required
          onChange={this.onChange}
          value={description}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ListForm;
