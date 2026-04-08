var menu=document.getElementById("menu")
var sidenav=document.getElementById("sidenav")
var sidenavclose=document.getElementById("sidenavclose")
menu.addEventListener("click",function(){
    sidenav.style.right="0%"

})
sidenavclose.addEventListener("click",function(){
    sidenav.style.right="-100%"
    
})
var search=document.getElementById("search")
var container=document.getElementById("container")
var content=container.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var entervalue=event.target.value.toUpperCase()
    for(i=0;i<content.length;i++){
        var productname=content[i].querySelector("p")
        if(productname.textContent.toUpperCase().indexOf(entervalue)<0){
            content[i].style.display="none"

        }
        else{
             content[i].style.display="block"
            
        }
    }

})