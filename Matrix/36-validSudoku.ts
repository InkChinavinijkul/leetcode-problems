// check current box
// can do row/3 to find the current box and row%3 to iterate through each cells in the box
// check column and row

function isValidSudoku(board: string[][]): boolean {
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if (board[row][col] === ".") continue
			let currVal = board[row][col]

			// check current box
			// this is very inefficient as we run this 9 times per box
			// can only do it once since if 1 cell passes the box test every
			// other cells should (not necessarily the line test)
			for (let boxRow = 0; boxRow < 3; boxRow++) {
				for (let boxCol = 0; boxCol < 3; boxCol++) {
					// get current box
					const currRow = Math.floor(row / 3) * 3
					const currCol = Math.floor(col / 3) * 3
					// same cell
					if (currRow + boxRow === row && currCol + boxCol === col) continue
					if (board[currRow + boxRow][currCol + boxCol] === currVal)
						return false
				}
			}

			// check row
			for (let boxRow = 0; boxRow < 9; boxRow++) {
				// same cell
				if (boxRow === row) continue
				if (board[boxRow][col] === currVal) return false
			}
			// check col
			for (let boxCol = 0; boxCol < 9; boxCol++) {
				// same cell
				if (boxCol === col) continue
				if (board[row][boxCol] === currVal) return false
			}
		}
	}
	return true
}
