import React, { Component } from 'react';
import { Header, Card, Container, Button } from "semantic-ui-react";
import { getCategories } from "../reducers/categories";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CategoryForm from "./CategoryForm";

class App extends Component {
  state = { showForm: false };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm, })
  }


  componentDidMount() {
    this.props.dispatch(getCategories())
  };


 //individual card
  categories = () => {
    return this.props.categories.map(category =>
      
        <Card key={category.id}>
          <Card.Content>
          <Card.Header>
            <h1> {category.name} </h1>
          </Card.Header>
          < br/>
          <Link to={`/categories/${category.id}`}>
            <Card.Content extra>
              Pick this Category
           </Card.Content>
           < br/>
          </Link>
          <Card.Content extra>
            <Button color="red" size="small">Delete</Button>
          </Card.Content>
          </Card.Content>
        </Card>
      
    )
  }//end of categories

  render() {
    const { showForm } = this.state;
    return (
      <Container>
         <Header as="h1" textAlign="center"> Welcome to Jeopardy!</Header>
        <Header as="h3" textAlign="center">Pick a Category:</Header>
        <Button onClick={this.toggleForm}>
        {showForm ? 'Cancel' : 'Add Category'}
        </Button>
        <br/>
        <br/>
        <br />
        <br />
        {
          showForm ? 
          <CategoryForm closeForm={this.toggleForm}/>
          :
          <Card.Group itemsPerRow={3}>
            {this.categories()}
          </Card.Group>
        }


      </Container>
    )
  }
};//end of categories
const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(App);
