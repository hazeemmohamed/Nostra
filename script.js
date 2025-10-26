var humbur = document.getElementById("menu-icon");
var close = document.getElementById("close");

humbur.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.add("active");
});

close.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.remove("active");
});


var wantedImgContainer = document.querySelectorAll(".wanted-img-card");
// var favouriteHeart = wantedImgContainer.querySelectorAll("svg");

for (let count = 0; count < wantedImgContainer.length; count++) {
    let heart = wantedImgContainer[count].querySelector("svg");
    let clicked = false; 

    heart.addEventListener("click", function() {
        if (clicked == false) {
            heart.style.fill = "orange";
            heart.style.stroke = "orange";
        } else {
            heart.style.fill = "transparent";
            heart.style.stroke = "black";
        }
        clicked = !clicked;
    });
}
