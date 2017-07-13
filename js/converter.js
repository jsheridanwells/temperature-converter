//select elements
const input = document.getElementById('input');
const celsRadio = document.getElementById('celsius');
const fahrRadio = document.getElementById('fahrenheit');
const sub = document.getElementById('submit-button');
const outBox = document.getElementById('output');

let inTemp = 0;
let celsCheck;
let outScale = '';
let outTemp = 0;

//capture temperature input
//capture radio button selection
function getInput() {
	inTemp = Number(input.value);
	celsCheck = celsRadio.checked;
	if (celsCheck) {
		outScale = 'C';
	} else {
		outScale = 'F';
	}
}

//perform conversion
function convert(temp, scale) {
	if (scale) {
		outTemp = (((temp -32) *5) / 9).toFixed(0);
	} else {
		outTemp = (((temp * 9 )/ 5) + 32).toFixed(0);
	}
	return outTemp;
}

// display result
function showTemp(temp, scale) {
	outBox.innerHTML = `${temp} &deg; ${scale}`;
}

// change output color depending on temperature
function changeOutputColor(temp, scale) {
	if (scale === 'C') {
		if (temp >= 32) {
			outBox.setAttribute('class', 'hot');
		} else if (temp <= 0){
			outBox.setAttribute('class', 'cold');
		} else {
			outBox.setAttribute('class', 'normal');
		}
	} else {
		if (temp >= 90) {
			outBox.setAttribute('class', 'hot');
		} else if (temp <= 32) {
			outBox.setAttribute('class', 'cold');
		} else {
			outBox.setAttribute('class', 'normal');
		}
	}
}

//capture button click or...
sub.addEventListener('click', function(){
	getInput();
	showTemp(convert(inTemp, celsCheck), outScale);
	changeOutputColor(outTemp, outScale)
});

//capture enter key up
document.addEventListener('keyup', function(event){
	if (event.which === 13) {
		getInput();
		showTemp(convert(inTemp, celsCheck), outScale);
		changeOutputColor(outTemp, outScale)
	}
});