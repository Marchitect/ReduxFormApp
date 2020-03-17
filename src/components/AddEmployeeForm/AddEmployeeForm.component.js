import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { SAVE_FORMDATA } from "../../constants/action-types"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import { Formik, Form as FormikForm } from "formik"
import * as Yup from "yup"
import { TextInput } from "../TextInput"

export function AddEmployeeForm() {
  const dispatch = useDispatch()
  // make sure the same salary number is not allowed to be added repeatedly
  const stateData = useSelector(state => state)
  let salaryNoArray = []
  return (
    <Formik
      initialValues={{
        salaryNo: "",
        employeeName: "",
        bsb: "",
        accountNo: ""
      }}
      validationSchema={Yup.object({
        salaryNo: Yup.string()
          // no space allowed at the beginning
          .matches(
            /^[a-zA-Z0-9-]+[a-zA-Z0-9 -]*$/,
            "Please enter a valid account number"
          )
          .required("This field is required"),
        employeeName: Yup.string()
          .matches(/^[a-zA-Z]+[a-zA-Z -]*$/, "Please enter a valid name")
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
            // \S means space, ^\S means no space at the beginning, \S near the end means no spaces anywhere
            /^\S(?=.*\d)(?=.*[1-9]).\S{6,10}$/,
            "Please enter a valid account number"
          )
          .required("This field is required")
      })}
      // variable data (or call it values because they are values from inputs) here is linked to the reducer, formData
      onSubmit={(data, { setSubmitting, resetForm }) => {
        stateData.formData.map((entry) => (
          salaryNoArray.push(entry.salaryNo)
        ))
        if (!salaryNoArray.includes(data.salaryNo)){
          // the variable "data" here needs to be kept with the same name in reducers
          dispatch({ type: SAVE_FORMDATA, data })   
          setTimeout(() => {
            alert(
              "Data is successfully submitted. " + JSON.stringify(data, null, 2)
            )
            setSubmitting(false)
          }, 400)
        }
        else {
          alert("Salary number cannot be repetitive.")
        }
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
  )
}
