import React from "react";
import {getCards} from "../reducers/cards";
import { Container, Header, Card   } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import categories from "../reducers/categories";
import axios from "axios";


//display the cards in a category

class Category extends React.Component {
  state = {category: {}}
  componentDidMount() {
    const {id} = this.props.match.params
    this.props.dispatch(getCards(id))
    axios.get(`/api/categories/${id}`)
      .then( res => this.setState({category: res.data}))
  }

    cards = () => {
      return this.props.cards.map( card =>
        <div>
          <Card key={ card.id }>  
            <Card.Content>
              {card.answer}
            </Card.Content>
          </Card>
        </div>
      )
    }//end of categories
    

    render() {
      return (
        <Container>
          <Header as="h1" textAlign="center"> {this.state.category.name}  </Header>
          <Card.Group itemsPerRow={3}>
            {this.cards()}
          </Card.Group>
          
        </Container>
      )
    }
  };//end of categories

  const mapStateToProps = (state) => {
    return { cards: state.cards, };
  }
  
  export default connect(mapStateToProps)(Category);