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

//capture button click or...
sub.addEventListener('click', function(){
	getInput();
	showTemp(convert(inTemp, celsCheck), outScale);
});

//capture enter key up  NOT WORKING???
// sub.addEventListener('keyup', function(event){
// 	if (event.which === 13) {
// 		getInput();
// 		showTemp(convert(inTemp, celsCheck), outScale);
// 	}
// });

//if temperature is greater than 90/32

//give p class of hot

//if temperature is less than 32/0

//give p class of cold