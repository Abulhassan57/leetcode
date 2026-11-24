/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count=0;
    let m= mat.length; 
    let n= mat[0].length;

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){

            if(mat[i][j]===1){
                let rowCount=0;
                let colCount=0;

                for(let k=0; k<n; k++){
                    if(mat[i][k]===1){
                        rowCount++;
                    }
                }
                for(let k=0; k<m; k++){
                    if(mat[k][j]===1){
                        colCount++;
                    }
                }
                if(rowCount===1 && colCount===1){
                    count++;
                }
            }
        }
    }
    return count;
};