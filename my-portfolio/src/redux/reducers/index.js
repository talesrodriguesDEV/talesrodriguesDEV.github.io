const INITIAL_STATE = {
  language: 'en',
  visualMode: 'Dark'
}

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: state.language === 'pt' ? 'en' : 'pt'
      }
    case 'CHANGE_VISUAL':
      return {
        ...state,
        visualMode: state.visualMode === 'Dark' ? 'Light' : 'Dark'
      }
    default:
      return state
  }
}

export default reducer
