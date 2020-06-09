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

// Condition if

speed = 75;
if(speed <= 80)
{
    if(speed <= 50)
    {
        console.log("Tu roules trop doucement");
    }
    else
    {
        console.log("Tu roules à la bonne vitesse");
    }
}
else if(speed <= 100)
{
    console.log("Ralenties tu roules trop vite");
}
else
{
    console.log("Tu roules beaucoup trop vite");
}

// Switch case, comme un if mais avec des cas particuliers

var favoriteColor = "bleu" 
switch(favoriteColor)
{
    case "bleu":
        console.log("C'est bleu");
        break;
    case "rouge":
        console.log("C'est rouge");
        break;
    default:
        console.log("Ce n'est ni bleu ni rouge");
}

var number = 0;
while(number > 0 && number == 3)
{
    console.log(number);
    number++;
} 

// ne fonctionne pas car la confition n'est pas vérifiée (number n'est pas supérieur à 0)
// mais fonctionne avec le do while car 0 est imprimé à l'écran et indenté à 1avant la vérification

do
{
    console.log(number);
    number++;
}
while(number <= 3);
// Le do while est comme un while mais avec un tour gratuit au début, le do est exécuté avant de vérifier la condition du while.

var chaine = "zz"
for(var x = 0; x <= 4; x++)
{
    console.log(chaine);
    chaine += "z";
}

// Fonction 

function multiply(number1, number2)
{
    var resultMultiply = number1 * number2;
    return resultMultiply;
}

var a = 5;
var b = 6;
var result = multiply(a,b);
console.log(result);

// Tableaux

var fruits = ["pomme", "poire", "bannanes", "citrons"];
fruits.push("kiwi"); // ajoute kiwi au tableau
for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

console.log("-----------")

fruits.pop(); // Enlève la dernière valeur du tableau
for(var i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

var slice = fruits.slice(2);
console.log(slice);

var tabDansTab = [[0,1,15],[4,8,2],[12,3,5]];
console.log(tabDansTab[0][0]); // affiche la valeur de l'indice 0 du tableau à l'indice 2.

// Objets 

var dog = {
    name : "Cali",
    couleur : "noire",
    age : "14"
}

for(var property in dog)
{
    console.log(dog[property]);
}

console.log("------------");

/*var car = new Object();

car.name = "A4"
car.type = "4x4";
car.year = "2008";
car.marque = "audi";
color = "noire"
car.bruit = function(number)
{
    while(number > 0)
    {
        console.log("Vroum");
        number--;
    }
};

car.bruit(4);
*/

// Fonction constructeur

function Car(name, type, year, marque, color)
{
    this.name = name;
    this.type = type;
    this.year = year;
    this.marque = marque;
    this.color = color;
    this.completeName = this.marque + " " + this.name;
}

var Audi_A4 = new Car("A4", "Berline", "2014", "Audi", "Noire");
var Peugeot_208 = new Car("208", "Ville", "2018", "Peugeot", "Grise");
console.log(Audi_A4);
console.log(Peugeot_208);