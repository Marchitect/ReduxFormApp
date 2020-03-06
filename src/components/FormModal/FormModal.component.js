import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { AddEmployeeForm } from "../AddEmployeeForm"
import "./style.css"

export function FormModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddEmployeeForm />
      </Modal.Body>
      <Modal.Footer>
        <div className="row-100w">
          <div className="floatLeft">
            <h3>Important information</h3>
          </div>
          <div className="floatRight">
            <a tabIndex="0" className="blue" href="#" data-tooltip="test">
              <i className="fa fa-info-circle" aria-hidden="true"></i>&nbsp;Need
              help?
            </a>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          mollis vel magna vitae consequat. Maecenas id tristique sapien, ut
          iaculis nunc. Ut hendrerit enim vel est porttitor eleifend. Vestibulum
          tempus quam dui, a rutrum orci vestibulum at. Aliquam rutrum sapien
          lacus, in tempor neque dapibus eu. Cras cursus leo vitae massa
          convallis, quis vestibulum metus euismod. Fusce non orci viverra,
          auctor ipsum at, vulputate nulla. Nullam in hendrerit neque, vitae
          posuere ante.
        </p>
        <p>
          Proin id facilisis tellus. Suspendisse risus augue, tempor non dapibus
          sit amet, congue at nulla. Proin ut faucibus est. Nullam faucibus nisi
          ut orci fermentum, sit amet accumsan quam ultricies. Quisque metus
          nibh, venenatis in efficitur ac, aliquam quis nulla. Sed ultricies
          nisl sed neque lacinia, et placerat enim elementum. Maecenas imperdiet
          purus ac euismod ornare. Nulla cursus ornare sapien, eget gravida
          velit fermentum eu. Donec laoreet sodales nisi, in iaculis augue
          lacinia vel. Nunc faucibus nisi ultrices, cursus neque at, egestas
          neque. Proin vitae posuere mauris. Morbi cursus elit ut dolor lacinia
          iaculis. Pellentesque id nunc eros.
        </p>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
