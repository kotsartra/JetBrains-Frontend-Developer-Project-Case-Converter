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


document.getElementById("proper-case").addEventListener("click", function() {
  let text = document.querySelector("textarea").value;

  document.querySelector("textarea").value =
  text.replace(/(^|\s)\S/g, function(firstChar) {
    return firstChar.toUpperCase()
  })
});


document.getElementById("sentence-case").addEventListener("click", function() {
let text = document.querySelector("textarea").value;

document.querySelector("textarea").value =
text.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
});


document.getElementById("save-text-file").addEventListener("click", function () {

let text = document.querySelector("textarea").value;
let element = document.createElement('a');

element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', "text.txt");
element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);

});