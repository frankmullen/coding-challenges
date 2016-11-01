//sunday is 0
 
function wotDayIsIt(callback){
  
  var day = (new Date().getDay());
  callback(day);
}
 
var dayOfWeek = function(day){
    if (day === 0 || day === 6) {
        console.log("it’s the weekend, yippee !");
    }
    
    else {
        console.log("bummer, it’s a work day");
    }    
};
 
wotDayIsIt(dayOfWeek);