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
		row.insertCell().innerHTML = data.password;
		row.insertCell().innerHTML = data.firstname;
		row.insertCell().innerHTML = data.lastname;
		row.insertCell().innerHTML = data.address;
		row.insertCell().innerHTML = data.city;
		row.insertCell().innerHTML = data.state;
		row.insertCell().innerHTML = data.country;
		row.insertCell().innerHTML = data.phone;
		row.insertCell().innerHTML = data.registration_date;
		i++;
    });
});