import React from "react";
import { Connect } from "react-redux";
import { Form } from "semantic-ui-react";

class CategoryForm extends React.Component {
  State = {name:""};



render () {
  const { name } = this.props;

  return (
    <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Button> Save </Form.Button>
      </Form>
  )
}


export default connect()(CategoryForm);