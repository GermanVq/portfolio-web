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

const btnStwitch = document.querySelector('#switch');

btnStwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnStwitch.classList.toggle('active');
});