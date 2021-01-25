// SCROLL CLICK LINK //
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id') 
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_list a[href*='+ sectionId + ']').classList.add('active')

        }else {
            document.querySelector('.nav_list a[href*='+ sectionId + ']').classList.remove('active')
        }
    })
}

//  BUTTON SWITCH EVENT CLICK //
const btnStwitch = document.querySelector('#switch');

btnStwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnStwitch.classList.toggle('active');

    // saving the dark mode in localstorage
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

// getting mode 
if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnStwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnStwitch.classList.remove('active');
}


