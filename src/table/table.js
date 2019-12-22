import React, { useState, useEffect } from 'react'
import './styles.css'

const LEFT_BORDER = 1
export const TableHeader = ({ stickyHeader, header, stickyColumns }) => {
  return (
    <thead className={stickyHeader && 'sticky-header'}>
      <tr>
        {header.map((cell, coulumnIndex) => (
          <th
            key={coulumnIndex}
            data-column-id={coulumnIndex}
            className={stickyColumns[coulumnIndex] ? 'sticky-item' : ''}
            style={
              stickyColumns[coulumnIndex]
                ? { left: stickyColumns[coulumnIndex].left }
                : {}
            }
          >
            {cell}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export const TableBody = ({
  rows = [],
  stickyColumns = {},
  emptyRows = [],
  extraRows = [],
}) => {
  const allRows = [...rows, ...extraRows]
  return (
    <tbody>
      {allRows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <td
              key={columnIndex}
              className={stickyColumns[columnIndex] ? 'sticky-item' : ''}
              style={
                stickyColumns[columnIndex]
                  ? { left: stickyColumns[columnIndex].left }
                  : {}
              }
            >
              {cell}
            </td>
          ))}
        </tr>
      ))}
      {emptyRows.map((row, rowIndex) => (
        <tr className="emptyCelles" key={'empty' + rowIndex}>
          {row.map((cell, columnIndex) => (
            <td
              className={stickyColumns[columnIndex] ? 'sticky-item' : ''}
              style={
                stickyColumns[columnIndex]
                  ? { left: stickyColumns[columnIndex].left }
                  : {}
              }
              key={'empty' + columnIndex}
            >
              <div className="empty-cell"></div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export const Table = ({ tableData, extraRows, onHitScrollBottom }) => {
  const { stickyColumns: stickColumnProps, rows, emptyRows } = tableData

  const [stickyColumns, setStickyColumns] = useState(stickColumnProps || {})

  useEffect(() => {
    const list = document.querySelectorAll('thead th.sticky-item')
    let left = 0
    list &&
      Object.keys(list).map(key => {
        const node = list[key]
        const { attributes } = node
        const columnId = attributes['data-column-id'].value
        const bounds = node.getBoundingClientRect()
        stickyColumns[columnId].left = left
        left += bounds.width - LEFT_BORDER
      })
    setStickyColumns({ ...stickyColumns })
  }, [stickColumnProps])

  const onScroll = e => {
    const { scrollHeight, clientHeight, scrollTop } = e.target
    if (scrollHeight <= clientHeight + scrollTop + 80) {
      if (onHitScrollBottom) onHitScrollBottom()
    }
  }

  return (
    <div className="custom-table">
      <table onScroll={onScroll}>
        <TableHeader
          stickyHeader
          header={rows[0]}
          stickyColumns={stickyColumns}
        />
        <TableBody
          stickyColumns={stickyColumns}
          rows={rows.slice(1)}
          emptyRows={emptyRows}
          extraRows={extraRows}
        />
      </table>
    </div>
  )
}
