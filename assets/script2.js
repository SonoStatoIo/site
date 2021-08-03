const toggleButton = document.getElementsByClassName('toggle-button')[0]
const link = document.getElementsByClassName("link")[0]

toggleButton.addEventListener('click', () =>{
    link.classList.toggle("active")
})