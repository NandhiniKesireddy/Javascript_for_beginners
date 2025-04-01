var dateOfbirth = new Date("01/13/1999");

var monthDifference = Date.now() - dateOfbirth.getTime();
var ageDifference = new Date(monthDifference);
var year = ageDifference.getUTCFullYear();
var age = Math.abs(year - 1970);

document.write("Age of the date entered:" +age + "years");