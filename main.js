const navBtn = document.getElementById('nav__btn');
const icon = navBtn.querySelector('i');
const headerNav = document.getElementById('header__nav');

navBtn.addEventListener('click', () => {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-x');
  headerNav.classList.toggle('max-md:hidden');
});

