//Create values for parameters

var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";

var entry = document.getElementById("entry")
var generate = document.getElementById("generate");
var display = document.getElementById("display");


//runs program on click

generate.addEventListener("click", result)

function result()

{
    
    display.value = password(entry.value, values)

;
}

//console log that prints password

console.log(password(entry,values));

//function that runs the random generator

function password(length,characters)
{

var pwd = "";

for(var i = 0; i < length;i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));

}
     return pwd;
}
