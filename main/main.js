// For image
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

// For Text
var loadText = function(event) {
	var text = document.getElementById('outputText');
	text.innerText = document.getElementById('pText').value;
};

// Display onclick button
function display(){
    document.getElementById('output').style.display = "inline-block"
    document.getElementById('outputText').style.display = "inline-block"
}