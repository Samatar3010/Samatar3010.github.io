let navitems = document.querySelectorAll(".navbar p")
let contents = document.querySelectorAll(".content div")


for (i=0; i <navitems.length; i++) {
    navitems[i].addEventListener("click", function(event){
        for (i=0; i<navitems.length; i++) {
            navitems[i].classList.remove("active")
        }
        for (i=o; i <contents.length; i++) {
            contents[i].style.display ="none"
        }
        event.target.classList.add("active")
        document.getElementById(event.target.id+"content").style.display="flex"
  
    
    
})
}
