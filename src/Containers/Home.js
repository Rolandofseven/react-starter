import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../Components/DataTable';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            counter:0
        };
    }

    sayHello = () => {
        alert("Hello");
    }

    incrementCounter = () => {
        this.setState({counter: this.state.counter+1});
    }


    componentDidMount (){
        axios.default.get("https://jsonplaceholder.typicode.com/todos").then(res => {
            this.setState({data:res.data});
        }).catch(err => {
            alert("Something went wrong");
        });
    }
  render() {
    return (
      <div>
        I'm a home page - {this.state.counter} <br/>
        <DataTable data={this.state.data} sayHello={this.sayHello} incrementCounter={this.incrementCounter}/>
      </div>
    )
  }
}
