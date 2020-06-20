import {
	GET_USERS,
	SET_LOADING,
	SORT_LIST_ID,
	SORT_LIST_FIRST_NAME,
	SORT_LIST_LAST_NAME,
	SORT_LIST_EMAIL,
	SORT_LIST_PHONE
} from './../types'

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case SORT_LIST_ID:
    case SORT_LIST_FIRST_NAME:
    case SORT_LIST_LAST_NAME:
    case SORT_LIST_EMAIL:
    case SORT_LIST_PHONE:
      return {
        ...state,
        users: action.payload
      }
    default: 
      return state
  }
}