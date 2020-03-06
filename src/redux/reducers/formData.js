import { SAVE_FORMDATA, DELETE_ONE_ROW } from "../../constants/action-types"
const formData = (state = [], action) => {
  switch (action.type) {
    case SAVE_FORMDATA:
      return [
        ...state,
        {
          id: action.id,
          salaryNo: action.data.salaryNo,
          employeeName: action.data.employeeName,
          bsb: action.data.bsb,
          accountNo: action.data.accountNo
        }
      ]
    case DELETE_ONE_ROW:
      return []
    default:
      return state
  }
}

export default formData
