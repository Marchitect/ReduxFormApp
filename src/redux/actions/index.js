import { SAVE_FORMDATA, DELETE_FORMDATA, LOAD_LIST } from "../../constants/action-types"

export const saveFormData = (data) => ({
  type: SAVE_FORMDATA,
  data
})

export function loadList(data) {
  return {
    type: LOAD_LIST,
    data
  }
}

export const deleteFormData = (id) => ({
  type: DELETE_FORMDATA,
  id
})