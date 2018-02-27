var storage = window.localStorage;

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results);
	var generatedjson = "TODO";
	storage.setItem('test', generatedjson);
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});

alert("JS reached EOF");