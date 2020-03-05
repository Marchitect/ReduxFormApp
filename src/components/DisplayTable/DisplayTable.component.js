import React from "react"
import { useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import { TableContainer } from "./DisplayTable.style"

export function DisplayTable() {
  const formData = useSelector(state => state)
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
          {formData.formData.map((entry, index) => (
            <tr>
              <td>{index}</td>
              <td>{entry.salaryNo}</td>
              <td>{entry.employeeName}</td>
              <td>{entry.bsb}</td>
              <td>{entry.accountNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}
