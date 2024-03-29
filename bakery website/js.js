function showMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.style.right = "0"
}


function coverMenu() {
    let navMenu = document.getElementById("nav-menu");
    navMenu.style.right = "-100%"
}


/*################# blur header #############*/


const blurHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)



/*######################## show scrollup ###############*/

const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')

    this.scrollY >= 350? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollup)


/*######################### active scroll ################*/

