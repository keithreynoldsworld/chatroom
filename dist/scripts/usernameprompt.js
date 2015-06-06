$(document).ready(function() {
matthew = {};
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
		console.log(typeof name);
		$('span').append(name);
		matthew.nombre = name;
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


function apple(){console.log(matthew.nombre);$.get('https://cat-chat-1.herokuapp.com/messages', function(z)
		{	yell = z[z.length-1].message; 
        	talky();
        	for(var p = 0;p<z.length;p++){$('#displayWindow').append(z[p].user + ":" + z[p].message + "<br/>");
    		}
        	$('#displayWindow').scrollTop($('#displayWindow')[0].scrollHeight);
        });
}
		
	apple();
	
var banana = "house";

$('#fred').click(fruit);
function fruit(event){
	event.preventDefault();
	console.log($('#messageBox').val());
	$.post('https://cat-chat-1.herokuapp.com/messages', 
		{message: $('#messageBox').val(), user: matthew.nombre, chatroom: "The Living Room"}, apple);
		 $('#messageBox').val('');
};
	
function keith(){
	$.get('https://cat-chat-1.herokuapp.com/stats', function(data){ 
		var mpc = data.mostPopularChatroom.name;
		var ttu = data.topTenUsers;
		var rau = data.recentlyActiveUsers;


		$('#stats').append("<div class='stats'>Most Popular Chatroom</div><br/>"+mpc+
						"<br/><br/><div class='stats'>Top Ten Users</div><br/>");

		for(var m=0;m<ttu.length;m++){
		$('#stats').append(ttu[m].user+"<br/>");					 
		}	

		$('#stats').append("<br/>Recently Active Users<br/><br/>");

		for(var i=0;i<rau.length;i++){
		$('#stats').append(rau[i]+"<br/>");
		}

	});

};


keith();




var yell= "i hate you so much"
function talky(){
	var text = yell;
	text = encodeURIComponent(text);
	var url = "https://translate.google.com/translate_tts?ie=UTF-&&q=" + text + "&tl=en";
	$('audio').attr('src',url).get(0).play();
}
talky();





}); //very end