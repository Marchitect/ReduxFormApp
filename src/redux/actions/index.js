import { SAVE_FORMDATA, LOAD_LIST } from "../../constants/action-types"

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