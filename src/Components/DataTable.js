import React from 'react'
import { Table,Button } from 'reactstrap';

const getTableBody = (data) => {
    const dataTable = data.map(da => (
        <tr key={da.id}>
            <th scope="row" >{da.id}</th>
            <td>{da.title}</td>
            <td>{da.completed.toString()}</td>
        </tr>
    ))
    return dataTable;    
}


export default function DataTable(props) {
    return (
    <div>
      <br/><br/>
      <Button onClick={props.incrementCounter}>Click</Button>
      <Table striped><tbody>
            {getTableBody(props.data)}
            </tbody>
        </Table>
    </div>
  )
}
