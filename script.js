const link = document.querySelector('.link');
const dropdown = document.querySelectorAll('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownIcon = document.querySelector('.dropdown-icon');

for (let i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener('click',(e) => {
    e.preventDefault();
    dropdownMenu.classList.toggle('active');
    if (dropdownMenu.classList.contains('active')) {
      dropdownIcon.src = 'images/icon-arrow-up.svg';
    }else{
      dropdownIcon.src = 'images/icon-arrow-down.svg';
    };
  
})
};
// dropdown.addEventListener('click',(e) => {
//   e.preventDefault();
//   dropdownMenu.classList.toggle('active');
//   if (dropdownMenu.classList.contains('active')) {
//     dropdownIcon.src = 'images/icon-arrow-up.svg';
//   }else{
//     dropdownIcon.src = 'images/icon-arrow-down.svg';
//   }
// });



