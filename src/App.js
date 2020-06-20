import React from 'react'
import './App.css'
import TableState from './context/table/TableState'

import Table from './components/Table'

function App() {
  return (
		<TableState>
			<div className='App'>
				<div className='container'>
					<h1 className="mt-4 ml-5">Table with data</h1>
					<Table />
				</div>
			</div>
		</TableState>
	)
}

export default App
