function handleInput(input) {
    if (input.value.trim() !== "") {
        alert("تم اختراق جهازك بواسطة برق١٢٥");
        document.getElementById("hackImage").style.display = "block";
        input.setAttribute("readonly", true);
        localStorage.setItem(input.id, input.value);
    }
}

window.onload = function() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        let savedValue = localStorage.getItem(input.id);
        if (savedValue) {
            input.value = savedValue;
            input.setAttribute("readonly", true);
        }
    });
}