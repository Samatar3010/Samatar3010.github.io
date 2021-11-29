document.getElementById("boutton1").addEventListener("click", function() {
   
        document.getElementById("popup").style.display = "block"
  
})
document.getElementById("boutton2").addEventListener("click", function() {
        document.getElementById("popup").style.display ="none"
}
)
document.getElementById("iconecroix").addEventListener("click", function() {
        document.getElementById("popup").style.display ="none"

}
)
window.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
                document.getElementById("popup").style.display ="none"
        
        }
}
)
