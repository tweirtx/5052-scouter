
function debugLog(toLog) {
	var debug = true
	if (debug) {alert(toLog)

	}
}
function isAndroid(){
	platform = device.cordova
	alert(platform)
	if(platform == 'android') {
		return true
	}
	else {
		return false
	}
}

var db = window.sqlitePlugin.openDatabase({
	name: 'scoutingData.db',
	location: 'default',
	if (isAndroid) {
		androidDatabaseImplementation: 2
	}
});

function formCalc() {
	var results = document.getElementById("working").value;
	alert("The form returned " + results)
}

document.addEventListener('DOMContentLoaded', function buttonPress(){
	document.getElementById('button').addEventListener("click", formCalc);
});
