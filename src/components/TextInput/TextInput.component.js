import React from "react"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import { useField } from "formik"

export const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  const [field, meta] = useField(props)
  return (
    <>
      <Col>
        <Form.Label htmlFor={props.id || props.name}>
          {label}
          {props.tooltip ? (
            <a tabIndex="0" className="blue" href="#" data-tooltip="test">
              &nbsp;<i className="fa fa-info-circle" aria-hidden="true"></i>
            </a>
          ) : null}
        </Form.Label>
        <Form.Control
          className={
            meta.touched && meta.error ? "text-input-error" : "text-input"
          }
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div tabIndex="0" className="error">{meta.error}</div>
        ) : null}
      </Col>
    </>
  )
}
