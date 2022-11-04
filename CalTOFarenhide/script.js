const caltem = () => {
    const numbert = document.getElementById('tem').value;
    // console.log(numbert);

    const temSelect = document.getElementById('temp_diff');
    const valutem = temp_diff.options[temSelect.selectedIndex].value;
    // console.log(valutem);

    const calTOfah = (num) => {
        let Fahrenheit = Math.round((num * 9/5)+32);
        return Fahrenheit;
    }
    const fahTocal = (num) => {
        let Celsius = Math.round((num - 32)* 5/9);
        return Celsius;
    }

    let result;

    if(valutem == 'cal') {
        result = calTOfah(numbert);
        document.getElementById('resultContainer').innerHTML = `${result}°Fahrenheit`
    }
    else if(valutem == 'fah'){
        result = fahTocal(numbert);
        document.getElementById('resultContainer').innerHTML = `${result}°Celsius`
    }
    else {
        document.getElementById('resultContainer').innerHTML = `undefine`

    }
}