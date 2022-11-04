const arr =[[10,2,4],[4,5,6],[7,8,9]]

function diagonalDifference(arr) {
    var n = arr.length; 
    var d1 = 0;
    var d2 = 0;
  for(var i=0; i<n; i++){
     for(var j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
    }
    // return Math.abs(d1 - d2);
    const sum = Math.abs(d1 - d2);
    console.log(sum);
}
diagonalDifference(arr);