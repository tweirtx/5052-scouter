var storage = window.localStorage;
var currententry = -1;
var entries = -1;
var entry = 0;

scannedForms = storage.getItem('scannedForms');
try {
	console.log(scannedForms);
}
catch (ReferenceError) {
	storage.setItem('scannedForms', '')
}

for (var i in storage) {
	if (i.startsWith('scoutForm')) {
		entries += 1;
	}
}

function markScanned() {
	var currentlyRead = storage.getItem('scannedForms');
	var newScannedForms = String(Number(currententry)+entry);
	storage.setItem('scannedForms', newScannedForms);
	alert('Successfully marked as scanned')
}

function qrGenerate() {
	var toQR = storage.getItem('scoutForm'+entry);
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		size: 400,
		element: qrelement,
		value: toQR
	});

}

function advanceQR() {
	entry += 1
	if (entry == entries) {
		entry = 0;
	}
	qrGenerate();
	var isScannedElement = document.getElementById('scanned');
	var scannedforms = storage.getItem('scannedForms');
	var isScanned = false;
	console.log(scannedforms.toString().search(entry))
	if (scannedforms.toString().search(entry)) {
		isScanned = true;
	}
	isScannedElement.innerHTML = 'Scanned: '+isScanned;
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('nextQR').addEventListener("click", advanceQR);
	document.getElementById('markScanned').addEventListener('click', markScanned);
	advanceQR();
});