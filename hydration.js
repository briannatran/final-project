function va() {
document.getElementById('val').innerHTML = water.value;
}


water = document.getElementById('water');
const add8oz = document.getElementById('add8oz');
const add16oz = document.getElementById('add16oz');
const add64oz = document.getElementById('add64oz');
add8oz.addEventListener('click', () => { water.value += 8;  va() });
add16oz.addEventListener('click', () => { water.value += 16;  va() });
add64oz.addEventListener('click', () => { water.value += 64; va() });
