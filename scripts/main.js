
var iceCream = "chocolate";

function like(){
	if (iceCream !== "vanilla"){
		console.log("vanilla")
	}else{
		console.log("chocolate it is");
	}
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src')
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/image1.jpg')
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}