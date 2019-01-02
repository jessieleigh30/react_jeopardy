import React from "react";
import { connect } from "react-redux";
import { Form, Container } from "semantic-ui-react";

class QuestionForm extends React.Component {
    state = { question: "", answer: ""}

    render () {
      const { question, answer}//fix this
      return (
        <Container>
          <h1> Add a Question </h1>
            <Form.Input
              name="Question"
              required
              defaultValue={question}
              onChange={this.handleChange}
              label="Question"
              />
             <Form.Input 
              name="Answer"
              required
              defaultValue={answer}
              onChange={this.handleChange}
              label="Answer"
              />
           </Container>

      )

    }
}//end of QuestionForm