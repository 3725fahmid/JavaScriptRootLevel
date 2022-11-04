//============ HAKER RANK PROBLEM TEST ==================//

//============ FIND MEDIAN NUMBER FROM ARRAY ==================//

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,13,17,19,20,22]

const myNum0 = arr;



var myNum =  myNum0.sort((a,b) => a - b);
var arrylength = myNum.length;
var meDIANva = arrylength+1;
 for(let i=1;i<=arrylength;i++){
     if(arrylength%2 !== 0 ){
       var meDIANva1 =  meDIANva / 2;
       var medianNumber = myNum[meDIANva1-1];
       console.log(myNum[meDIANva1-1])
     }else 
        console.log('even')
     
 }


 document.getElementById("demo").innerHTML = medianNumber;
 document.getElementById("demo2").innerHTML = myNum;



console.log(arrylength)
console.log(myNum)
