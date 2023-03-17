let menu=document.querySelector("menu-icon");
let navbar=document.querySelector(".navbar");
console.log(menu)
if(menu==null){
menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});
}
Window.onscroll = ()=>{
    navbar.classList.remove("active");

};
