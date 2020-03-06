import { combineReducers } from 'redux'
import formData from './formData'
import loadAndRenderData from './saga'

export default combineReducers({
    formData,
    loadAndRenderData
})
