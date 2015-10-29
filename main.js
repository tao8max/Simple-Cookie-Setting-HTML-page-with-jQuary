var passVal="1234";
var userVal="user1";
var firstVisit="";
$(document).ready(function(){

  if (Cookies.get("username")!==userVal){
  	$("form").submit(function(){   
	
		if ($("#username").val() === ""){      
			$('p').text('Your username is blank.\nTry again!');   
			return false; 
	    	} else if ($("#username").val() !== userVal) {    
		  		$('p').text('Your username is incorrect.\nTry again!');     
		  		return false;
			} else if ($("#password").val() === ""){      
		      	$('p').text('Your password is blank.\nTry again!');     
		      	return false;   
        	} else if ($("#password").val() !== passVal) {    
		   		$('p').text('Your password is incorrect.\nTry again!');     
				return false;
	    	} else {
		  	    alert('All Good, '+Cookies.get("username"));
		  	    $("form").hide();
		  	    $('h1').text("Welcome, "+Cookies.get("username"));
		  	    $('#main').html("<h3>Reload the page...</h3>");
				return false;
			}
  	});
   } else {
   		$("form").hide();
		$('h1').text("Welcome, "+Cookies.get("username"));
		$('#main').html('<h3>Your cookie will expire in 2 minutes</h3><img src="cat.jpg"><br><br><br>');
		return false;
   }
});