import {combineReducers} from 'redux'
import modal from './modal'
import alert from './alert'
import vote from './vote'

export default combineReducers({
  modal,
  alert,
  vote
})