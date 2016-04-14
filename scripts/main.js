
var iceCream = "chocolate";

function like(){
	if (iceCream !== "vanilla"){
		console.log("vanilla")
	}else{
		console.log("chocolate it is");
	}
}

var myImages = document.querySelector('img');

myImages.onclick = function(){
	var mySrc = myImages.getAttribute('src');
	if(mySrc === "images/firefox-icon.png"){
		myImages.setAttribute('src',"images/image1.jpg")
	}else{
		myImages.setAttribute('src', "images/firefox-icon.png")
	}
}