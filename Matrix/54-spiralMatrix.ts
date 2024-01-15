// cheating a little bit by reassigning values of the parameter
// this is bad
function spiralOrder(matrix: number[][]): number[] {
	const m = matrix.length
	const n = matrix[0].length
	const result = new Array(m * n)
	let row = 0
	let col = 0
	let index = 0
	let spiral = 0

	// all these conditions are pretty bad
	// the condition inside it is even worse
	while (index < m * n) {
		// go right
		while (index < m * n && spiral % 4 === 0) {
			if (col >= n - Math.floor(spiral / 4)) {
				col--
				row++
				spiral++
				break
			}
			result[index++] = matrix[row][col++]
		}
		// go down
		while (index < m * n && spiral % 4 === 1) {
			if (row >= m - Math.floor(spiral / 4)) {
				row--
				col--
				spiral++
				break
			}
			result[index++] = matrix[row++][col]
		}
		// go left
		while (index < m * n && spiral % 4 === 2) {
			if (col < Math.floor(spiral / 4)) {
				col++
				row--
				spiral++
				break
			}
			result[index++] = matrix[row][col--]
		}
		// go up
		while (index < m * n && spiral % 4 === 3) {
			if (row < Math.floor(spiral / 4) + 1) {
				row++
				col++
				spiral++
				break
			}
			result[index++] = matrix[row--][col]
		}
	}

	return result
}
