import React, { useContext, useEffect } from 'react'
import TableContext from './../context/table/tableContext'

import Loader from './layouts/Loader/Loader'

const Table = () => {
  const tableContext = useContext(TableContext)
  const {
		users,
		loading,
		getUsers,
		setLoading,
		sortListId,
		sortListFirstName,
		sortListLastName,
		sortListEmail,
		sortListPhone,
	} = tableContext

  useEffect(() => {
    setLoading()
    getUsers()
  //eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th onClick={() => sortListId()} ><i className='fas fa-sort-right'></i> Id </th>
          <th onClick={() => sortListFirstName()} ><i className='fas fa-sort-right'></i> Name</th>
          <th onClick={() => sortListLastName()} ><i className='fas fa-sort-right'></i> Last Name</th>
          <th onClick={() => sortListEmail()} ><i className='fas fa-sort-right'></i> Email</th>
          <th onClick={() => sortListPhone()} ><i className='fas fa-sort-right'></i> Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id + user.firstName}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
