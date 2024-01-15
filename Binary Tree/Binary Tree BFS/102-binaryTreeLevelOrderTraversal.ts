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

// saved
function levelOrder(root: TreeNode | null): number[][] {
	const result = []
	if (!root) return result

	const queue = []
	queue.push(root)

	// this is fine because we want while to run for as long
	// as we have elements in the queue/stack
	while (queue.length) {
		const level = []

		// extract length to a constant so it doesn't change
		const length = queue.length

		// the issue was that pushing elements into queue
		// increases its length which goes from
		// queue.length = 1 -> 0 -> 1 -> 2
		// as we shift it, then push left and right
		// resulting in another pass through the loop
		for (let i = 0; i < length; i++) {
			const temp = queue.shift()
			level.push(temp.val)
			if (temp.left) {
				queue.push(temp.left)
			}
			if (temp.right) {
				queue.push(temp.right)
			}
		}
		result.push(level)
	}

	return result
}
