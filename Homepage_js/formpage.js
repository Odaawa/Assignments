const button = document.querySelector('button');

button.onclick =function(){
 	var username = document.case.name;
 	var useryear = document.case.year;
 	var usermail = document.case.email;
 	var usercontact = document.case.contact;

 	if (username.value == ""){
 		window.alert("Enter valid name!");
 	}
 	if (useryear.value == "" || useryear.value < 1 || useryear.value > 4){
 		window.alert("Enter valid year!");
 	}
 	//variable_name.includes('testString') checks if testString is found within the specified variable and returns a boolean value(true or false)
 	if (usermail.value == ""  || usermail.value.includes('@') == false || usermail.value.includes('.com') == false){
 		window.alert("Enter valid e-mail!");
 	}
 	if (usercontact.value == ""){
 		window.alert("Enter valid contact!");
 	}
 	



 	let Submit = alert('Thanks for signing up!');
 	
 }

 