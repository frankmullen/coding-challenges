console.log("37" - 7);
console.log("37" + 7);

var x = 30;         
var y = '30';         
console.log(x === y);

console.log('con' + 'cat' + 'en' + "ate");

//string functions

//add two strings
var string3 = "Code " + "institute";
console.log(string3);
var profile = "Sean at the Code Institute";
console.log(profile.toLowerCase());
console.log(profile.toUpperCase());
//split a string into an array of words
var words = profile.split(" ");
console.log(words);
console.log(profile.replace("Code ","Code-"));
//search for a word, return its position in string
console.log(profile.search("Code"));
//extract string at position to end of string
var newProfile = profile.slice(4);
console.log(newProfile);
//extract string at position to new position
var newProfile = profile.slice(12,16);
console.log(newProfile);

var x = 10;
for (var i=0; i < x; i++) {
     console.log("loop value:" + i)
}

var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[1]);

var elem = listOfNumbers[2];         
console.log(elem);  

console.log(listOfNumbers.length) 

var myArray = ['one','two','three','four','five','six'];
 
      for (var num in myArray) {
            console.log(num); //returns the index
            console.log(myArray[num]); //show element
      }
      
var myArray = ['one','two','three','four','five','six'];
myArray.forEach(function(element, index, array) {
                    console.log('element[' + index + '] = ' + element);
                  }); 
                  
myArray.push('seven'); // adds to the end of the array 
console.log(myArray);

myArray.pop(); // removes from the end of array returns that element.
console.log(myArray);

myArray.shift(); //removes first element of array returns that element. 
console.log(myArray);

myArray.unshift(); //add element to front of array returns new length.
console.log(myArray);