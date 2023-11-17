const form = document.getElementById("form");
const output = document.getElementById("output");

if (form.attachEvent) {
  form.attachEvent("submit", processForm);
} else {
  form.addEventListener("submit", processForm);
}

function processForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const paragraphs = [];
  formData.forEach((value, key) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`${key}: ${value}`));
    paragraphs.push(p);
  });
  output.replaceChildren(...paragraphs);
  return false;
}
