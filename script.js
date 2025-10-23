const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
  sideMenu.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.left = '-250px';
});