// Sélecteurs
    let citation = document.getElementById("citation")
    let citation_new = document.getElementById("citation_new")


/*window afin qu'une citation apparait lorsque la page est actualiser */ 
window.addEventListener("load",() => {
    fetch("https://api.kanye.rest/")
    .then(Response => Response.json())
    .then(data => {
        citation.innerText = data.quote
    })
})


citation_new.addEventListener("click", () => {
    fetch("https://api.kanye.rest/")
    .then(Response => Response.json()) 
    .then(data => {
        citation.innerText = data.quote
    })
})

