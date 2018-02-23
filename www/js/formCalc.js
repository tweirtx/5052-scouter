function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results)
}
document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});
