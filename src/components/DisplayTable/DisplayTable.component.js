import React from "react"
import { useSelector } from "react-redux"
import Table from "react-bootstrap/Table"
import { TableContainer } from "./DisplayTable.style"

export function DisplayTable() {
  const stateData = useSelector(state => state)
  let loadedData = stateData.fetchAndLoadData[0]
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
      <ul>
        {loadedData ? (
          loadedData.map((entry, index) => <li key={index}>{entry.title}</li>)
        ) : (
          <li>Waiting for data to load</li>
        )}
      </ul>
    </TableContainer>
  )
}
