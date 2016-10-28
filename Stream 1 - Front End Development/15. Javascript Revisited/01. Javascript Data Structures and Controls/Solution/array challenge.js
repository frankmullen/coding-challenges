var profile = "I am a web developer developing in html css and javascript";
var stops = ["i","am","a","and"]; //words to be removed from profile

var words = profile.split(" ");
console.log(words);
console.log(stops);
var newArray = [];

for (var i=0; i<words.length; i++) {
	if (stops.indexOf(words[i]) < 0) {
		newArray.push(words[i]);
	}
}
console.log(newArray);