import { combineReducers } from 'redux'
import formData from './formData'
import fetchAndLoadData from './saga'

export default combineReducers({
    formData,
    fetchAndLoadData
})
