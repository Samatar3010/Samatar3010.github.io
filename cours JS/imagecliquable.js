let images = document.querySelectorAll("#leftside img")
let main = document.querySelector("#imageMain")
for (let i = 0; i<images.length; i++) {
    images[i].addEventListener("click", function(event)
    {
        main.src = event.target.src
    })
}