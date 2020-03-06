import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { DELETE_ONE_ROW } from "../../constants/action-types"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"

import { TableContainer } from "./DisplayTable.style"

export function DisplayTable() {
  const stateData = useSelector(state => state)
  console.log(stateData)
  console.log(stateData.loadAndRenderData.renderList)
  const dispatch = useDispatch()
  return (
    <TableContainer>
      <Table striped bordered hover size="sm" className="spaceAtTop">
        <thead>
          <tr>
            <th>#</th>
            <th>Reference</th>
            <th>Employee name</th>
            <th>BSB</th>
            <th>Account number</th>
          </tr>
        </thead>
        <tbody>
          {stateData.formData.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.salaryNo}</td>
              <td>{entry.employeeName}</td>
              <td>{entry.bsb}</td>
              <td>{entry.accountNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <ul>
        {stateData.loadAndRenderData.map(data => {
          data.renderList.map((entry, index) => (
            <li key={index}>{entry.title}</li>
          ))
        })}
      </ul> */}
    </TableContainer>
  )
}
