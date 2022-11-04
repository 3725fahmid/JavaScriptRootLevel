 const aRR = [1,2,2,3,4,4,4,5,5,6,7,7,7,8,8,1,2,2,3,4,4,4,5,5]
// function lonelyinteger(a) {
//     debugger;
//     for (let i = 0; i < a.length; i++) {
//         const count = a.filter((v) => v === a[i]).length;
//         console.log(count);
//         if (count === 1) {
//             console.log(a[i]);
//             return a[i];
//         }
//     }
// }
// lonelyinteger(aRR);


const uValue = aRR.filter(
    function(currE,index,arr) 
    {
        return arr.indexOf(currE) === index;
})
console.log(uValue);


// 1st way nefore ES6
// const UniqueElement  = aRR.filter((currE,index,array) => {
//        return array.indexOf(currE) === index
// })
// console.log(UniqueElement);

//2nd way after ES6

const uniqValue = new Set(aRR);

console.log(uniqValue);


















//Here link which i give youtube discription

//https://github.com/spoffyenar/javaScript/blob/main/Lonelyinteger.js

//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set







