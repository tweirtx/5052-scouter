var storage = window.localStorage;
var currententry = -1;
var entries = -1;
for (var i in storage) {
	if (i.startsWith('scoutForm')) {
		entries += 1;
	}
}

function qrGenerate(entry) {
	var toQR = storage.getItem('scoutForm'+entry);
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		size: 500,
		element: qrelement,
		value: toQR
	});
}

function advanceQR() {
	currententry += 1
	if (currententry == entries) {
		currententry = 0;
	}
	qrGenerate(currententry);
}

document.addEventListener('DOMContentLoaded', advanceQR);
document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('nextQR').addEventListener("click", advanceQR);
});