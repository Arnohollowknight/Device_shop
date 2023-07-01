function seachActive() {
  const seachActiveLine = document.getElementById("seach-form-line");
  const seachActiveButton = document.getElementById("seach-form-button");
  seachActiveLine.style.display = "inline-block";
  seachActiveButton.style.display = "inline-block";
}
function slideActive1() {
  const x = document.getElementById("slide-1");
  const y = document.getElementById("slide-2");
  const z = document.getElementById("slide-3");
  x.style.display = "grid";
  y.style.display = "none";
  z.style.display = "none";
}
function slideActive2() {
  const x = document.getElementById("slide-1");
  const y = document.getElementById("slide-2");
  const z = document.getElementById("slide-3");
  y.style.display = "grid";
  x.style.display = "none";
  z.style.display = "none";
}
function slideActive3() {
  const x = document.getElementById("slide-1");
  const y = document.getElementById("slide-2");
  const z = document.getElementById("slide-3");
  z.style.display = "grid";
  y.style.display = "none";
  x.style.display = "none";
}
function infoSlideActive1() {
  const x = document.getElementById("right-side1");
  const y = document.getElementById("right-side2");
  const z = document.getElementById("right-side3");
  x.style.display = "block";
  y.style.display = "none";
  z.style.display = "none";
}
function infoSlideActive2() {
  const x = document.getElementById("right-side1");
  const y = document.getElementById("right-side2");
  const z = document.getElementById("right-side3");
  y.style.display = "block";
  x.style.display = "none";
  z.style.display = "none";
}
function infoSlideActive3() {
  const x = document.getElementById("right-side1");
  const y = document.getElementById("right-side2");
  const z = document.getElementById("right-side3");
  z.style.display = "block";
  y.style.display = "none";
  x.style.display = "none";
}
function showMap(){
  const x = document.getElementById("full-map");
  x.style.display = "block";
}
function closeMap(){
  const x = document.getElementById("full-map");
  x.style.display = "none";
}
function openFeedbackForm(){
  const x = document.getElementById("feedback-form-container");
  x.style.display = "block";
}
function closeFeedbackForm(){
  const x = document.getElementById("feedback-form-container");
  x.style.display = "none";
}
function closeSeach(){
  const seachActiveLine = document.getElementById("seach-form-line");
  const seachActiveButton = document.getElementById("seach-form-button");
  seachActiveLine.style.display = "none";
  seachActiveButton.style.display = "none";
}