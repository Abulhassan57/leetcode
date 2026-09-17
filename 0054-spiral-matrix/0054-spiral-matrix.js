/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // let m=matrix.length-1, n=matrix.length-1;
    let left=0, top=0, bot=matrix.length-1, right=matrix[0].length-1;
    let result=[];

    while(left<=right && top<=bot){
        for(let i=left; i<=right; i++){
            result.push(matrix[top][i])
        }
        top++
        for(let i=top; i<=bot; i++){
            result.push(matrix[i][right])
        }
        right--
        for(let i=right; i>=left && top<=bot; i--){
            result.push(matrix[bot][i])
        }
        bot--
        for(let i=bot; i>=top && left<=right; i--){
            result.push(matrix[i][left])
        }
        left++
    }
    return result
};
// console.log(matrix(matrix))