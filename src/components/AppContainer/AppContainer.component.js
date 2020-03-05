import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { FormModal } from "../FormModal"
import { DisplayTable } from "../DisplayTable"
import { FlexContainer } from "./AppContainer.style"

export function AppContainer() {
  // state hook returns the current state and the function which updates the state
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <FlexContainer>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add new employee
      </Button>
      <DisplayTable />
      <FormModal show={modalShow} onHide={() => setModalShow(false)} />
    </FlexContainer>
  )
}
