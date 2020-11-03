const card = document.getElementById("card") // get the card-element

document.getElementById("get-card").addEventListener("click", function() {
    setStyle()
}) // add eventlistener to button

function setStyle() {
    card.style.display = "flex"
    card.style.backgroundColor = document.getElementById("bg-color").value
    card.style.fontFamily = document.getElementById("font").value
    card.style.fontSize = document.getElementById("font-size").value
    card.innerText = document.getElementById("msg").value // set styling and text value to user inputs
}