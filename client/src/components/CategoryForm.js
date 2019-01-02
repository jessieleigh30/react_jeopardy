import React from "react";
import { connect } from "react-redux";
import { Form, Container } from "semantic-ui-react";
import { addCategory, updateApp } from "../reducers/categories";

class CategoryForm extends React.Component {
  initialState = {name: ""};

  state = {...this.initialState};

  componentDidMount () {
    if (this.props.id)
    this.setState({...this.props,})
  }

  handleChange = (e) =>{
    const { name, value } = e.target;
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { name } = this.state;
    const category = { name }
    dispatch({type: "ADD_CATEGORY", category: {name} });
    this.setState({ name:""})
  }

render () {
  const { name } = this.props;

  return (
    <Container>
    <h1> Add A New Category </h1>
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
      </Container>
  )
  }
}
const mapStateToProps = (state) => {
  return { category: state.category}
}

export default connect()(CategoryForm);