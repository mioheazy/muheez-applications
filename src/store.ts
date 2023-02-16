import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from 'redux'
import rootReducer from './Components/reducer'

// const store = createStore(rootReducer)
const store = configureStore({ reducer: rootReducer })

export default store