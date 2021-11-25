document.getElementById("menusvg").addEventListener("click", function() {
   
    document.getElementById("content").style.display = "block"
})

document.getElementById("fermer").addEventListener("click", function() {
   
    document.getElementById("content").style.display = "none"
})

document.getElementById("iconecroix").addEventListener("click", function() {
   
    document.getElementById("content").style.display = "none"
})
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("content").style.display ="none"

    }
}
)