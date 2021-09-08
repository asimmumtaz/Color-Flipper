const changeColorButton = document.querySelector("#changeColor");
const colorName = document.querySelector("#colorName");

changeColorButton.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = color;
  changeColorButton.style.backgroundColor = color;
  colorName.innerHTML = color;
});
