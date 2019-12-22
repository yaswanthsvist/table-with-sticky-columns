import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { rows, emptyRows, getNewRows } from './mockData'
import { Table } from 'table-with-sticky-columns'
import './styles.css'

function App() {
  const [extraRows, setExtraRows] = useState([])
  const tableData = {
    stickyColumns: {
      1: { left: 0, right: 0 },
      3: { left: 0, right: 0 },
      7: { left: 0, right: 0 },
    },
    rows,
    emptyRows,
  }
  const onHitScrollBottom = () => {
    getNewRows({
      start: rows.length + extraRows.length,
      length: 10,
      columns: tableData.rows[0].length,
    }).then(newRows => {
      setExtraRows([...extraRows, ...newRows])
    })
  }
  return (
    <div className="App">
      <Table
        tableData={tableData}
        extraRows={extraRows}
        onHitScrollBottom={onHitScrollBottom}
      />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
