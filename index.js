const card = document.getElementById("card")
document.getElementById("get-card").addEventListener("click", function() {
    card.style.display = "block"
    card.style.backgroundColor = document.getElementById("bg-color").value
    card.style.fontFamily = document.getElementById("font").value
    card.style.fontSize = document.getElementById("font-size").value
    card.innerText = document.getElementById("msg").value
})