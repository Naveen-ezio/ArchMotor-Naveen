const mainnMenu = document.querySelector(".mainnMenu");
const Openbutton = document.querySelector(".Openbutton");
const closeMenu = document.querySelector(".closeMenu");


Openbutton.addEventListener("click",Show);
closeMenu.addEventListener("click",Close);



function Show(){
  mainnMenu.style.visibility = "visible";
  mainnMenu.style.opacity = "1"
  closeMenu.style.visibility = "visible";
}
function Close(){
  mainnMenu.style.visibility = "hidden";
  mainnMenu.style.opacity = "0"
  closeMenu.style.visibility = "hidden";

}
function change(){
  var dai = document.querySelectorAll("video")[0];
  dai.setAttribute("src","video/video2.mp4");
  
  var play = document.querySelector(".play");
  play.style.visibility = "hidden";

  dai.controls=true;
 }
 
function time(){
  var dai = document.querySelectorAll("video")[0];
  dai.setAttribute("src","video/video3.mp4");
  
  var play = document.querySelector(".play");
  play.style.visibility = "visible";

  dai.controls=false;   
}
