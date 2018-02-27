import * from qrcode;

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results);
	var toQR = "test: "+results;
	var qrelement = document.getElementById('qrcode');
	var generatedQR = qrcode.makeCode(qrelement, toQR);
	//qrelement.value = generatedQR
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});


alert("BOO!")