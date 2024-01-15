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

function rightSideView(root: TreeNode | null): number[] {
	const result = []
	if (!root) return result

	const queue = []
	queue.push(root)
	while (queue.length) {
		const length = queue.length
		result.push(queue[queue.length - 1].val)
		for (let i = 0; i < length; i++) {
			const temp = queue.shift()
			if (temp.left) {
				queue.push(temp.left)
			}
			if (temp.right) {
				queue.push(temp.right)
			}
		}
	}
	return result
}
