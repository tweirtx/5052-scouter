
function debugLog(toLog) {
	var debug = true
	if (debug) {
		alert(toLog)
	}
}

document.addEventListener('deviceready', function() {
	alert("Deviceready event fired");
})

var db = window.indexedDB.open('scoutingData.db', 1);
//	name: 'scoutingData.db',
//	location: 'default',
//	androidDatabaseImplementation: 2
//});
//});

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results)
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});
