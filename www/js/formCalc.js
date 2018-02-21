function formCalc() {
	alert("formCalc called")
	var results = document.getElementById("working").value;
	alert('Results!'+results)
}
alert("JS loaded")
document.addEventListener('DOMContentReady', function (){
document.getElementById('testButton').addEventListener('click', formCalc);
});
alert("Event listener added")
