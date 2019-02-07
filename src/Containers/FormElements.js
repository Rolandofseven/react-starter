import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class FormElements extends Component {
  constructor(props){
    super(props);
    this.state = {
      textBox1:"roland"
    }
  }
  onSubmit =(e) => {
    e.preventDefault();
    this.setState({textBox1:'bob'})

  }

  onChange(event) {
    console.log(event.target)
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.onSubmit}>
        <Col>
            <FormGroup>
              <Label>Email - {this.state.textBox1}</Label>
              <Input
                type="text"
                name="textBox1"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.textBox1}
                onChange={this.onChange.bind(this)} 
               />
            </FormGroup>
          </Col>


          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default FormElements;