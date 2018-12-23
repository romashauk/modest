var buttons = document.querySelectorAll(".slide")
var benner = document.querySelector(".benner");
var background = ["img/back2.jpg","img/header.png","img/back.jpg"];


buttons[2].onclick= function(){
    buttons[1].classList.remove("cycle");
    buttons[0].classList.remove("cycle");
    buttons[2].classList.add("cycle");
    benner.style.backgroundImage = "url(" +background[2]+")";
}

buttons[0].onclick= function(){
    buttons[1].classList.remove("cycle");
    buttons[2].classList.remove("cycle");
    buttons[0].classList.add("cycle");
    benner.style.backgroundImage = "url(" +background[0]+")";
}

buttons[1].onclick= function(){
    buttons[0].classList.remove("cycle");
    buttons[2].classList.remove("cycle");
    buttons[1].classList.add("cycle");
    benner.style.backgroundImage = "url(" +background[1]+")";

}