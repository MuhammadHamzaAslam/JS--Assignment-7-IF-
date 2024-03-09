var cityName = prompt ("Enter Your City","Karachi")
// var name1 = "Karachi"
if ('Karachi' == cityName){
    alert("Welcome To city of lights")
}
else if ("Multan" == cityName){
    alert("Welcome to city of Siants")
}   
else(
    alert("Enter First Letter Capital or Correct City Name")
)
var gender = prompt ("Enter Your Gender","Male")
if("Male" == gender){
    alert("Welcome Sir!")
}
else if ("Female" == gender){
    alert("Welcome Ma'am!")
}
else(
    alert("Enter First Letter Capital or Correct Gender")
)

var signal = prompt ("Enter Traffic Signal Color Name To see Its Function","Red")
if("Red" == signal){
    alert("Must Stop")
}
else if("Yellow" == signal){
    alert("Ready To Move")
}
else if("Green" == signal){
    alert("Move Now")
}
else(
    alert("Enter First Letter Capital or Write Correct Color Name")
)

var fuel = prompt("Remaining Fuel In Your car","1 Liter")
if(fuel <= "0.50 "){
    alert("Plz Refill Fuel In Car")
}
else(
    alert("No Need To Refill")
)

var a = 4;
if (++a === 5){
console.log("given condition for variable a is true");
}
else(
    console.log("False")
)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
else(
    console.log("False")
)
var c = 12;
if (c++ === 13){
    console.log("condition 1 is true");
}
else(
    console.log("False")
)
if (c === 13){
    console.log("condition 2 is true");
}
else(
    console.log("False")
)
if (++c < 14){
    console.log("condition 3 is true");
}
else(
    console.log("False")
)
if(c === 14){
    console.log("condition 4 is true");
}
else(
    console.log("False")
)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
console.log("The cost equals");
}
else(
    console.log("Not Equal")
)
if (true){
    console.log("True")
}
if ("False"){
    console.log("False");
}
if("car" < "cat"){
    console.log("car is smaller than cat");
}

var total = prompt ("Enter Total Marks","300")
var obtained = prompt ("Enter Obtained Marks","250") 

document.write("<h2>Total Marks: " + total + "</h2>");
document.write("<h2>Obtained Marks: " + obtained + "</h2>");
var percentage = obtained/total*100+"%"
document.write("<h2>"+ "Percentage:" +percentage +"</h2>");
if(percentage >= "80%" ){
    document.write("<h2>Grade:"+ "A+" +"</h2>")
    document.write("<h2>Remarks: "+ "Excellent" +"</h2>")
}
else if(percentage >= "70%"){
    document.write("<h2>Grade:"+ "A" +"</h2>")
    document.write("<h2>Remarks: "+ "Good" +"</h2>")
}
else if(percentage >= "60%"){
    document.write("<h2>Grade:"+ "B" +"</h2>")
    document.write("<h2>Remarks: "+ "You Need To Be Improve" +"</h2>")
}
else if(percentage < "60%"){
    document.write("<h2>Grade:"+ "Fail" +"</h2>")
    document.write("<h2>Remarks: "+ "Sorry" +"</h2>")
}

var guess = prompt ("Guess My Favourite Number (Hint:1-10)")
var num11 = 4
if (guess == num11){
    alert('" Yeah! Correct Answer "');
}
else(
    alert('“ Close enough to the correct answer ”')
)

var num = prompt ("Enter a Number")
if(num % 3 == 0){
    alert("It is divisible by 3")
}
else(
    alert("It is not divisible by 3")
)

var even = prompt ("Check Its Even or Odd")
if(even % 2 == 0){
    alert("Its Even Number")
}
else(
    alert("Its Odd Number")
)

var temperature = prompt ("Enter Temperture");
if (temperature > 40){
    alert("It is Too hot Outside")
}
else if (temperature >= 30){
    alert("The Weather Today Is Normal")
}
else if (temperature >= 20){
    alert("Today Weather is Cool")
}
else if (temperature >= 10){
    alert("OMG! Today Weather Is so Cool")
}
else if (temperature < 10){
    alert("Very Cold Outside")
}


var firstNumber = +prompt ("Enter a First Number")
var operation = prompt ("Enter Operation (+,-,*,/)")
var secNumber = +prompt ("Enter Second Number")

if (operation == "+"){
    alert("The Addition is " + (firstNumber + secNumber))
}
else if (operation == "-"){
    alert("The Subtraction is " + firstNumber - secNumber)
}
else if (operation == "*"){
    alert("The Multiplication is " + firstNumber * secNumber)
}
else if (operation == "/"){
    alert("The Division is " + firstNumber / secNumber)
}
else(
    alert("Enter correct operation or Number")
)