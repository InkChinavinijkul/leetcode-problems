// quite a messy implementation
// notice that this simply works because
// because once you've looped back to the same sum
// ex. 19 and 91 then you're guaranteed to loop
// ex2. 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4
// once we see 4 again we know we're going to loop back

function isHappy(n: number): boolean {
	let number: string = "" + n
	const hash = {}

	// if i wasn't allowed to loop endlessly i would've
	// handled it with a boolean function
	// would be one way to handle it
	while (true) {
		const splitted = number.split("")
		let sum: number = 0

		// don't have to run !hasOwnProperty here
		hash[number] = number

		for (const digit of splitted) {
			sum += Math.pow(+digit, 2)
		}

		if (sum === 1) return true

		// earlier this was on top and hash[number] = number was down here
		// that immediately causes the loop to exit after 1 loop since
		// we've just added the number in and now we're checking for it
		if (hash.hasOwnProperty(sum)) return false

		// update number and hash
		number = "" + sum
		hash[sum] = number
	}
}
