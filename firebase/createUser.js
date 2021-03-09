var database = firebase.auth();
var firestore = firebase.firestore();
document.getElementById('add').onclick = function() {
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	
	const promise = database.createUserWithEmailAndPassword(email.value,password.value);
	promise.catch(e => alert(e.message));
	
	firestore.collection('Users').add({
		district: document.getElementById('district').value,
		email: document.getElementById('email').value,
		name: document.getElementById('name').value,
		place: document.getElementById('place').value,
		state: document.getElementById('state').value,
		zipcode: document.getElementById('zipcode').value,
	}).catch(e => alert("Something went wrong. Try again."));
	
	alert("User data added successfully");
	window.location.replace("index.html");
}