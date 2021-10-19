document.getElementById("upper-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value =
        text.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    document.querySelector("textarea").value =
        text.toLowerCase();
});


