/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// accidentally used queue.length again oops

function averageOfLevels(root: TreeNode | null): number[] {
	const result: number[] = []
	if (!root) return result
	const queue = []
	queue.push(root)

	while (queue.length) {
		let sum = 0
		const length = queue.length
		for (let i = 0; i < length; i++) {
			const temp = queue.shift()
			sum += temp.val
			if (temp.left) queue.push(temp.left)
			if (temp.right) queue.push(temp.right)
		}
		console.log(sum, length)
		result.push(sum / length)
	}

	return result
}
