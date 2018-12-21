import React, { Component } from 'react';
import { Header, Card, Container, Button } from "semantic-ui-react";
import {getCategories} from "../reducers/categories";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getCategories())
  };

  categories = () => {
    return this.props.categories.map( category =>
      <div>
        <Card key={ category.id }>  
          <Card.Content>
            {category.name}
          </Card.Content>
          <Card.Content extra>
          <Link to={`/categories/${category.id}`}>
            Pick this Category
            </Link>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
      </div>
    )
  }//end of categories

  render() {
    
    return (
      <Container>
     
        <Header as="h1" textAlign="center"> Welcome to Jeopardy!</Header>
        <Header as="h3" textAlign="center">Pick a Category:</Header>
        <Card.Group itemsPerRow={3}>
          { this.categories()}
        </Card.Group>
        <br/>
        <br/>
        <Button> Add a Category </Button>
        
      </Container>
    )
  }
};//end of categories
const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(App);
