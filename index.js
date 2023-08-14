const changeBtn = document.getElementById("change-btn")

changeBtn.addEventListener("click", () => {
    const pickedColor= document.getElementById("color-picker").value
    
    document.getElementById("color-container").style.backgroundColor = pickedColor
})

