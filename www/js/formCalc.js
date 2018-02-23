function formCalc() {
	alert("formCalc called")
	var results = document.getElementById("working").value;
	alert('Results! '+results)
}
alert("JS loaded")
document.addEventListener('DOMContentLoaded', function buttonPress(){
	alert("In event listener")
	document.getElementById('button').addEventListener("click", formCalc);
});
alert("Event listener added")
