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

// lazy way taking code from previous answers
function zigzagLevelOrder(root: TreeNode | null): number[][] {
	const result = []
	if (!root) return result

	const queue = []
	queue.push(root)
	while (queue.length) {
		const level = []
		const length = queue.length

		for (let i = 0; i < length; i++) {
			// turns out the structure of tree and its subtrees
			// doesn't allow us to do this or something along those lines
			// ex. [3,9,20,null,null,15,7], reaching the val === 20 node
			// we get temp = [20, 15, 7] and so popping gives us rightmost node
			// instead of the current one
			// const temp = result.length%2 ? queue.shift() : queue.pop()
			const temp = queue.shift()

			// instead have to change how we push values into result
			// without unshift() we'd insert the element in reverse order manually
			result.length % 2 ? level.unshift(temp.val) : level.push(temp.val)

			// without ternary we would've just write out the conditions or instantiate
			// let temp instead
			// thinking about it we can probably also change this order
			// but it'll still probably require an extra condition
			if (temp.left) queue.push(temp.left)
			if (temp.right) queue.push(temp.right)
		}
		result.push(level)
	}

	return result
}
