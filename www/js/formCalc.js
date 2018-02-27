var storage = window.localStorage;

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results);
	var toQR = "test: "+results;
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		element: qrelement,
		value: toQR
	});
	storage.setItem('test', generatedQR);
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});

alert("JS reached EOF");