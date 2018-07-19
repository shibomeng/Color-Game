var colorCollection = [];
var target;

function colorRandom() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
	return rgb;
}

function addCollection() {
	for (var i = 0; i < 6; i++) {
		colorCollection.push(colorRandom());
	}
}

function initColor() {
	var temp = "s";
	var square;
	for(var i = 1; i < 7; i++) {
		temp = temp + i;
		// console.log(temp);
		square = document.getElementById(temp);
		square.style.backgroundColor = colorCollection[i - 1];
		temp = "s";
	}
	target = Math.floor((Math.random() * 6) + 1);
	temp = temp + target
	var color = document.getElementById(temp).style.backgroundColor;
	// console.log(square.style.backgroundColor);
	var title = document.getElementById("rgb");
	title.textContent = color;
	var str = "\"" + title.textContent + "\"";
	str.toUpperCase();
	console.log(str);
}

function main() {
	addCollection();
	initColor();
}

main();