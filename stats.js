$(document).ready(function(){

var data = {

			mostPopularChatroom : "The Living Room",
			topTenUsers: ["keith","matthew","christen"],
			recentlyActiveUsers: ["keith","matthew","christen"]

			};

// $.get('http://rubyurl/stats', 

function keith(){

	var mpc = data.mostPopularChatroom;
	var ttu = data.topTenUsers;
	var rau = data.recentlyActiveUsers;


	$('#stats').append("<div class='stats'>Most Popular Chatroom</div><br/>"+mpc+
						"<br/><br/><div class='stats'>Top Ten Users</div><br/>");

	for(var m=0;m<ttu.length;m++){
		$('#stats').append(ttu[m]+"<br/>");					 
	}	

	$('#stats').append("<br/>Recently Active Users<br/><br/>");

	for(var i=0;i<rau.length;i++){
		$('#stats').append(rau[i]+"<br/>");
	}


};

keith();

$.get('https://the-living-room.herokuapp.com/', function(z){console.log(z);});

});