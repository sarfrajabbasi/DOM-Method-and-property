// window.parent property:---
console.log(window.parent)

const parentDocument = window.parent.document;
console.log(parentDocument);
const parentheading = parentDocument.getElementById("heading");
 console.log(parentheading);

  
const para = document.getElementById('para');
 para.textContent = para.textContent + parentheading.textContent