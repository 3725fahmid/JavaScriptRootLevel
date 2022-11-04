const counterIs = document.querySelectorAll('.counter');

counterIs.forEach((count) => {
    // console.log(count);

    count.innerHTML = 0;

    const updateCount = () => {
       const updateTarget = +count.getAttribute('data-target');
    //    console.log(updateTarget);
        const startCount = Number(count.innerHTML);

        const incrementCount = updateTarget / 100;

        if(startCount < updateTarget){
            count.innerHTML =`${Math.round(startCount + incrementCount)}`
            setTimeout(updateCount,10)
        }else {
            count.innerHTML = updateTarget;
        }

    }

    updateCount();

})






// When we get number in a string formate 
//We use 3 way to convert it in a number

// 1st Usign the unary plus operator 
// unary plus operator use before this string 
// and its give us number value

// var num = +str

// Number constructor

// var n = Number(str)

// The parseFloat Function: 
//Var n = parseFloat(str);
















