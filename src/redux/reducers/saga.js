import { RENDER_LIST } from "../../constants/action-types"

const loadAndRenderData = (state = [], action) => {
  switch (action.type) {
    case RENDER_LIST:
      return [
        ...state,
        {
          renderList: action.renderList
        }
      ]
    default:
      return state
  }
}

export default loadAndRenderData
