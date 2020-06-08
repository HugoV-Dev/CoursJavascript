var name = "Hugo";  // variable chaîne de caractères
console.log(name);  // affichage dans la console

var nameLength = name.length;
console.log(nameLength);

var x = 10;  // variable entier
var y = 12.1;  // variable décimal

var xStr = x.toString(); // transforme x en chaine de caractères
var xInt = parseInt(xStr); // retransforme x en entier

var yStr = y.toString(); 
var yFloat = parseFloat(yStr); // retransforme y en décimal

console.log(xStr);
console.log(xInt);

console.log(x+y); // affichage dans la console de l'addition des 2 variables

var myString = "Hello world";
var position = myString.indexOf("world");
console.log(position); // affiche la position du mot world dans la chaine de caractères
var myNewString = myString.replace("world","Hugo");
console.log(myNewString);

var string1 = "Hello";
var string2 = "world";
var newString = string1 +" " + string2;
console.log(newString);

var num1 = 10;
var num2 = 15;
var result = num1 * num2;
console.log(result);

var bool = (num1 == 10 && num2 == 11);
console.log(bool);

if(bool == true)
{
    console.log("C'est vrai")
}
else
{
    console.log("C'est faux")
};