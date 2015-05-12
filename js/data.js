
 
	var clicked = "empty";
	

	var	alert_title = "";
	var	txt = "";
	var	alert_button_text = "";
	var	alert_button_text1 = "";
	var	url = "";
	var	backgroundImage = "url(images/oops.png)";


$(function(){

  $(".button1").click(function(){
		clicked = "button1";
		
		backgroundImage = "url(images/reward1.png)";
		alert_button_text = "Want Next";
		alert_button_text1 = "Save";
		url = "http://google.com";
		console.log(clicked);
   }); 


   $(".button2").click(function(){
		clicked = "button2";
		
		backgroundImage = "url(images/oops.png)";
		alert_button_text = "Try Again";
		alert_button_text1 = "Save";
		url = "http://yahoo.com";
		console.log(clicked);
        
    }); 

   $(".button3").click(function(){
		clicked = "button3";
		
		backgroundImage = "url(images/oops.png)";
		alert_button_text = "Try Again";
		alert_button_text1 = "Save";
		url = "http://yahoo.com";
		console.log(clicked);
        
    }); 
						 
						
	


 
			





if(document.getElementById) {
	window.alert = function() {
		createCustomAlert();
	}
}

function createCustomAlert() {
	console.log(arguments)
	d = document;

	if(d.getElementById("modalContainer")) return;

	mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
	mObj.id = "modalContainer";
	mObj.style.height = d.documentElement.scrollHeight + "px";
	mObj.style.backgroundImage = backgroundImage;
	
	
	alertObj = mObj.appendChild(d.createElement("div"));
	alertObj.id = "alertBox";
	if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
	alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
	alertObj.style.visiblity="visible";

	h1 = alertObj.appendChild(d.createElement("img"));
	h1.appendChild(d.createTextNode(alert_title));

	msg = alertObj.appendChild(d.createElement("img"));
	//msg.appendChild(d.createTextNode(txt));
	msg.innerHTML = txt;

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn";
	btn.appendChild(d.createTextNode(alert_button_text));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert(url);return false; }

	btn = alertObj.appendChild(d.createElement("a"));
	btn.id = "closeBtn1";
	btn.appendChild(d.createTextNode(alert_button_text1));
	btn.href = "#";
	btn.focus();
	btn.onclick = function() { removeCustomAlert(url);return false; }

	alertObj.style.display = "block";
	
}

function removeCustomAlert(url) {
	document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
	window.open(url,"_self");
}
function ful(){
alert('Alert this pages');
}



$(document).ready(function(){
    $("#test").click(function(e){
        e.preventDefault();
        $('body').scrollLeft(5000);
    });
});








 
			  
			
}); 


