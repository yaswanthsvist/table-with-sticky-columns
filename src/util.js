class Table {
  constructor({ noOfRows, noOfColumns }) {
    this.noOfColumns = noOfColumns
    this.noOfRows = noOfRows
  }
}
class Columns extends Table {
  constructor(columns) {
    const noOfColumns = columns.length
    const noOfRows = columns[0].length
    super({ noOfColumns, noOfRows })
    this.columns = columns
  }
  toRows() {
    const columns = this.columns
    const rows = []
    for (let row = 0; row < this.noOfRows; row++) {
      for (let column = 0; column < this.noOfColumns; column++) {
        rows[row][column] = columns[column][row]
      }
    }
    return rows
  }
}
