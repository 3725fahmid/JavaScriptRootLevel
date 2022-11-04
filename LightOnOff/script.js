const onDisplay = document.querySelector('#ON');
const Text = document.getElementById('text');
const OnBtn = document.getElementById('btnON');

const OffBtn = document.getElementById('btnOFF');

const onButton = () => {
        onDisplay.src='image/ON.png';
        Text.innerHTML = "Light is ON"
}

OnBtn.addEventListener('click',onButton);

const LightOff = () => {
    onDisplay.src="image/OFF.png";
    Text.innerHTML = "Light is OFF"
}

OffBtn.addEventListener('click',LightOff);

