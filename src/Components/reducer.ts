import { combineReducers } from '@reduxjs/toolkit'
import HomeHeaderReducer from './includeComponents/homeHeaderReducer'

const rootReducer = combineReducers({
  homeHeader: HomeHeaderReducer
})

export default rootReducer