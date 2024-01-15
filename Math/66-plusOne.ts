// loop from end of array
// add 1, if 10 then carry the "1" over and replace current with 0

// not the cleanest of solution but it does work
// function plusOne(digits: number[]): number[] {
//     const result = [...digits]
//     let carryOver = 1
//     for(let i = digits.length - 1 ; i >= 0 ; i--) {
//         digits[i] = digits[i] + carryOver
//         carryOver = 0
//         if(digits[i] >= 10) {
//             carryOver = 1
//             digits[i] = 0
//         }
//     }
//     if(carryOver) digits.unshift(carryOver)
//     return digits
// };

// cleaner solution by mickey_krasilnikov
// much better solution where we add 1 and simply return if < 9
// then loop as much as we have to
// note the important return in the if statement
function plusOne(digits: number[]): number[] {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] < 9) {
			digits[i]++
			return digits
		}
		digits[i] = 0
	}
	digits.unshift(1)
	return digits
}
