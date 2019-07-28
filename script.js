const navBarBtn = document.querySelector('.navbar__btn');
const navBarLinks = document.querySelector('.navbar__links');

navBarBtn.addEventListener('click', function() {
    let value = navBarLinks.classList.contains('navbar__collapse');

    if(value){
        navBarLinks.classList.remove('navbar__collapse');
        navBarBtn.classList.remove('change');
    } else {
        navBarLinks.classList.add('navbar__collapse');
        navBarBtn.classList.add('change');
    }
});