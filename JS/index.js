// concatination oparetor

// var myName = "konok";

// console.log("my name is "+ myName);

// exponiyension operation

// var tothepower = 14**12;
// console.log(tothepower);

// swipe this value a= 10 b = 5

// var a =5;
// var b = 10;

// var c = b; //c = 10

// b = a //b =5

// a = c // a =10

// console.log("value of a " + a)
// console.log("value of b " + b)



// swipe this value a= 10 b = 5 with out usign 3rd variable


// var a =5;
// var b = 10;

// a =  a+ b; //a = 15

// b = a - b; // b = 5

// a = a - b; // a = 10




// console.log("value of a " + a)
// console.log("value of b " + b)


//------------------- Difference Between == and ===    ----------------------------------------


// == means chack only value is it integer and string doesn't matter
// === means chack type of value . chack specific data type 

// var a = 5
// var b = '5'

// console.log( a == b)
// console.log( a===b )


// var myYear =  2022;
// debugger;
// if( myYear%4 === 0) {
//     if(myYear%100 === 0){
//         if(myYear%400===0){
//             console.log('This year' + myYear + "not leapYear")
//         }
//     }else {
//         console.log(myYear + ' is leap year')
//     }

// }else{
//     console.log('This year ' + myYear + " not leapYear")
// }
 


//-----------------------------------   false value ----------------------------------------



//In the javaScript there are 5 type of  false value  such as : 0, "", NaN , null, undefined false 
// flase valu give all time false result 


// if( value1 = 0 ){
//     console.log('miss the game')
// }else {
//     console.log('won the game')
// }




//----------------------------------------   TARNARI OPARETOR --------------------------------



// tarnari oparetor
//IT'S DIFFERENCE BETWEEN IF ELSE , it's convert if else TO ----  (condition) ? first argument : 2nd argument
//basic if else statement

// var age=18; //value assign
// if(age>=18){ // condition
//     console.log("You can vote");//1st argument
// }else {
//     console.log("you can't vote");//2nd argument
// }

//here we write tarnari operator
//(condition) ? first argument : 2nd argument


// var age=17;
// var chackThe = ((age>=18) ? "You can vote" : "you can't vote");
// console.log(chackThe);


//-------------------------    switch statement -----------------------

// var thisMonth = "january";

// if(thisMonth == "january"){
//     console.log("This month 31 days");
// }else if(thisMonth == "febuary"){
//     console.log("This month 28 days");
// }else if(thisMonth == "march"){
//     console.log("This month 31 days");
// }else {
//     console.log("Enter month name");
// }

//this condition we use swich case instated of if else 

// var thisMonth = "january";

// switch (thisMonth) {
//     case 'january':
//         console.log("This month 31 days");
//         break
//     case 'february':
//         console.log("This month 28 days");
//         break
//     case 'march':
//         console.log("This month 31 days");
//         break
//     default: console.log("Enter month name");
// }


//--------------------------   While loop ------------------------
// var num = 0;
// while(num <= 10){
//     debugger;
//     console.log(num)
//     num++;   
// }

// --------------------------      do while loop -------------------------

// var num = 20;
// do{
//     debugger;
//     console.log(num)
//     num++; 
// }while(num <= 10);


//------------------------------- for looop -----------------------



// for(var i=0; i<=10; i++){
//     console.log(i);
// }

// Task:  calculate 99 table

// var a = 99;

// for(var i=1; i<=10; i++){
//     debugger;
//     let ansNum = a * i ;
//     console.log(a + ' x ' + i + ' =',ansNum);
// }


//----------------------============     DISCOUSE ABOUT FUNCTION  ====================------- 


//Two variable sum without usign function

// var a= 20 , b=30;
// var sum = a + b;

// console.log(sum);

//Two variable sum with usign function

//Function with hard code

// function sum() {
//     var a = 10, b=5;
//     var allSum = a+b;
//     console.log(allSum);
// }

// sum();//cllthe function or function diclaretion

// 2nd step for paramitter and arguments

// function sum(a,b) { //we pass 2 paramitter  a and b in this function paranthisis  a and b
//     var allSum = a+b; // sum this paramitter
//     console.log(allSum);//console log this sum value
// }
// sum();//call the function with no argument
// sum(20,22)//call the function with 2 argument 




//use function expretion


// function sum(a,b){
//     var total = a +b;
//     console.log(total);
// }

// var fun = sum(20,21);

//use function with return key

// function sum(a,b){
//     debugger;
//     return total =  a + b;
// }

// var funExp = sum(20,40);

// console.log(funExp);










//------------------     Anonymus function expretion ---------------



// var funAnonimous = function(a,b){ // here write function  with no name it assign with a variable
//     return total =  a + b;
// }

// var sum = funAnonimous(20,40);

// console.log(sum);







//==========================       ES6 or ECMAscript2015 ========================





// here use use let and const

// var is a functional scop
// const and let is block scope

// const myName = 'konok'
// console.log(myName);
// myName = 'fahmid'
// console.log(myName);


// function myData(){//block statement there is anythin in this braket means in block {}
//     const myFname = 'konok'
//     console.log(myFname);
//     if(true){
//         const myLname = 'letm'
//         console.log(myLname);
//         console.log(myFname);//this is inner blok condition this block in parents block
//     }
// }
// myData();





//------------------------------     Template string  `${}` ----------------------------



//we use template string insted of concatination

// for(let num=1; num<=10;num++){
//     let table = 12;
//     let myAns = (`${table} * ${num} = ${table * num}`)
//     console.log(myAns)

// }





//------------------      Default parametter ------------



// function multiplay(a, b = 5) //here we pass default parameter is value of b is 5
// {debugger;
//     return a * b;
// }
// console.log(multiplay(4000));


//---------------------      Fat arrow function --------------------- 

//menual and long fat arrow functionn

// const mult = () => {
//     var a=2,b=5;
//     let multiplay = a * b;
//     return `${multiplay}`
// }
// console.log(mult());

//we use multplication variable in  template string 

// const mult = () => {
//     var a=2,b=5;
//     return `${a*b}`
// }
// console.log(mult());

//we use asing variable in  template string 

 // if there is one argument there no need to use retun kyword
 
 // if we dont use return kyword we don't need to use this  {}


//  const mult = () =>  `${(a=5)*(b=3)}` 
//  console.log(mult());




//---------------     ARRAY SCTION ----------------



//Array class for javascript

// var myFriends = new Array; //here new keyword is define my friend is an array 

// var myFriends = ['jim','manik','asraf']



//Travarsel in array 
// how I show array value

// var myFriends = ['jim','manik','asraf',"noman",'moin','mohan','konok']

// console.log(myFriends[myFriends.length-1]);

// //if we want tp  find arrays length

// console.log(myFriends.length);

//we use for loop to  navigation of an array

// menual without ES6

// var myFriends = ['jim','manik','asraf',"noman",'moin','mohan','konok']

// for(var n=0; n<myFriends.length; n++){
//     console.log(myFriends[n]);
// }

// Now ES6 we use (for in) and (for of) 

//fast we use (for in) to find index number

// var myFriends = ['jim','manik','asraf',"noman",'moin','mohan','konok']

// for( let value in myFriends){
//     console.log(value);
// }



//second we us (for of) to  find name or elemrnt

// var myFriends = ['jim','manik','asraf',"noman",'moin','mohan','konok']

// for( let value of myFriends){
//     console.log(value);
// }


// var myFriends = ['jim','manik','asraf',"noman",'moin','mohan','konok']

// for( let value1 in myFriends){
//     var indexNum = value1;
// }
// for( let value2 of myFriends){
//     var nameOf = value2;
// }
// console.log(`${indexNum} = ${nameOf}`)

//Now we found forEach loop here
//Array.prototype.forEach

// var myFriends = ['jim','manik','asraf',"noman",'moin','mohan','konok']
// debugger;

// myFriends.forEach((elem,index,array) => { // for each fast parametter return main value then index number and then main array 
//     console.log( index + " = "+ elem);
// })


//seaching felter in array

//?? want to know latter

//Sort and compare in array

//?? want to know latter


//------------------------------ CURD --------------------

//use push method for add new eliment in this array

// here push method return langth of array
// push method add value as a last value of an array

// const animals = ['goat','cow','chicken','sheep']

// const cou = animals.push('duck');

// console.log(animals);
// console.log(cou);

// const animals = ['goat','cow','chicken','sheep']

// animals.push('cat',"ox",'hourse')
// console.log(animals);


//  unshift array
//unshift Array use to add value as a first number of array

// const animals = ['goat','cow','chicken','sheep']

// animals.unshift('hourse')
// console.log(animals);


//if we use numbers

// const myNumber = [1,2,5,7]

// myNumber.unshift(8,9)

// console.log(myNumber);




// use pop method in an array
////it's  remove the value from last eliment of an array
//Array.prototype.pop
//it's return  length of an array

// const foods = [ 'bokli','banana','apple','orange','jum']

// console.log(foods);
// console.log(foods.pop());
// console.log(foods);


// use shift method in an array
//it's  remove the value from first eliment of an array

// const foods = [ 'bokli','banana','apple','orange','jum']

// console.log(foods);
// console.log(foods.shift());
// console.log(foods);

//Problems 

// 1. add dec at the end of an Array
// 2. what is the return value of splice methods
// 3. update march to march
// 4. delete June from an array

// Task 1 ->

// const months = [ 'jan','feb','march','april','may','june','july']
// const newMonth =  months.splice(months.length,0,'dec')// here 1st paramitter is which point we want to start and then how many items we want to delete then which element i want to repalace
// console.log(months);

// Task 2 ->
//splice methods awayes perfom delete but we use it 0 so its returns empty array

// const months = [ 'jan','feb','march','april','may','june','july']
// const newMonth =  months.splice(months.length,0,'dec')
// console.log(newMonth);


// Task 3 ->
//menual system we count array number of march and delete and add March
// const months = [ 'jan','feb','march','april','may','june','july']
// const updateMonths = months.splice(2,2,'March')

// console.log(months);

// now we use search method and find it autometically 

// const months = [ 'jan','feb','march','april','may','june','july']

// const indexOfM = months.indexOf('feb')
// if(indexOfM !== -1){
//     const updateMonths = months.splice(indexOfM,1,'Feb');
//     console.log(months);
// }else {
//     console.log('Data not found')
// }



// Task 4 ->
// delete June from an array

// const months = [ 'jan','feb','march','april','may','june','july']
// debugger;

// const indexOfM = months.indexOf('april')
// if(indexOfM !== -1){
//     const updateMonths = months.splice(indexOfM,Infinity);
//     console.log(months);
// }else {
//     console.log('Data not found')
// }




// Map reduce and fillter

//******************************** Map method ***********************************

// const arrNum = [1,2,1,5,15,8,5,1,51,5,15,1,51,5,15,1,5,]

// let newArr = arrNum.map((curE,index,arr)=>{
//     return `There is index is ${index} and number ${curE}  the arr is ${arr}`
// })
// console.log(arrNum);
// console.log(newArr);

//Problems 
// 1. Find the square root of each element of an Array
// let arr = [ 25,36,49,64,81]

// 2. Multiply each element by 2 and return thos valu which gatter then 10

//Task 1 

// let arr = [ 25,36,49,64,81]

// const sqrRoot = arr.map((currE)=> Math.sqrt(currE)) // 1. Find the square root of each element of an Array
// console.log(sqrRoot);


//******************************** Filtrt method ***********************************


//Task 2 
//long method
// let arr = [2,34,5,6,8,9]

// let arrMultiplay = arr.map((c) => {
//     return c * 2;
// }).filter((ca) => {
//     return ca > 10;
// })

// console.log(arrMultiplay);

//sort method


// let arr = [2,34,5,6,8,9]
// debugger;
// let arrMultiplay = arr.map((c)=>c*2).filter((ca)=>ca>10).reduce((acc,currE)=>acc+=currE)
// console.log(arrMultiplay);// use reduce method



//******************************** Reduce method ***********************************

// let arr = [2,5,9,4]
// debugger;
// let sum = arr.reduce((accumulator,currE) => {
//     return accumulator += currE;
// })

// console.log(sum);


//input  another number with reduce method

// const arr = [2,5,9,4]

// let sum = arr.reduce((accumulator,currE) => {
//     debugger;
//     return accumulator += currE;
// },7)

// console.log(sum);

//flat array with reducer

// let fArr = [['zone_1', 'zone_2'],
//             ['zone_3', 'zone_4'],
//             ['zone_5', 'zone_6'],
//             ['zone_7', 'zone_8'],
//            ];

// let flatArr = fArr.reduce((acu, currval) => {
//     return acu.concat(currval);// concat for faltter the arrays
// })
// console.log(flatArr);


//<---------------------------------  STRING SECTION ----------------------------->


// var myName = 'Fahmid hasan konok'
// const lenofName = myName.length
// console.log(lenofName);

//ESCAPE CARECTER

// var jon = 'american actor who finish "GOT" serice';
// console.log(jon);

// searching  index number from first
// var myDay = 'The day is sunny day'

// const myDayL = myDay.indexOf('is');

// console.log(myDayL);

// searching  index number from last


// var myDay = 'The is day is sunny day'

// const myDayL = myDay.lastIndexOf('is',7);

// console.log(myDayL);

//Searchin string from string

// var myDay = 'The is day is sunny day'

// const myDayL = myDay.search('is');

// console.log(myDayL);




//-----------------------      slice method ------------------



// var mon = 'apple,orange,jackfrute'

// const myf = mon.slice(0,-5)
// console.log(myf);




//Problems

// Place shoow 280 carercter if carecter more then 280 then only show fast 280 carecter



// var twit = 'Place shoow 280 carercter if carecter more then 280 then only show fast 280 carecter kaf fkdalsj ka jfadnfid adnlgjnalng;ajgajg;aj'

// var newTwit = twit.slice(0,120);
// console.log(twit)
// console.log(twit.length);
// console.log(newTwit)
// console.log(newTwit.length)



// ----------------- Substring ----------------- 


// var mon = 'apple,orange,jackfrute'

// var nnew = mon.substring(7,0)
// console.log(nnew);


// ----------------- Substr  ----------------- 


// var mon = 'apple,orange,jackfrute'

// var neww = mon.substr(0,5);
// console.log(neww);





// ----------------- REPLACHING STRING CONTENT ----------------- 

// let myBio = 'I am a student of ramiz uddin';

// // let res = myBio.replace('am','was')

// console.log(res);

// charAt is a method which find the main index position of this string

// let val = ' This is konok'

// let cartP = val.charAt(7)
// console.log(cartP);

//-----------carecter code give us uts integer number of this string carecter

// let val = 'HELLOWORLD'
// console.log(val.charCodeAt(0));





//================  PROBLEMS ==================

//FIND THE LAST UNICODE OF THIS GIVEN STRING
// let val = 'HELLO WORLD'

// let findS = val.length-1;

// console.log(val.charCodeAt(findS));



//--------------------- porparty acess --------------


// ECMA script 5 2009  allows [] as a proparty srting

// let val = 'HELLO WORLD' 

// console.log(val[0]); // we use it as a array but if it's string we call it proparty










// use upper case and lowercase as amethods

// let myName = 'KOnOK'

// var res1 = myName.toUpperCase()
// var res2 = myName.toLowerCase()
// console.log(res1 + res2);




// ---------------------- tream method ---------------
// it's use for tream space 

// var a = '                 heloo messege         '
// let newA = a.trim();
// console.log(newA);

//--------------      sring can be an array with split method -------

// var mat = 'a,b,c,c,fa,d,fd,f,d,'
// var ko = mat.split(',')// here we define how we use splite method it's many things such as ',' and space->' ' or '| ' anythin which we want to splite with
// console.log(ko);


// ------------- problems what is the output of this object


// debugger;
// let x = {};
// let y = {name: 'kamrul'};
// let z = {name: 'Hasan'};
// x[y] = {name: 'Dipta'};
// x[z] = {name: 'Farzan'}
// console.log(x[z]);










// ----------------------------------    TIME AND DATE OBJECT --------------------------------




// There are four way to create new date object

// new Date()
// new Date(year,month,day,hour,minute,secound,milisecond) // it's take 7 argument

// new Date(milisecond)

// new Date( date string);

// let curTime = new Date();
// console.log(curTime);

// console.log(new Date());
// console.log(new Date().toString());
// console.log(new Date().toLocaleString());

// let myDate =  new Date().toLocaleString();

// let newDat = myDate.slice(10,-2)

// console.log(newDat);


//console.log(Date.now()); //we get time from 1 jan 1970 to now current time on miliseconds

//if we want to set our own time then

// var myDate = new Date( 2022, 8 , 25 , 20 ,25,26,0 ) 

// let dateLocal = myDate.toLocaleString()

// console.log(dateLocal);



//-------------------   new date string create a new  date object from a date string

// let dateOf = new Date('june 22, 2022  18:9:20')
// console.log(dateOf.toLocaleString());



//---------------   work with miliseconds -----------------


// let currentDate = Date.now();
// let dateOf = new Date(currentDate)
// console.log(dateOf.toLocaleString()); 




// -------------    get indivisula date 



// let dateOf = new Date();

// console.log(dateOf.toLocaleString());
// console.log(dateOf.getFullYear());
// console.log(dateOf.getMonth());
// console.log(dateOf.getDay());
// console.log(dateOf.getDate());
// console.log(dateOf.getHours());
// console.log(dateOf.getMinutes());



// =================        Set indivisual date ============

// let dateOf = new Date();

// console.log(dateOf.setFullYear(2022, 5 , 15));
// console.log(dateOf.setFullYear(2022));
// console.log(dateOf.setMonth(5));
// console.log(dateOf.setDate(4));
// console.log(dateOf.setHours(7));
// console.log(dateOf.setMinutes(21));

// -----------------------Work with Time methods proparty in javascript --------------

// const curtime = new Date();

// console.log(curtime.getTime("JUN 28, 2022 10:00:00"));
// console.log(curtime.getHours());
// console.log(curtime.getMinutes());
// console.log(curtime.getSeconds());
// console.log(curtime.getMilliseconds());

// how we get indivisual time or date

// var curTime = new Date();

// let onlyTime = curTime.toLocaleTimeString();
// let onlyDate = curTime.toLocaleDateString()

// console.log(onlyTime);
// console.log(onlyDate);

// const netTime = () => {
//     setInterval(() => {
//             var curTime = new Date();
//             let onlyTime = curTime.toLocaleTimeString();
//             console.log(onlyTime);
//     },1000)
// }
// netTime();

//-------------------- JAVASCRIPT MATH OBJECT --------------

//console.log(Math.PI);// valu of PI

// Math.round() 
// this is return the value of x rounded of it's nearest value

// let num = 10.6565165181545;
// let inNum = Math.round(num);
// console.log(inNum);

// Math.pow
// It's use for  the power of this value

// console.log(Math.pow(3,2));
// console.log(3**2);


// Math.sqrt()
// it's find squre root

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(55));
// console.log(Math.sqrt(45));
// console.log(Math.sqrt(36));

// Math.abs()
// There it's simpley use negetive to positve  


// console.log(Math.abs(-25));
// console.log(Math.abs(5-5));
// console.log(Math.abs(-45));
// console.log(Math.abs(36));

//Output : 
// 25
// 0
// 45
// 36

// Math.ceil() 
// this is return the value of x rounded of it's nearest value

// let num = 19.02;
// let inNum = Math.ceil(num);// it's roundev value if it's show something after the dot
// console.log(inNum);


// Math.floor
// This is floring the value 
// it's means it's give loyest value

// let num = 19.99;
// let inNum = Math.floor(num);// it's rounde value before the dot
// console.log(inNum);

// Math.min and Math.max
// To find minimum number of this value

//  let num = [21,15,1,51,5,2,5,1,51,5,1,56,15,1]
// //let newNum = Math.max(21,15,1,51,5,2,5,1,51,5,1,56,15,1);
// //let newNum = Math.min(21,15,1,51,5,2,5,1,51,5,1,56,15,1,-25);

// let newNum = Math.max(...num)

// console.log(newNum);

// Math.random()

// It's return rendom value 0 to 9

// console.log(Math.floor(Math.random()*10)); 



// Math.trunc
// It's returns integer part


// console.log(Math.trunc(4.3));
// console.log(Math.trunc(-99.3));





//------------------------------ Search the element and the reference -------------------

// reference scearch.html














//------------------------------ JAVASCRIPT Events -------------------



//There are 4 way to write events 

// 1. usign inline events alert()
// 2.By calling a function()
// 3.Inline event HTML onclick proparty and element onclick. 
// 4. usign Event Listener (addEventListener and IE attachevents)





//---------- Event Object -----

//Event object is parents of event object


//-------  MouseEvent  -----------

// mouseDown mouseUp mouEnter mouleave 



//MouseEvent in javascript




// KeyboardEvent







// InputEvent in javaScript






//---------------------------  Timing based event Listner ------------------

//setTimeout()


// setInterval()


// clearTimeout()


// clearInterval()



//-------------------------   JavaScript Object concept short cut OOPS concept    ------------------

// Storing variable and and function in one container
// We can refer this as an object
// object literal is key:value pair data starcture

// How to create a Object

// 1st way

// let myData = {
//     myName: 'fahmid',
//     myAge : 25,
//     myHoby: 'Gardening',
//     getData: function(){
//         console.log(`My name is ${myData.myName} and age is ${myData.myAge} my hoby is ${myData.myHoby}`);
//     }
// }
// console.log(myData.myName);
// myData.getData();

// 2nd Way no need to write function as well as after ES6


// let myData = {
//     myName: 'fahmid',
//     myAge : 25,
//     myHoby: 'Gardening',
//     getData (){
//         console.log(`My name is ${myData.myName} and age is ${myData.myAge} my hoby is ${myData.myHoby}`);
//     }
// }
// // console.log(myData.myName);
// myData.getData();



//---------------     if we want object under an object

// 3rd way


// let myData = {
//     myName: {
//         fastName: 'Fahmid',
//         lastName: 'konok'
//     },
//     myAge : 25,
//     myHoby: 'Gardening',
//     getData (){
//         console.log(`My name is ${myData.myName} and age is ${myData.myAge} my hoby is ${myData.myHoby}`);
//     }
// }
//  console.log(myData.myName.fastName);
// // myData.getData();




//------------- Here we Learn about This Object -----------

// console.log(this);
//There is nothing because (this Object) is window global object 


// let myData = {
//     myName: {
//         fastName: 'Fahmid',
//         lastName: 'konok'
//     },
//     myAge : 25,
//     myHoby: 'Gardening',
//     getData (){
//         console.log(`My name is ${this.myName.fastName} and age is ${this.myAge} my hoby is ${this.myHoby}`);
//     }
// }
// //  console.log(myData.myName.fastName);
// myData.getData();



//------------------------ distractaring ----------------

//Array distractaring

// let myData = ['Fahim','jim',25,45,'kojfk',2022]
// manual system
// let myN = myData[0];
// let frN = myData[1]; 

// console.log(myN);

//If we use distractaring

// let myData = ['Fahim','jim',25,45,'kojfk',2022]


// let [ myN, frN,mAge,roll, extra,year] = myData;

// console.log(year);



//Object Distractaring

//menual

// const myData = {
//     myName: 'Fahmid',
//     myLname : 'konok',
//     age: 25,
// }

// let nameF = myData.myName;
// let nameL = myData.myLname;

// console.log(nameL);

//distractaring

// const myData = {
//     myName: 'Fahmid',
//     myLname : 'konok',
//     myAge: 25,
// }

// let {myName,myLname,myAge} = myData;

// console.log(myAge);



//---------------------    Object Proparty  -------------------------

//sprade oparetor



// const myData = {
//     myName: 'Fahmid',
//     myLname : 'konok',
//     myAge: 25,
// }

// const spData = {...myData,hoby:'gaming'}

// console.log(spData);





// Array // sprade oparetor

// const color = ['red','yellow','green','megenda','black']

// const myNewColor = ['red','yellow','green','megenda','black','lemp','gray']

// // use sparde oparetor like (...color)

// const mySColor = [...color,'lamp','gray']

// console.log(myNewColor);
// console.log(mySColor);


// =================         ES7 feature    =================

// Array.prototype.includes

// const color = ['red','yellow','green','megenda','black']

// const isit = color.includes('rede')

// console.log(isit);

// Exponentiation operation 
//it's means **
// it's use for squr root

// console.log(2**3); //2x2x2

// console.log(5**3); //5x5x5


//========================== ES8 ============


//========================== ES10 ============

// Flat methods
// it's batter then reduce array


//========================== ES11 ============

// BigInt

//event propagetion
//


// -------------------  Asincronus javaScript -----------------

// console.log(myName)
// let myName;
// myName = 'konok';

//There welearn hosting


//Lexical scoping
//Here we accesisg parent eliment as a child but can's acess child eliiment
//as a parent eliments

// let a = 'Hi ';

// const ma = () => {
//     let b = 'I am fine';
//     const na = () => {
//         let c = ' How are you ?'
//         console.log(a+b+c);
//     }
//     na();
//     // console.log(a+b+c);
// }
// ma();




//----------- Clasur ----------

// const outerFun = (a) => {
//     let b = 10;
//     const innerF = () => {
//         let sum = a+b;
//         console.log(`The sum of two number is ${sum}`);
//     }
//     return innerF;
// }
// let chackOut  = outerFun(5);
// console.dir(chackOut);


//Syncronous 

// const m = () => {
//     console.log("This is 2nd");
// }
// const n = () => {
//     console.log("this is fast");
//     m();
//     console.log("This is 2n first");
// }

// n();


//Asyncronous


// const m1 = () => {
//     setTimeout(() => {
//         console.log("This is Asynicronous");
//     },5000)
// }
// const n1 = () => {
//     console.log("this is fast");
//     m1();
//     console.log("This is 2n first");
// }

// n1();


//------------       Event Loop ----------------







// -----------  Currying ----------------


// const curI = (a) => {
//     return function(b){
//         return function(c){
//             console.log(a,b,c);
//         }
//     }
// }

// curI(2)(5)(7)


// use  FatArrow function

// const curI = (a) => (b) => (c) => console.log(a+b+c)
// curI(2)(5)(7)

// console.log(`5+5+5+5 = 555`);



//  union array

// const uni = [ ...new Set([...myArray])];
// console.log(...uni);



// JSON Details

// JSON means javaScript object notation



































































































































































































































































































































































































































































































































































































































































































































































































































