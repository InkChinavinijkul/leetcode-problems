// easy way to check each value with every other value after and find the largest diff
// this is like O(n^2) or something close, however)

// if the next value is smaller than the current one
//   then we can immediately ignore the current since you'll be able to buy lower
// if next value is greater than the current one
//   then we calc max?

// update: can just make 1 pass through the array
// find lowest price
// find highest price AND index > buy date

function maxProfit(prices: number[]): number {
	let max = 0
	let buyLowest = Math.pow(10, 4)

	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < buyLowest) {
			buyLowest = prices[i]
		}
		if (prices[i] - buyLowest > max) {
			max = prices[i] - buyLowest
		}
	}
	return max
}

// the better way would probably to go through array once and keep track of max value
