import { SAVE_FORMDATA } from "../../constants/action-types"
const formData = (state = [], action) => {
  switch (action.type) {
    case SAVE_FORMDATA:
      return [
        ...state,
        {
          salaryNo: action.data.salaryNo,
          employeeName: action.data.employeeName,
          bsb: action.data.bsb,
          accountNo: action.data.accountNo
        }
      ]
    default:
      return state
  }
}

export default formData
