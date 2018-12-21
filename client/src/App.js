import React, { Fragment, } from 'react';
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Categories from "./components/Categories";
import Category from "./components/Category";

const Jeopardy = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path ="/" component={Categories} />
        <Route exact path ="/categories/:id" component={Category} />
        
      </Switch>
    </Container>
  </Fragment>
)

export default Jeopardy;