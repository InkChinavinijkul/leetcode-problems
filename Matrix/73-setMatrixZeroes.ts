/**
 Do not return anything, modify matrix in-place instead.
 */

// not entirely efficient because of the extra array
// to track indices
function setZeroes(matrix: number[][]): void {
	// keep track of where the zeros are
	const zeroIndex: number[][] = []
	const m = matrix.length
	const n = matrix[0].length
	for (let col = 0; col < n; col++) {
		for (let row = 0; row < m; row++) {
			if (!matrix[row][col]) {
				zeroIndex.push([row, col])
			}
		}
	}

	for (const index of zeroIndex) {
		const [row, col] = index
		let zeroRow = 0
		let zeroCol = 0
		// change row
		while (zeroCol < n) matrix[row][zeroCol++] = 0
		// change col
		while (zeroRow < m) matrix[zeroRow++][col] = 0
	}
}
