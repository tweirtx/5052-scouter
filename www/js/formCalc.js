var storage = window.localStorage;
try {storage.getItem('entries')}
catch (e) {storage.setItem('entries', 0)}

function formCalc() {
	var entries = storage.getItem('entries');
	storage.setItem('entries', entries + 1);
	var results = document.getElementById("working").value;
	alert("The form returned " + results);
	var generatedjson = "TODO";
	storage.setItem(entry + 1, generatedjson);
	storage.setItem(entry + 1+" Loaded", false)
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});
