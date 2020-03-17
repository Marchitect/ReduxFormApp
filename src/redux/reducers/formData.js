import { SAVE_FORMDATA, DELETE_FORMDATA } from "../../constants/action-types"

let id = 0
const formData = (state = [], action) => {
  switch (action.type) {
    case SAVE_FORMDATA:
      return [
        ...state,
        {
          id: id++,
          salaryNo: action.data.salaryNo,
          employeeName: action.data.employeeName,
          bsb: action.data.bsb,
          accountNo: action.data.accountNo,
        }
      ]
    case DELETE_FORMDATA:
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default formData
