var humbur = document.getElementById("menu-icon");
var close = document.getElementById("close");

humbur.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.add("active");
});

close.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.remove("active");
});
