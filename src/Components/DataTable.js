import React from 'react'


const getTableBody = (data) => {
    const dataTable = data.map(da => (
        <tr>
            <td>{da.id}</td>
            <td>{da.title}</td>
            <td>{da.completed.toString()}</td>
        </tr>
    ))
    return dataTable;    
}

export default function DataTable(props) {


    return (
    <div>
      {props.data.length}
      <br/><br/>
      <table>
            {getTableBody(props.data)}
        </table>

    </div>
  )
}
