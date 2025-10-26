
var humbur = document.getElementById("menu-icon");
var close = document.getElementById("close");

humbur.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.add("active");
});

close.addEventListener("click", function(){
    document.querySelector(".side-navlinks").classList.remove("active");
});



var productContainer = document.getElementById("product-container")
var divList = productContainer.querySelectorAll("div")
var searchBox = document.getElementById("searchBox")

searchBox.addEventListener("keyup", function(){
    var enteredText = event.target.value.toUpperCase()
    for (count=0; count< divList.length; count++){
         if (divList[count].textContent.toUpperCase().indexOf(enteredText)<0){
            divList[count].style.display = "none"
        }
        else{
            divList[count].style.display="block"
        }

    }
})

var checkbox = document.getElementsByName("checkbox")

var selectedFilters = []

for (count=0;count<checkbox.length;count++){
    checkbox[count].addEventListener("click",function(){
        if (event.target.checked){
            selectedFilters.push(event.target.id.toUpperCase())
        }
        else{
           var index = selectedFilters.indexOf(event.target.id.toUpperCase())
           selectedFilters.splice(index, 1)
        }

        for(count=0;count<divList.length;count++){
            // var filteroptins = divList[count].textContent.toUpperCase()
             if (selectedFilters==0){
            divList[count].style.display = "block"
            continue
        }

        var show = false
        for ( i = 0; i < divList.length; i++) {
            var filteredText = divList[i].textContent.toUpperCase()

            if (selectedFilters.length === 0) {
                divList[i].style.display = "block"
                continue
            }

            var show = false
            for (var j = 0; j < selectedFilters.length; j++) {
                if (filteredText.indexOf(selectedFilters[j]) >= 0) {
                    show = true
                    break
                }
            }

            divList[i].style.display = show ? "block" : "none"
        }


    }
        
    })
}