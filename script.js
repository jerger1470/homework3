//Create values for parameters

var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";

var entry = document.getElementById("entry")
var generate = document.getElementById("generate");
var display = document.getElementById("display");
var copy = document.getElementById("copy");

//runs program on click

generate.addEventListener("click", result)

function result()

{
    
    display.value = password(entry.value, values)

;
}

//console log that prints password

console.log(password(entry,values));

//copy to clip board

function clipboard()
{
var copyText = display;
  copyText.select();
  copyText.setSelectionRange(0, 128)
  document.execCommand("copy");
  alert("Copied to clipboard: " + copyText.value);
    


}
copy.addEventListener("click", clipboard)

//function that runs the random generator

function password(length,characters)
{

var pwd = "";

for(var i = 0; i < length;i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));

}
     return pwd;
}
