$(document).ready(function() {

	// $("#messageBox").click (function signIn() {
	// 	 alert("In order to participate in the chat you must type in a user name:");
	// 	 var textInput = prompt	

	// });

swal({ 
	title: "Welcome to Number One Chatroom!",   
	text: "Type a username below. Make it good.",   
	type: "input",   
	showCancelButton: true,   
	closeOnConfirm: false,   
	animation: "slide-from-top",   
	inputPlaceholder: "CheetohLord" 
	}, 
	function(inputValue){ 
	  	if (inputValue === false) 
		return false;      
		if (inputValue === "") {     
			swal.showInputError("You need to write something!");     
			return false   }      
			swal("Well, alright...", "Your amazing username is: " + inputValue, "success"); });



});