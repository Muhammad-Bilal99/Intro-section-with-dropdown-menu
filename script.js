const dropdown = document.querySelector('.dropdownn');
const dropdownMenu = document.getElementsByClassName('dropdown-menu');
const dropdownIcon = document.getElementsByClassName('dropdown-icon');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.ul');


  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('active');
  })

// dropdowns.forEach(dropdown => {
//   dropdown.addEventListener('click', (e) => {
//     e.preventDefault();
//     dropdownMenu.classList.toggle('active');
//     if (dropdownMenu.classList.contains('active')) {
//     dropdownIcon.src = 'images/icon-arrow-up.svg';
//     }else{
//     dropdownIcon.src = 'images/icon-arrow-down.svg';
//     };
//   });
// })


hamburger.addEventListener('click', () => {
  ul.classList.toggle('mobile_nav');
});



