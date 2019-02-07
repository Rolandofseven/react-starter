import React, { Component } from 'react';
import axios from 'axios';
import DataTable from '../Components/DataTable';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
        };
    }

    getTableBody(){
        const dataTable = this.state.data.map(da => (
            <tr>
                <td>{da.id}</td>
                <td>{da.title}</td>
                <td>{da.completed.toString()}</td>
            </tr>
        ))
        return dataTable;    
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
        I'm a home page  <br/>
        <DataTable data={this.state.data} />
        <table>
            {this.getTableBody()}
        </table>
      </div>
    )
  }
}
