var humbur = document.getElementById("menu-icon");
var close = document.getElementById("close");

humbur.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.add("active");
});

close.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.remove("active");
});


var leftSlider = document.getElementById("left")
var rightSlider = document.getElementById("right")


leftSlider.addEventListener("click",function(){
    document.getElementById("slider-image").style.transform = "translateX(-100%)"
    document.getElementById("slider-image").style.transition = "transform 0.8s ease"

    document.getElementById("slider-image2").style.display = "block";
  document.getElementById("slider-image2").style.position = "absolute";
  document.getElementById("slider-image2").style.left = "100%";
  document.getElementById("slider-image2").style.transition = "transform 0.8s ease";
     setTimeout(function() {
        document.getElementById("slider-image2").style.transform = "translateX(-100%)";
    }, 5);

})
rightSlider.addEventListener("click",function(){
    document.getElementById("slider-image").style.transform = "translateX(100%)"
    document.getElementById("slider-image").style.transition = "transform 0.8s ease"

    document.getElementById("slider-image2").style.display = "block";
  document.getElementById("slider-image2").style.position = "absolute";
  document.getElementById("slider-image2").style.right = "100%";
  document.getElementById("slider-image2").style.transition = "transform 0.8s ease";
     setTimeout(function() {
        document.getElementById("slider-image2").style.transform = "translateX(100%)";
    }, 5);

})

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
