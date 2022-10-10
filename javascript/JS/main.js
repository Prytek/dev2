console.log("hello world");
let x=1;
var y=3;
console.log(x+y);
let c=5;
const k=10;
console.log(k-c)
let w=9;
w=10;
console.log(w);
const s=10;

// s=78 quand il y a uen erreur la suite n'ai pas excuté une constante initialisé ne peut pas etre réasigner 

console.log(s);
x=y;
console.log(x);
console.log(w/2.5);
console.log(w/y);
console.log(w*y);
console.log(w %y);

// stutures conditionnelles if= si w est egale à k alors j'écris bonjour (pseudo code)

if(k==w){console.log("bonjour")};

//if(...condition...){...expréssion} bloc de condition
// == -> condition d'égalité
// === -> condition strict d'égalité

console.log(55+'55');
let  bonjour="salut";
let bonjour02="les gars";
console.log(bonjour+" "+bonjour02);

// condition non !=

if(c!=x);
console.log(c+"n'est pas égale a x");
let bool = true;
bool = false;
console.log(bool);
console.log(!bool);
if(!bool){console.log("bool est égale à false")};

// else

if(!bool){console.log("bool est égale à false")}else{console.log("bool est n'ai pas égale à false")};

// > ou < 

if(w<c){console.log("w n'est pas inférieur à c")}else{console.log("w est supérieur à c")};
if(k<=w){1}else{2};

//les querie selectors

var titre = document.getElementsByClassName("titre");
console.log(titre);
var secondeTitle = document.getElementById("h2-modif");
console.log(secondeTitle);
secondeTitle.innerHTML = "bonjour";
let paragraph = document.querySelector(".paragraph");
console.log(paragraph);
var parentImage = document.querySelector(".parentimage");
var image = document.createElement("img");
image.setAttribute("src","images/chat01.jpg");
parentImage.appendChild(image);

// fonction 

function Addition(nombreA,nombreB){
    let result = nombreA + nombreB;
    console.log(result);
}

Addition(1000,2000);

function soustraction(nombreA,nombreB){
    let result = nombreA - nombreB;
    return(result);
}
let trueresult = soustraction(50,27);
console.log(trueresult);

function suisJeGrand(taille){
    //verifie la taille, si elle plus grande que 1.70 oui, si il est plus petit 1.70 non

    if(taille >= 170){
        console.log("tu est grand")
    }else{
        console.log("tu est petit")}
}
suisJeGrand(170)

function aiJeUnDivisionSansReste(_div){
    if(div = 200){
        console.log("true")
    }else{
        console.log("false")}
}
aiJeUnDivisionSansReste(125/21)
function aiJeUnDivisionSansReste(nombreA, nombreB){
    let resultat = nombreA % nombreB
      if(resultat > 0){
        console.log("elle a un reste.")
    }else{
        console.log("Elle n'a pas de reste.")
    }
}

// var et let

let mavariable = 10;
mavariable = "poulet";
console.log(mavariable);
//let mavariable = 10
var maNouvelleVariable = 12;
console.log(maNouvelleVariable)
var mavariablevar = "gorge";
var maNouvelleVariable = 15;
console.log(maNouvelleVariable)
function jeTesteMonLet(){
    let test = "joconde";
    var mavariablevar = "jeanpierre";
    if(true){
        console.log(test)
    }
}
jeTesteMonLet()
function jeTesteEncoreMonLet(){
    let test = "leonard devinci";
    console.log(test);
}
jeTesteEncoreMonLet();
console.log(mavariablevar);
function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // c'est une variable différente
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
letTest()
function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // c'est la même variable !
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
  varTest()

  // swift

function testnombre(nbr)
{
    switch(nbr){
        case 0:
            console.log("je suis le nombre 0")
            break;
        case 1:
            console.log("je suis le nombre 1")
            break;
        case 2:
            console.log("je suis le nombre 2")
            break;
        case 3:
            console.log("je suis le nombre 3")
            break;
        default:
            console.log("Je suis strictement superieur à 3")
    }
}

//les tableau

var myfirstarray = [];
var mysecondarray = [1, 2, 3, 4, "banana", 6, 7, 8, 9, 10];
var un = mysecondarray[0]
console.log(1)
console.log(mysecondarray.length);
console.log(mysecondarray[3]+mysecondarray[0])
console.log(mysecondarray[70231])
myfirstarray.push("Jeremy");
console.log(myfirstarray);
myfirstarray.push("Kevin.B");
console.log(myfirstarray);
myfirstarray.pop();
console.log(myfirstarray);
myfirstarray.shift();
console.log(myfirstarray);
console.log(mysecondarray.indexOf(2));
console.log(mysecondarray.indexOf("banana"));
mysecondarray.splice(1,3);
console.log(mysecondarray)
let banane = "une banane"
console.log(banane [5])

// les objet

var voiture = {
    marque: "renault",
    année: "2005",
    puissance: 125,

    afficher: function(){
        console.log("cette voiture est une " + this.marque + ", de l'année " + this.année + ", elle à" + this.puissance + " chevaux.")
    },
}
voiture.afficher();
console.log(voiture.marque);

// les boucles

var iteration = 0;
while(iteration < 7){
    console.log(iteration)
    iteration ++
    //iteration += 1
    //iteration  = iteration +1 
};

// for loop

for (let i =0; i < 12; i++ ){
    console.log(i);
}

for (let j =0; j < mysecondarray.length; j++ ){
    console.log(mysecondarray[j]);
}

let boucleDo = 0;

let iterationBreak = 0;

while(iterationBreak < 80)
{
    console.log(iterationBreak);
    iterationBreak++;
    if( iterationBreak > 47)
    {
        break;
    }
}

function factorielle(nbr){
    var factorielle = 1;
    for( let k=1; k <= nbr; k++){
        factorielle *= k;
    }
    console.log(factorielle);
}

function factor(nbr)
{
    if(nbr === 0)
    {
        return 1;
    }
    return nbr * factor(nbr - 1);
}

console.log(factor(4))

var tableauA = ['Jeannette', 'Alphonse', 'George', 'Ludwig'];
var tableauB = ['Paul', 'Frédéric', 'Jacques', 'Roger'];

function concatTableau(arrayA, arrayB)
{
  if(arrayA.length === arrayB.length)
  {
    for(let index = 0; index < arrayB.length; index++)
    {
      console.log(arrayA[index] + ' ' + arrayB[index])
    }
  }
  else
  {
    console.log("Les tableaux n'ont pas la même taille.")
  }
}
concatTableau(tableauA, tableauB)