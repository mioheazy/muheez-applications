const initialState = {
  section: 'Objective'
} 

interface action {
  type: string
  payload: string
}

export default function homeHeaderSlice(state = initialState, action: action) {
  switch (action.type) {
    case 'section': {
      return {
        ...state,
        section: action.payload
      }
    }
    default:
      return state
  }
}