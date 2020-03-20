const initState = {
  count: 0
}

export default function root(state = initState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count++
      }
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count--
      }
    case 'RESET_COUNT':
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
}
