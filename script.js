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