const link = document.querySelector('.link');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownIcon = document.querySelector('.dropdown-icon');

dropdown.addEventListener('click',(e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle('active');
  if (dropdownMenu.classList.contains('active')) {
    dropdownIcon.src = 'images/icon-arrow-up.svg';
  }else{
    dropdownIcon.src = 'images/icon-arrow-down.svg';
  }
});
