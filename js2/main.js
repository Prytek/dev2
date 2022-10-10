// ET et OU 

let x = 10 
let y = 9

// OU ( OR )

if( x == 10 || y == 5)
{
    console.log(true)
}
else
{
    console.log(false)
}

// ET ( AND ) 

if( x == 10 && y == 5)
{
    console.log(true)
}
else
{
    console.log(false)
}

// ou exclusif ( XOR )

if( x == 10 ^ y == 5)
{
    console.log(true)
}
else
{
    console.log(false)
}

// NAND

if( x != 10 && y!= 9)
{
    console.log(true)
}
else
{
    console.log(false)
}

// Bonnes Pratiques

//A chaque changement de bloc {} il est indispensable de faire un TAB ( indentation).

//si une fonction retourne quelques chose elle doit commencer par :

//si elle un BOOL par is... has...

// Le nom d'une fonction doit toujours refleter ce quelle fait.

// Une fonction doit faire une seule chose à la fois.

// Null et Undefined

let nl = null
console.log(nl)

let element = document.getElementById('paul');
console.log(element);

// undefined

let k;
console.log(k);

if( k === undefined)
{
    k = 12;
}
console.log(k)

let button = document.getElementsByClassName('exempleA');



//function myclick()
//{
   // console.log("J'ai cliqué sur le bouton.")
//}

//button[0].addEventListener('click', myclick)

//button[0].addEventListener('click', function(){
    //console.log("J'ai cliqué sur le bouton")
//})

button[0].addEventListener('click', function(event){
    console.log("J'ai cliqué sur le bouton")
    console.log(event)
})

let inputText = document.getElementById('exempleB')

inputText.addEventListener('input', function(){
    console.log('ok')
})

// ajax

var buttonImage = document.getElementById('send')
var image = document.querySelector('img')

buttonImage.addEventListener("click", function(){
   // var ajax = new XMLHttpRequest();
   // ajax.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
   // ajax.responseType = 'json';
   // ajax.send();
   // ajax.onload = function(){
      //  console.log(this.response[0].url)
       // image.src = (this.response[0].url)
   // }
//})

fetch('https://api.thecatapi.com/v1/images/search')
.then(response => image.src = response.url)
})

// fonction fléchées 

function add(nbrA, nbrB){
    console.log(nbrA + nbrB)
}

const arrowAdd = (nbrA, nbrB) => {
    console.log(nbrA + nbrB)
}
add(5, 6);
arrowAdd(5, 6)

var addArray = [1, 2, 4, 5]
var AddArrayTwo = [5, 7, 12, 4]

const mapArray = addArray.map(x => x+1)

console.log(mapArray)

const mapArrayTwo = addArray.map((x, i) => x + AddArrayTwo[i]);

console.log(mapArray)

AddArrayTwo .forEach( x => console.log(x))

const zeroArray =[5, 8, 2, 3]

function hasZero(element){
    if(element == 4){
        return true
    }
    else
    {
        return false
    }
}
