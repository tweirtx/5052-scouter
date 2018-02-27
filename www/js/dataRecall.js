function qrGenerate() {
	var toQR = "test: "+results;
	var qrelement = document.getElementById('qrcode');
	var generatedQR = new QRious({
		element: qrelement,
		value: toQR
	});
}