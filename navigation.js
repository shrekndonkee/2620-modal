const hb = document.querySelector('#hamburger');
const pn = document.querySelector('#primaryNav');
hb.addEventListener('click', () => {
  pn.classList.toggle('hidden');
});