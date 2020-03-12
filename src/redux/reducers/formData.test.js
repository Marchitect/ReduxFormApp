import formData from "./formData"
import * as types from "../../constants/action-types"

describe("formData reducer", () => {
  it("should return the initial state", () => {
    expect(formData(undefined, {})).toEqual([])
  })
  it("should handle SAVE_FORMDATA", () => {
    expect(
      formData([], {
        type: types.SAVE_FORMDATA,
        data: {
          salaryNo: "1234-5678",
          employeeName: "Test Name",
          bsb: "012345",
          accountNo: "1234567890"
        }
      })
    ).toEqual([
      {
        salaryNo: "1234-5678",
        employeeName: "Test Name",
        bsb: "012345",
        accountNo: "1234567890"
      }
    ])
  })
})
