// water = document.getElementById('water');
// const add8oz = document.getElementById('add8oz');
// const add16oz = document.getElementById('add16oz');
// const add64oz = document.getElementById('add64oz');
// add8oz.addEventListener('click', ("btn") => { water.value += 8;  va() });
// add16oz.addEventListener('click', ("btn") => { water.value += 16;  va() });
// add64oz.addEventListener('click', ("btn") => { water.value += 64; va() });
//
// va()
//
// function va() {
// document.getElementById('val').innerHTML = water.value;
// }

var elem = document.getElementById("myBar");
var width = 0;

function myFunction() {
  if (width >=104){
    document.getElementById("myProgress").value = "0";
    width = 0;
    elem.innerHTML = width * 1;
  }
  else{
    width+=8;
      document.getElementById("myProgress").value += 8;
      elem.innerHTML = width * 1;
  }
}
function anotherFunction(){
  if (width >=104){
    document.getElementById("myProgress").value = "0";
    width = 0;
    elem.innerHTML = width * 1;
  }
  else{
    width+=16;
    document.getElementById("myProgress").value += 16;
    elem.innerHTML = width * 1;
  }
}
function moreFunction(){
  if (width >=104){
    document.getElementById("myProgress").value = "0";
    width = 0;
    elem.innerHTML = width * 1;
  }
  else{
    width+=32;
    document.getElementById("myProgress").value += 32;
    elem.innerHTML = width * 1;
  }
}
function reset() {
  width=0;
document.getElementById("myProgress").value = "0";
elem.innerHTML = width * 1;
}
