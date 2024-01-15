// similar to "Plus One"? except our threshold is now 1 instead of 9 (base x - 1)

function addBinary(a: string, b: string): string {
	let result = []
	let i = a.length - 1
	let j = b.length - 1
	let carryOver = 0
	while (a[i] || b[j]) {
		// not entirely clean
		const aNum = +a[i--] || 0 // deals with NaN
		const bNum = +b[j--] || 0
		const resultAtCurr = aNum + bNum + carryOver
		carryOver = 0

		if (resultAtCurr > 1) carryOver = 1
		result.unshift(resultAtCurr % 2)
	}
	if (carryOver) result.unshift(carryOver)

	return result.join("")
}
