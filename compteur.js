let count = 0;

document.getElementById("plus").addEventListener("click", function(){count++
  document.getElementById("compteur").innerText = count
  if(count >= 0) {
    document.getElementById("compteur").style.color = "blue"
  }
 
})

document.getElementById("moin").addEventListener("click", function(){count--
  document.getElementById("compteur").innerText = count
    if(count <= 0) {
    document.getElementById("compteur").style.color = "red"
  }
})
document.getElementById("reset").addEventListener("click", function(){
  count = 0
  
  document.getElementById("compteur").innerText = count
  if (count==0) {
    document.getElementById("compteur").style.color ="blue"
  }
})