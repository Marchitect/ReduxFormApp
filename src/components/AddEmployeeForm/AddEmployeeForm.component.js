import React from "react"
import { useDispatch } from "react-redux"
import { SAVE_FORMDATA } from "../../constants/action-types"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Formik, Form as FormikForm } from "formik"
import * as Yup from "yup"
import { TextInput } from "../TextInput"
import "./style.css"

export function AddEmployeeForm() {
  const dispatch = useDispatch()
  return (
    <div>
      <Formik
        initialValues={{
          salaryNo: "",
          employeeName: "",
          bsb: "",
          accountNo: ""
        }}
        validationSchema={Yup.object({
          salaryNo: Yup.string()
            .matches(/^[a-zA-Z0-9 -]*$/, "Please enter a valid account number")
            .required("This field is required"),
          employeeName: Yup.string()
            .max(50, "Name must be 50 characters or less")
            .required("This field is required"),
          bsb: Yup.string()
            .matches(
              /^(?!00)[0-9]{6}$/,
              "Please enter a six-digit number only, BSB cannot start with 00"
            )
            .required("This field is required"),
          accountNo: Yup.string()
            .matches(
              /^(?=.*\d)(?=.*[1-9]).{8,12}$/,
              "Please enter a valid account number"
            )
            .required("This field is required")
        })}
        // variable data (or call it values because they are values from inputs) here is linked to the reducer, formData
        onSubmit={(data, { setSubmitting, resetForm }) => {
          dispatch({ type: SAVE_FORMDATA, data })
          setTimeout(() => {
            alert("Data is successfully submitted. " + JSON.stringify(data, null, 2))
            setSubmitting(false)
          }, 400)
          resetForm()
        }}
      >
        <FormikForm>
          <h3>Employee Details</h3>
          <Form.Row>
            <TextInput
              label="Reference / Salary number"
              name="salaryNo"
              type="text"
              placeholder="Reference or salary number"
              tooltip="true"
            />
          </Form.Row>
          <Form.Row>
            <TextInput
              label="Employee name"
              name="employeeName"
              type="text"
              placeholder="Employee name"
            />
          </Form.Row>
          <Form.Row>
            <TextInput label="BSB" name="bsb" type="text" placeholder="BSB" />
            <TextInput
              label="Account number"
              name="accountNo"
              type="text"
              placeholder="Account number"
            />
          </Form.Row>
          <Form.Row>
            <Col>
              <Button type="submit">Submit</Button>
            </Col>
          </Form.Row>
        </FormikForm>
      </Formik>
    </div>
  )
}
