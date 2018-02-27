

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results);
	var toQR = "test: "+results;
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		element: qrelement,
		value: toQR
	});
	//qrelement.value = generatedQR
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});


alert("JS reached EOF");