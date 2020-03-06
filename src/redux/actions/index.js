import { SAVE_FORMDATA, DELETE_ONE_ROW, LOAD_LIST } from "../../constants/action-types"

let nextId = 0
export const saveFormData = (data) => ({
  type: SAVE_FORMDATA,
  id: nextId++,
  data
})

export function loadList(data) {
  return {
    type: LOAD_LIST,
    data
  }
}

export const deleteOneRow = (index) => ({
  type: DELETE_ONE_ROW,
  index
})