const temload = () => {
    let temp = document.getElementById('TemIcon');
    temp.innerHTML = "&#xf2cb";

    setTimeout(() => {
        temp.innerHTML = '&#xf2ca'
    },1000)
    setTimeout(() => {
        temp.innerHTML = '&#xf2ca'
    },2000)
    setTimeout(() => {
        temp.innerHTML = '&#xf2ca'
    },3000)
    setTimeout(() => {
        temp.innerHTML = '&#xf2ca'
    },4000)
}

temload();

setInterval(temload(), 5000);