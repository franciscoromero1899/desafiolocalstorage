document.getElementById("buttonText").addEventListener("click", function () {
    let inputValue = document.getElementById("inputText").value;
    localStorage.setItem("storedData", inputValue);
});