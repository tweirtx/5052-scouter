var storage = window.localStorage;

function formCalc() {
	var elements = document.forms['form'].elements;
	var finalKeys = [];
	for (var i in elements) {
		var formElement = elements[i];
		var formData = {
			'formID' : formElement.id,
			'response': formElement.value
		};
		console.log(formData);
		finalKeys.push(formData);
	}
	console.log(finalKeys);
	var entries = -1;
	for (var i in storage) {
		if (i.startsWith('scoutForm')) {
			entries += 1;
		}
	}
	var newentry = entries + 1;
	storage.setItem('scoutForm'+newentry, finalKeys);
	alert("Form calculated");
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});