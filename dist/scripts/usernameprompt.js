$(document).ready(function() {


matthew = {};
swal ({ 
	title: "Welcome to Cat Chat!",   
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
		
// var yell = "";
// yell = z[z.length-1].message; 
//     talky();
//03:04::03. AM


function apple1(){$.get('https://cat-chat-1.herokuapp.com/chatrooms/The_Living_Room', function(z){	
	console.log(z);
	$('#displayWindow1').html('');
	
	for(var p = 0;p<z.length;p++){
		var currentTime = z[p].created_at;
  		var currentHours = currentTime.slice(11,13);
  		var currentMinutes = currentTime.slice(14,16);
  		var currentSeconds = currentTime.slice(17,19);
  		var currentMonth = currentTime.slice(5,7);
  		var currentYear = currentTime.slice(0,4);
  		var currentDay = currentTime.slice(8,10);
  		var currentTimeString = currentMonth + "/" + currentDay + "/" + currentYear + " " + currentHours + ":" + currentMinutes + ":" + currentSeconds;
  		console.log(currentTimeString);
		$('#displayWindow1').append(currentTimeString + " " + z[p].user + ": " + z[p].message + "<br/>");
   	}
   	$('#displayWindow1').emoticonize();
   	keith();
    $('#displayWindow1').scrollTop($('#displayWindow1')[0].scrollHeight);
	});
}
		
	apple1();
function apple2(){$.get('https://cat-chat-1.herokuapp.com/chatrooms/The_Tree', function(z){	
	$('#displayWindow2').html('');
	for(var p = 0;p<z.length;p++){$('#displayWindow2').append(z[p].user + ": " + z[p].message + "<br/>");
   	}
   	keith();
   	$('#displayWindow2').emoticonize();
    $('#displayWindow2').scrollTop($('#displayWindow2')[0].scrollHeight);
	});
}
		
	apple2();
function apple3(){$.get('https://cat-chat-1.herokuapp.com/chatrooms/The_Litter_Box', function(z){	
	$('#displayWindow3').html('');
    for(var p = 0;p<z.length;p++){$('#displayWindow3').append(z[p].user + ": " + z[p].message + "<br/>");
   	}
   	$('#displayWindow3').emoticonize();
   	keith();
    $('#displayWindow3').scrollTop($('#displayWindow3')[0].scrollHeight);
	});
}
		
	apple3();	

$('#fred1').click(fruit1);
function fruit1(event){
	event.preventDefault();
	console.log($('#messageBox1').val());
	$.post('https://cat-chat-1.herokuapp.com/messages', 
		{message: $('#messageBox1').val(), user: matthew.nombre, chatroom: "The Living Room"}, apple1);
		 $('#messageBox1').val('');
};

$('#fred2').click(fruit2);
function fruit2(event){
	event.preventDefault();
	console.log($('#messageBox2').val());
	$.post('https://cat-chat-1.herokuapp.com/messages', 
		{message: $('#messageBox2').val(), user: matthew.nombre, chatroom: "The Tree"}, apple2);
		 $('#messageBox2').val('');
};

$('#fred3').click(fruit3);
function fruit3(event){
	event.preventDefault();
	console.log($('#messageBox3').val());
	$.post('https://cat-chat-1.herokuapp.com/messages', 
		{message: $('#messageBox3').val(), user: matthew.nombre, chatroom: "The Litter Box"}, apple3);
		 $('#messageBox3').val('');
};	

function keith(){
	$.get('https://cat-chat-1.herokuapp.com/stats', function(data){ 
		var mpc = data.mostPopularChatroom.name;
		var ttu = data.topTenUsers;
		var rau = data.recentlyActiveUsers;

		$('#stats1').html("");
		$('#stats1').append("<h6 class='statsTitle'>Most Popular Chatroom</h6>"+mpc+"<br/><h6 class='statsTitle'>Top Ten Users</h6>");
		for(var m=0;m<ttu.length;m++){$('#stats1').append(ttu[m].user+"<br/>");}	
		$('#stats1').append("<h6 class='statsTitle'>Recently Active Users</h6>");
		for(var i=0;i<rau.length;i++){$('#stats1').append(rau[i]+"<br/>");}

		$('#stats2').html("");
		$('#stats2').append("<h6 class='statsTitle'>Most Popular Chatroom</h6>"+mpc+"<br/><h6 class='statsTitle'>Top Ten Users</h6>");
		for(var m=0;m<ttu.length;m++){$('#stats2').append(ttu[m].user+"<br/>");}	
		$('#stats2').append("<h6 class='statsTitle'>Recently Active Users</h6>");
		for(var i=0;i<rau.length;i++){$('#stats2').append(rau[i]+"<br/>");}

		$('#stats3').html("");
		$('#stats3').append("<h6 class='statsTitle'>Most Popular Chatroom</h6>"+mpc+"<br/><h6 class='statsTitle'>Top Ten Users</h6>");
		for(var m=0;m<ttu.length;m++){$('#stats3').append(ttu[m].user+"<br/>");}	
		$('#stats3').append("<h6 class='statsTitle'>Recently Active Users</h6>");
		for(var i=0;i<rau.length;i++){$('#stats3').append(rau[i]+"<br/>");}
	});

	
};




		// $('#stats2').append("<h6 class='statsTitle'>Most Popular Chatroom</h6>"+mpc+
		// 				"<br/><h6 class='statsTitle'>Top Ten Users</h6>");

		// for(var m=0;m<ttu.length;m++){
		// $('#stats2').append(ttu[m].user+"<br/>");					 
		// }	

		// $('#stats2').append("<h6 class='statsTitle'>Recently Active Users</h6>");

		// for(var i=0;i<rau.length;i++){
		// $('#stats2').append(rau[i]+"<br/>");
		// }


		// $('#stats3').append("<h6 class='statsTitle'>Most Popular Chatroom</h6>"+mpc+
		// 				"<br/><h6 class='statsTitle'>Top Ten Users</h6>");

		// for(var m=0;m<ttu.length;m++){
		// $('#stats3').append(ttu[m].user+"<br/>");					 
		// }	

		// $('#stats3').append("<h6 class='statsTitle'>Recently Active Users</h6>");

		// for(var i=0;i<rau.length;i++){
		// $('#stats3').append(rau[i]+"<br/>");
		// }


var yell= "i hate you so much"
function talky(){
	var text = yell;
	text = encodeURIComponent(text);
	var url = "https://translate.google.com/translate_tts?ie=UTF-&&q=" + text + "&tl=en";
	$('audio').attr('src',url).get(0).play();
}




$("#chatOne").click(function(){
    $("#chat1").show();
    $("#chat2").hide();
    $("#chat3").hide();
    $('#displayWindow1').scrollTop($('#displayWindow1')[0].scrollHeight);
    $('#chatOne').css("background","gray");
    $('#chatTwo').css("background","black");
    $('#chatThree').css("background","black");
});

$("#chatTwo").click(function() {
	$("#chat1").hide();
	$("#chat3").hide();
	$("#chat2").show();
	$('#displayWindow2').scrollTop($('#displayWindow2')[0].scrollHeight);
	$('#chatOne').css("background","black");
    $('#chatTwo').css("background","gray");
    $('#chatThree').css("background","black");
});

$("#chatThree").click(function() {
	$("#chat1").hide();
	$("#chat2").hide();
	$("#chat3").show();
	$('#displayWindow3').scrollTop($('#displayWindow3')[0].scrollHeight);
	$('#chatOne').css("background","black");
    $('#chatTwo').css("background","black");
    $('#chatThree').css("background","gray");
});






}); //very end

