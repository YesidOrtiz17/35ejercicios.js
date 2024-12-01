const colorSelect = document.querySelector("#colorSelect");

colorSelect.addEventListener("change", function() {
    document.body.style.backgroundColor = colorSelect.value;
});