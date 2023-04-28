var nav = document.getElementById("navnav");
var navlogo = document.getElementById("navnav-logo");
var navitems = document.getElementById("navnav-items");

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    nav.classList.add('fixed-top', 'shadow',);
    navlogo.classList.remove('d-none');
    navlogo.classList.add('ms-5');
    navitems.classList.remove('mx-auto');
  } else {
    nav.classList.remove('fixed-top', 'shadow');
    navlogo.classList.add('d-none');
    navitems.classList.add('mx-auto');
    navlogo.classList.remove('ms-5');
  }
});