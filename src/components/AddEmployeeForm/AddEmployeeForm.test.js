// AddEmployeeForm.test.js
import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { AddEmployeeForm } from "./AddEmployeeForm.component"
import { render, fireEvent, wait } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() })

jest.mock("react-redux", () => ({
  useDispatch: () => {}
}))

describe("AddEmployeeForm", () => {
  it("renders correctly", () => {
    const addEmployeeForm = shallow(<AddEmployeeForm />)
    expect(addEmployeeForm).not.toBeNull()
    expect(addEmployeeForm).toMatchSnapshot()
  })

  it("submits correct values", async () => {
    const mock = jest.fn()
    const { container } = render(<AddEmployeeForm onSubmit={mock} />)
    const salaryNo = container.querySelector('input[name="salaryNo"]')
    const employeeName = container.querySelector('input[name="employeeName"]')
    const bsb = container.querySelector('select[name="bsb"]')
    const accountNo = container.querySelector('select[name="accountNo"]')
    const submit = container.querySelector('button[type="submit"]')

    await wait(() => {
      fireEvent.change(salaryNo, {
        target: {
          value: "mockno123"
        }
      })
    })

    await wait(() => {
      fireEvent.change(employeeName, {
        target: {
          value: "Test Name"
        }
      })
    })

    await wait(() => {
      fireEvent.change(bsb, {
        target: {
          value: "011234"
        }
      })
    })

    await wait(() => {
      fireEvent.change(accountNo, {
        target: {
          value: "12345678"
        }
      })
    })

    await wait(() => {
      fireEvent.click(submit)
    })

    wait(() => {
      expect(mock).toBeCalled()
    })
  })
})
