import React, { Component } from 'react';
import { Header, Card, Container, Button } from "semantic-ui-react";
import { getCategories } from "../reducers/categories";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import  CategoryForm  from "./CategoryForm";

class App extends Component {
  state = { showForm: false};

  toggleForm = () => {
    debugger
    this.setState( { showForm: !this.state.showForm, })
  }


  componentDidMount() {
    this.props.dispatch(getCategories())
  };

  categories = () => {
    return this.props.categories.map(category =>
      <div>
        <Card key={category.id}>
          <Card.Content>
            <h1> {category.name} </h1>

          </Card.Content>
          <Card.Content extra>
            <Link to={`/categories/${category.id}`}>
              Pick this Category
            </Link>
          </Card.Content>
          <Card.Content extra>
            <Button color="red" size="small">Delete</Button>
          </Card.Content>
        </Card>
      </div>
    )
  }//end of categories

  render() {
    const { showForm } = this.state
    return (
      <Container>

        <Header as="h1" textAlign="center"> Welcome to Jeopardy!</Header>
        <Header as="h3" textAlign="center">Pick a Category:</Header>
        <Card.Group itemsPerRow={3}>
          {this.categories()}
        </Card.Group>
        <br />
        <br />
        <Button onClick={this.toggleForm}> Add a Category  {showForm ? 'Hide Form' : 'Show Form' } </Button>
       
        
        <CategoryForm />


      </Container>
    )
  }
};//end of categories
const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(App);
