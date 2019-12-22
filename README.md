# table-with-sticky-columns

React custom table with sticky columns and headers

By default first row is considered as header for table and its sticked to top of the table

```
npm i --save table-with-sticky-columns
```

## You can find the example in example folder and test this library

```
cd example
npm i
npm start
```

if you want to stick a column on the left side while scrolling then you have to configure
`stickyColumns` prop as shown bellow.

```
const tableData={
    stickyColumns: {
      1: { left: 0 },
      3: { left: 0 },
      7: { left: 0 },
    }
}
```

Full Usage example

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { getNewRows } from './mockData'
import { Table } from 'table-with-sticky-columns'
import './styles.css'

const rows=[
    ['header 1',    'header 2', ....      'header 20'   ],
    ['row:1 col:1', 'row:1 col:2', .....  'row 1 col:20'],
    ....
    ['row:100 col:1', 'row:100 col:2', .....  'row 100 col:20']
  ]
const emptyRows = [
    ['empty 1','empty 2', .... 'empty 20'],
    ['empty 1','empty 2', .... 'empty 20']
]

function App() {
  const [extraRows, setExtraRows] = useState([])
  const tableData = {
    stickyColumns: {
      1: { left: 0 },
      3: { left: 0 },
      7: { left: 0 },
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
```

in `./style.css`

```css
* {
  box-sizing: border-box;
}
.App {
  font-family: sans-serif;
  text-align: center;
}
.custom-table {
  height: 300px;
  width: 514px;
}
```
