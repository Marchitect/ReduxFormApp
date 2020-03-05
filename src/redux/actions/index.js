import { SAVE_FORMDATA } from "../../constants/action-types"

let nextId = 0
export const saveFormData = (data) => ({
  type: SAVE_FORMDATA,
  id: nextId++,
  data
})
