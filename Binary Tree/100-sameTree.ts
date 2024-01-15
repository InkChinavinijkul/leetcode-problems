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

// much simpler, much better solution thank you
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	// if both are end of branch
	if (!p && !q) return true

	// if only one is at the end of its branch
	if (!p || !q) return false

	// if the value doesn't match
	if (p.val !== q.val) return false

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
