var db;
var databaseName = 'scouting5052';
var databaseVersion = 1;
var dataToScout = JSON.parse(loadJSON('schema.json'));
var db = window.openDatabase(databaseName, databaseVersion, "Scouting Data", 1000000);
db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS `test` (`BlaBla`	TEXT, `Field2`	TEXT)");
    tx.executeSql("INSERT INTO test (BlaBla, Field2) VALUES ('Hello', 'World!'");
    alert(tx.executeSql("SELECT * FROM test"))
});