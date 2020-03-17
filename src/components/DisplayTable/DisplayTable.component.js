import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { TableContainer } from "./DisplayTable.style"
import { deleteFormData } from "../../redux/actions"

export function DisplayTable() {
  const dispatch = useDispatch()
  const stateData = useSelector(state => state)
  let loadedData = stateData.fetchAndLoadData[0]

  return (
    <TableContainer>
      <Table striped bordered hover size="sm" className="spaceAtTop">
        <thead>
          <tr tabIndex="0">
            <th>#</th>
            <th>Reference</th>
            <th>Employee name</th>
            <th>BSB</th>
            <th>Account number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {stateData.formData.map((entry, index) => (
            <tr tabIndex="0" key={index}>
              <td>{index + 1}</td>
              <td>{entry.salaryNo}</td>
              <td>{entry.employeeName}</td>
              <td>{entry.bsb}</td>
              <td>{entry.accountNo}</td>
              {/* the dispatch variable "id" here needs to be kept with the same name in your reducer and action */}
              {/* the action type format dispatch({type: TYPE, entry.id}) could not compile, so have to import and use the action directly */}
              <td>
                <Button onClick={() => dispatch(deleteFormData(entry.id))}>
                  Delete
                </Button>
              </td>
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
