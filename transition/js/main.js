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
    elementdeux.classList.add('tran')
})