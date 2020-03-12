import * as actions from "./index"
import * as types from "../../constants/action-types"

describe("saveFormData actions", () => {
  it("saveFormData should create SAVE_FORMDATA action", () => {
    const data = "test data"
    const expectedAction = {
      type: types.SAVE_FORMDATA,
      data
    }
    expect(actions.saveFormData(data)).toEqual(expectedAction)
  })
})

describe("loadList actions", () => {
  it("loadList should create LOAD_LIST action", () => {
    const data = "test data"
    const expectedAction = {
      type: types.LOAD_LIST,
      data
    }
    expect(actions.loadList(data)).toEqual(expectedAction)
  })
})
