var storage = window.localStorage;
function qrGenerate() {
	var toQR = storage.getItem('scoutForm0');
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		element: qrelement,
		value: toQR
	});
}

document.addEventListener('DOMContentLoaded', qrGenerate)