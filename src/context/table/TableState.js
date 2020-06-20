import React, { useReducer } from 'react'
import TableContext from './tableContext'
import TableReducer from './tableReducer'
import {
	GET_USERS,
	SET_LOADING,
	SORT_LIST_ID,
	SORT_LIST_FIRST_NAME,
	SORT_LIST_LAST_NAME,
	SORT_LIST_EMAIL,
	SORT_LIST_PHONE
} from './../types'

const TableState = props => {
  const initialState = {
    users: [],
    loading: false,
    sorted: false,
  }

  const [state, dispatch] = useReducer(TableReducer, initialState)

  // Get Users
  const getUsers = async () => {
    const res = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    const data = await res.json()

    dispatch({
      type: GET_USERS,
      payload: data
    })
  }

  // Sort By ID
  const sortListId = () => {
    const sortUsers = state.users
    
    if (state.sorted === true) {
      sortUsers.sort((a, b) => a.id > b.id ? 1 : -1)
      state.sorted = false
      } else {
      sortUsers
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .reverse()
      state.sorted = true
    }

    dispatch({
      type: SORT_LIST_ID,
      payload: sortUsers
    })
  }

  // Sort By First Name
  const sortListFirstName = () => {
		const sortUsers = state.users

		if (state.sorted === true) {
			sortUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
			state.sorted = false
		} else {
			sortUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1)).reverse()
			state.sorted = true
		}

		dispatch({
			type: SORT_LIST_FIRST_NAME,
			payload: sortUsers,
		})
	}

  // Sort By Last Name
  const sortListLastName = () => {
		const sortUsers = state.users

		if (state.sorted === true) {
			sortUsers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
			state.sorted = false
		} else {
			sortUsers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)).reverse()
			state.sorted = true
		}

		dispatch({
			type: SORT_LIST_LAST_NAME,
			payload: sortUsers,
		})
	}

  // Sort By Email
  const sortListEmail = () => {
    const sortUsers = state.users

		if (state.sorted === true) {
			sortUsers.sort((a, b) => (a.email > b.email ? 1 : -1))
			state.sorted = false
		} else {
			sortUsers.sort((a, b) => (a.email > b.email ? 1 : -1)).reverse()
			state.sorted = true
		}

		dispatch({
			type: SORT_LIST_EMAIL,
			payload: sortUsers,
		})
  }

  // Sort By Phone
  const sortListPhone = () => {
    const sortUsers = state.users

		if (state.sorted === true) {
			sortUsers.sort((a, b) => (a.phone > b.phone ? 1 : -1))
			state.sorted = false
		} else {
			sortUsers.sort((a, b) => (a.phone > b.phone ? 1 : -1)).reverse()
			state.sorted = true
		}

		dispatch({
			type: SORT_LIST_PHONE,
			payload: sortUsers,
		})
  }

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  // Select Row

  return (
    <TableContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        sorted: state.sorted,
        setLoading,
        getUsers,
        sortListId,
        sortListFirstName,
        sortListLastName,
        sortListEmail,
        sortListPhone
      }}
    >
      {props.children}
    </TableContext.Provider>
  )
}

export default TableState