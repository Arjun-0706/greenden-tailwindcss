var menu=document.getElementById("menu")
var sidenav=document.getElementById("sidenav")
var sidenavclose=document.getElementById("sidenavclose")
menu.addEventListener("click",function(){
    sidenav.style.right="0%"

})
sidenavclose.addEventListener("click",function(){
    sidenav.style.right="-100%"
    
})