
var button = document.getElementById("add")
var notes = document.getElementById("notes")
var input = document.getElementById("inp")
var removeNotes = document.getElementById("remove")

notes.innerHTML = localStorage.getItem("AllNotes")

button.onclick = function () {
    if (input.value === "") {
        alert("Please enter a text")
    }else{
        notes.innerHTML = notes.innerHTML + `<h2>${input.value}</h2><hr>`
        input.value = ""
        localStorage.setItem("AllNotes", notes.innerHTML)
    }
    
}

removeNotes.onclick = function () {
    if (notes.innerHTML != "") {
        localStorage.clear()
        alert("Done! reload the page to remove the notes.")
    } else {
        alert("There are no notes to remove !")
    }
    
}