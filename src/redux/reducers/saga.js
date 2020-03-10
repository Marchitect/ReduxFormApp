import { RENDER_LIST } from "../../constants/action-types"

const fetchAndLoadData = (state = [], action) => {
  switch (action.type) {
    case RENDER_LIST:
      return [
        ...state,
        action.content
      ]
    default:
      return state
  }
}

export default fetchAndLoadData
