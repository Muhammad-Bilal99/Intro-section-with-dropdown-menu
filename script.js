const dropdown = document.querySelector('.dropdownn');
const dropdown2 = document.querySelector('.dropdownn2');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownMenu2 = document.querySelector('.dropdown-menu2');
const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownIcon2 = document.querySelector('.dropdown-icon2');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.ul');
const links = document.querySelector('.nav-links')



  dropdown.addEventListener('click', (e) => {
    dropdownMenu.classList.toggle('active')
    if (dropdownMenu.classList.contains('active')) {
          dropdownIcon.src = 'images/icon-arrow-up.svg';
          }else{
          dropdownIcon.src = 'images/icon-arrow-down.svg';
          };
  })
  dropdown2.addEventListener('click', (e) => {
    dropdownMenu2.classList.toggle('active')
    if (dropdownMenu2.classList.contains('active')) {
          dropdownIcon2.src = 'images/icon-arrow-up.svg';
          }else{
          dropdownIcon2.src = 'images/icon-arrow-down.svg';
          };
  })



hamburger.addEventListener('click', () => {
  links.classList.toggle('mobile_nav');
});





