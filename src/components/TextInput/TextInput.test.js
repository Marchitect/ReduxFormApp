// TextInput.test.js
import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { render } from "@testing-library/react"
import { TextInput } from "./TextInput.component"

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    tooltip: true,
    testProps: jest.fn()
  }

  const enzymeWrapper = shallow(<TextInput label="Test label" {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe("TextInput component", () => {
  it("TextInput renders correctly", () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find("a").hasClass("blue")).toBe(true)
    expect(enzymeWrapper).toMatchSnapshot()
  })
})
