
function debugLog(toLog) {
	var debug = true
	if (debug) {
		alert(toLog)
	}
}

var db = window.sqlitePlugin.openDatabase({
	name: 'scoutingData.db',
	location: 'default',
	androidDatabaseImplementation: 2
});

document.addEventListener('deviceready', function() {
	window.sqlitePlugin.selfTest(function() {
	  console.log('SELF test OK');
	});
  });

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results)
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});
