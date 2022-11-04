const quizDB = [
    {
        question: 'Q1: What is the full name of Html ?',
        a: 'Hyper Text mokup languagr',
        b: 'Hayper text mark language',
        c: 'Hypertext Markup Language',
        d: 'hyper morkup text language',
        ans: 'ans3'
    },
    {
        question: 'Q2: What is the full name of Js ?',
        a: 'javascope',
        b: 'jonScript',
        c: 'javaScript',
        d: 'JAVA',
        ans: 'ans3'
    },
    {
        question: 'Q3: Eighteen thousandths, written as a decimal, is:',
        a: '0.0018',
        b: '0.2542',
        c: '0.01545',
        d: '0.18',
        ans: 'ans1'
    },
    {
        question: 'Q4: The next number in the sequence <b>1, 3, 6, 10, </b> is:',
        a: '12',
        b: '13',
        c: '14',
        d: '15',
        ans: 'ans4'
    },
    {
        question: 'Q5: Which of the following is not a type in JSON ?',
        a: 'data',
        b: 'Object',
        c: 'Array',
        d: 'string',
        ans: 'ans1'
    },
    {
        question: 'Q6: Who is the Father of JSON ??',
        a: 'Douglas Crockford',
        b: 'Rasmus Lerdorf',
        c: 'Douglas Michel',
        d: 'Dennis Ritchie',
        ans: 'ans1'
    },
];
const question = document.querySelector('.quz'); // select question class
const option1 = document.querySelector('#op1'); //select option id
const option2 = document.querySelector('#op2');//select option id
const option3 = document.querySelector('#op3');//select option id
const option4 = document.querySelector('#op4');//select option id

const submit = document.querySelector('#btn'); //select button id

const answers = document.querySelectorAll('.answer'); //select answer class which come from input from

const showScore = document.querySelector('#score');// select score div area for swoing result

let count = 0; // assing counting value which question and which ans user select
let score = 0; // select assign score how many question correct


const loadQuiestion = () => {   // desine a function which display question and answer

    const quizEliment = quizDB[count];  //question count valu assign

    question.innerHTML = quizEliment.question;  //show question in our webpage

    option3.innerHTML = quizEliment.c; //show option in our webpage
    option1.innerHTML = quizEliment.a; //show option in our webpage
    option2.innerHTML = quizEliment.b; //show option in our webpage
    option4.innerHTML = quizEliment.d; //show Option in our webpage
}

loadQuiestion(); //function call  // this is use for display question 

const getAns = () => {  // For get the Answer
    let answer; // answer type diclaretion

    answers.forEach((curE) => { // forEach help use to find currect ans from option
        if(curE.checked){ //chack current element 
            answer = curE.id; // got current element ID assign as a answer
        };
    });
    return answer; // return the answer
};

const desel = () => { //deselect  the option when we get new question and answer
    answers.forEach((curE) => curE.checked = false) //  when curE chacked is false 
}

submit.addEventListener('click',() => { // click submit button run the click event
    const chackAns = getAns(); // call the function for get answer and assing as a valu call chackAns
    // console.log(chackAns);

    

    if(chackAns === quizDB[count].ans){ // chack the ans with our database answer
        score++; // if it's correct then increase the score
    };

    count++; //when we submit ans and  fire this event we count  1 and we got next question 
    desel(); // call the function to deselect when we click submite ans

    if(count < quizDB.length) { //chack if count less then database length then   
        loadQuiestion(); //call a function who display the question
    }else { // count not less then database length then
        showScore.innerHTML = // show the score 
        `
        <h3>Your Score ${score}/${quizDB.length} <h3>
        <button class="btn" onclick ="location.reload()">Try Again<button>
        `
        showScore.classList.remove('scoreArea');
    }

} );























































































































