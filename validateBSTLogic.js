/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function helper(treeNode, lower, upper){
    if(!treeNode){
        return true;
    }
    let currentValue = treeNode.val;
    
    if(currentValue >= upper && upper){
        return false;
    }
    if(currentValue <= lower && lower){
        return false;
    }
    let counter = 0;
    if(treeNode.left ) {
        counter++;
    }
    if(treeNode.right ){
         counter++;
    }
    if(counter === 1){
        return false;
    }
    if (!helper(treeNode.left, lower, currentValue)){
        return false;
    };
     if (!helper(treeNode.right, currentValue, upper)){
         return false;
     };
    return true;
}

var isValidBST = function(root) {
    return helper(root, null, null)
};