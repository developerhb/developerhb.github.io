var database = firebase.firestore();
var user = database.collection("Users");
var tabledata = document.getElementById("table-body");
user.get().then(function(querySnapshot) {
	var i=1;
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
		var data = doc.data();
		
		var row = tabledata.insertRow();
		row.insertCell().innerHTML = i;
		row.insertCell().innerHTML = data.email;
		row.insertCell().innerHTML = data.name;
		row.insertCell().innerHTML = data.place;
		row.insertCell().innerHTML = data.state;
		row.insertCell().innerHTML = data.district;
		row.insertCell().innerHTML = data.zipcode;
		i++;
    });
});