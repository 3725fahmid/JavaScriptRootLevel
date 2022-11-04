const showJokes = document.querySelector('#joke');

const nextJoks = document.querySelector('#jokeBtn');

//GET https://icanhazdadjoke.com/

//Fairst we use promise 
// . then and catch method

// const genarateJokes = () => {

//     const setHeader =  {
//         headers: {
//             Accept: 'Application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res) => res.json())
//     .then((data) =>showJokes.innerHTML = data.joke)
//     .catch((err) => console.log(err))
// }


//now we use asing await for fetching data

const genarateJokes = async () => {

    try{
        const setHeader =  {
            headers: {
                Accept: 'Application/json'
            }
        }
        const res = await  fetch('https://icanhazdadjoke.com/',setHeader);
        
        const data = await res.json();

        showJokes.innerHTML = data.joke;

    }catch(err){
        console.log(`There is ${err}`);
    }

    
}

nextJoks.addEventListener('click',genarateJokes);
genarateJokes();














