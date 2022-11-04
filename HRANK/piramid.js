let a = '';
let b;
const piramid = () => {
    for (let outer = 0; outer < 5; outer++) {
        for (let inner = 0; inner <3; inner++) {
            if(outer === inner){
                a+= inner;
                console.log(a);
            }
            
        }
    }
}

piramid();