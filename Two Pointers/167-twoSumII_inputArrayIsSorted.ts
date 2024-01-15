// basic two sum way
// double loop O(n^2)

// function twoSum(numbers: number[], target: number): number[] {
//     const result = [0, 0]
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) {
//                 result[0] = i + 1
//                 result[1] = j + 1
//                 break
//             }
//             // optimization 1? extra overhead worse case
//             if (numbers[i] + numbers[j] > target) break
//         }
//     }

//     return result
// };

// sexy DP way
// the hash object itself can look a little confusing when logged
// but it's simply how we structured it choosing to hash target-num
// 1st example, output: { '2': 1, '7': 0, '-2': 2, '-6': 3 }
// "7" is the resulting target-num from index 0
// ie. nums[0] = 2, 9-2 = 7, hence {"7":0,...}
interface IHash {
	[key: string]: number
}

function twoSum(numbers: number[], target: number): number[] {
	const hash: IHash = {}

	for (let i = 0; i < numbers.length; i++) {
		const currVal = numbers[i]
		if (hash.hasOwnProperty(currVal)) {
			return [hash[currVal] + 1, i + 1]
		}
		if (!hash.hasOwnProperty(target - currVal)) {
			hash[target - currVal] = i
		}
	}

	// dummy
	return [0, 0]
}

// 3rd O(n log n) way - probably the way
// too lazy to do this now but the way you seem to do this is by doing
// while (low < high) and starting from the middle of the array
