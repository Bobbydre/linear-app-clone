const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');



btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
//  if (html) html.classList.toggle('overflow-hidden', 'open')
});






