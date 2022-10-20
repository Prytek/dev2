var btn = document.getElementById('bouton');
var element = document.getElementsByClassName('square')[0];
var elementdeux = document.getElementsByClassName('square')[1];
var bool = 

console.log(element)
btn.addEventListener("click", function(){
    element.classList.add('transformation-size');
})

//element.addEventListener('transitionend', function(){
    //this.classList.remove('transformation-size');
//});

element.ontransitionend = () =>{
    element.classList.remove('transformation-size');
}

var transition = document.getElementById('transition');
var deactivation = document.getElementById('deactivation')

transition.addEventListener("click", function(){
    elementdeux.classList.add('transition')
})

deactivation.addEventListener("click", function(){
    elementdeux.classList.add('deactivation')
})
var titre = document.getElementById('is-click')

titre.addEventListener("click", function(){
    titre.innerHTML='ce titre est clické'
})
var doubleClick = document.getElementById('double-click');
var doubleClickMessage = document.getElementById('double-click-message');

doubleClick.addEventListener("dblclick", function()
{
    doubleClickMessage.innerHTML = " Cest double cliqué."
})

var inputFocus = document.getElementById("inputFocus");

inputFocus.addEventListener('focus', function()
{
    inputFocus.placeholder = "salut"
})

var inputMessage = document.getElementById("input-message");

inputFocus.addEventListener('input', function()
{
    inputMessage.innerHTML = inputFocus.value
})

var inputCheckbox = document.getElementById('input-checkbox');

inputCheckbox.addEventListener('change', function(){
 titre.classList.toggle('orange')
})