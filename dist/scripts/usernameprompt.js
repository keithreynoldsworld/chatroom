$(document).ready(function() {

//prompt for username upon page load
swal ({ 
	title: "Welcome to the Cat Chat experience.",   
	text: "Type a cat-related username below:",   
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
		



//populate window with user's input on submit button click
	$("#messageBox").keydown(function(event) {
		if(event.keyCode==13) {
			$(".btn").trigger("click");
		}
	

	$('.btn').click(fruit);

		function fruit(event){

	        event.preventDefault();

	        console.log($('#messageBox').val());

	        $.post('https://cat-chat-1.herokuapp.com/messages', 
	        	{message: $('#messageBox').val(), 
	        	user: name, chatroom: "The Living Room"}, apple);

		

		$('#messageBox').val(" ");
		}



	function apple(){$.get('https://cat-chat-1.herokuapp.com/messages', 
		function(z)
			{
	        	for(var p = 0;p<z.length;p++)
	        		{$('#displayWindow').append(z[p].user + ":" + z[p].message + "<br/>");
	    		}
	        	$('#displayWindow').scrollTop($('#displayWindow')[0].scrollHeight);
	        });
	}
			
		apple();
	




  });

}); //very end