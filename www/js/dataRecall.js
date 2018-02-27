var storage = window.localStorage;
function qrGenerate() {
	var entries = storage.getItem('entries');
	var toQR = storage.getItem(entries);
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		element: qrelement,
		value: toQR
	});
}

function markLoaded() {
	for (i in range(entries)) {
		isLoaded = storage.getItem(string(i)+" Loaded");
		if (!isLoaded){
			storage.setItem(string(i)+" Loaded", true);
		}
	}
}
document.addEventListener('DOMContentLoaded', qrGenerate)