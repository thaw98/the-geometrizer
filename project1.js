function calDiameter() {
  let radius = Number(document.querySelector("#radius").value);
  let diameter = 2 * radius;
  document.querySelector("#answer").innerHTML =
    "The answer of the diameter is " + diameter + ".";
  document.querySelector("#radius").value = "";
  console.log(area);
}
function calCircumference() {
  let radius = Number(document.querySelector("#radius").value);
  let circumference = 2 * 3.14 * radius;
  document.querySelector("#answer").innerHTML =
    "The answer of the circumference is " + circumference.toFixed(2) + ".";
  document.querySelector("#radius").value = "";
  console.log(circumference);
}
function calArea() {
  let radius = Number(document.querySelector("#radius").value);
  let area = 3.14 * radius ** 2;
  document.querySelector("#answer").innerHTML =
    "The answer of the Area is " + area.toFixed(2) + ".";
  document.querySelector("#radius").value = "";
  console.log(area);
}
