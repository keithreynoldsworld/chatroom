$(document).ready(function() {

	// $("#messageBox").click (function signIn() {
	// 	 alert("In order to participate in the chat you must type in a user name:");
	// 	 var textInput = prompt	

	// });

swal ({ 
	title: "Welcome to Number One Chatroom!",   
	text: "Type a username below. Make it good.",   
	type: "input",   
	showCancelButton: true,   
	closeOnConfirm: false,   
	animation: "slide-from-top",   
	inputPlaceholder: "CheetohLord", 
	imageURL: "http://graphics8.nytimes.com/images/2012/10/20/health/20well-cheeto2/20well-cheeto2-tmagArticle.jpg"
	}, 
	function(name){ 
	  	if (name === false) 
		return false;      
		if (name === "") {     
			swal.showInputError("You need to write something!");     
			return false   }
			swal("Well, alright...", "Your amazing username is: " + name, "success"); });
		
//username.name

//   $.post("https://the-living-room.herokuapp.com/login", {
// 		user: "name",
// 		chatroom: "The Living Room",
// 		message: " ", /* username */
// 		} );
	
// });

function apple(){$.get('https://the-living-room.herokuapp.com/messages', function(z)
		{
        	
        	for(var p = 0;p<z.length;p++){$('#displayWindow').append(z[p].user + ":" + z[p].message + "<br/>");
    		}
        	$('#displayWindow').scrollTop($('#displayWindow')[0].scrollHeight);
        });
}
		
	apple();
	






}); //very end