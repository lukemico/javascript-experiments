
// Display the current day and time in a specific format

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

// Explanations:

// Declaring a JavaScript date : In JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. You can declare a date in the following ways :

// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
// The getDay() method is used to get the day of the week for the specified date according to local time, where 0 represents Sunday. The value returned by getDay() is an integer corresponding to the day of the week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.

// The getHours() method is used to get the hour for a given date, according to local time. The value returned by getHours() is an integer between 0 and 23.

// The getMinutes() method is used to get the minutes in the specified date according to local time. The value returned by getMinutes() is an integer between 0 and 59.

// The getSeconds() method is used to get the seconds in the specified date according to local time. The value returned by getSeconds() is an integer between 0 and 59.

// AM and PM : AM stands for 'ante meridiem', which means 'before noon' in Latin, while PM stands for 'post meridiem', which means 'after noon' in Latin.
// 12-Hour Periods : Nowadays most clocks are 12-hour clocks â€“ they divide the 24 hours in a day into two 12-hour periods. 
// Ante meridiem: Before noon - Between midnight (0:00) & noon (12:00)
// Post meridiem: After noon Between noon (12:00) & midnight (0:00)









// Rotate a string from left to right

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}


// Explanation:

// document.getElementById(id) : Returns a reference to the element by its ID; the ID is a string which can be used to identify the element; it can be established using the id attribute in HTML, or from script.
// Parameters : id is a case-sensitive string representing the unique ID of the element being sought.

// element.childNodes[0] will produce the same result as the HTML content of the first child node.

// text.length: The length property represents the length of a string. It returns the number of characters units in the string.

