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
          id: 0,
          salaryNo: "1234-5678",
          employeeName: "Test Name",
          bsb: "012345",
          accountNo: "1234567890"
        }
      })
    ).toEqual([
      {
        id: 0,
        salaryNo: "1234-5678",
        employeeName: "Test Name",
        bsb: "012345",
        accountNo: "1234567890"
      }
    ])
  })
  it("should handle DELETE_FORMDATA", () => {
    expect(
      formData(
        [
          {
            id: 0,
            salaryNo: "1234-5678",
            employeeName: "Test Name",
            bsb: "012345",
            accountNo: "1234567890"
          }
        ],
        {
          type: types.DELETE_FORMDATA,
          id: 0
        }
      )
    ).toEqual([])
  })
})
