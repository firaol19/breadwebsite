
const animation1 = () =>{
    let reveals1 = document.getElementById('new-img')
    let reveals = document.querySelectorAll('.new-img1')
    let reveals4 = document.getElementById('about-data')
    let reveals5 = document.querySelectorAll('.fav-img')
    let reveals6 = document.querySelectorAll('.fav-img1')
    let reveals7 = document.getElementById('visit-data')
    

    let reveal = document.getElementById("new");
    let reveal2 = document.getElementById("about");
    let reveal3 = document.getElementById("favorite");
    let reveal4 = document.getElementById("visit");


    let revealtop = reveal.getBoundingClientRect().top;
    let revealtop2 = reveal2.getBoundingClientRect().top;
    let revealtop3 = reveal3.getBoundingClientRect().top;
    let revealtop4 = reveal4.getBoundingClientRect().top;

    let  windowheight  = window.innerHeight;
    let  revealpoint = 150;

    revealtop < windowheight - revealpoint? reveals1.classList.add('active1')
                        : reveals1.classList.remove('active1')

    for(var i = 0; i < reveals.length; i++){
        revealtop < windowheight - revealpoint? reveals[i].classList.add('active2')
                        : reveals[i].classList.remove('active2')
    }

    revealtop2 < windowheight - revealpoint? reveals4.classList.add('active5')
                        : reveals4.classList.remove('active5')

    for(var i = 0; i < reveals5.length; i++){
        revealtop3 < windowheight - revealpoint? reveals5[i].classList.add('active6')
                        : reveals5[i].classList.remove('active6')
    }

    for(var i = 0; i < reveals6.length; i++){
        revealtop3 < windowheight - revealpoint? reveals6[i].classList.add('active7')
                        : reveals6[i].classList.remove('active7')
    }

    revealtop4 < windowheight - revealpoint? reveals7.classList.add('active8')
                        : reveals7.classList.remove('active8')
}


window.addEventListener('scroll', animation1)


const animation2 = () =>{
    let reveal1 = document.getElementById("home");
    let revealtop = reveal1.getBoundingClientRect().top;
    let reveals2 = document.getElementById('home-title')

    let reveals3 = document.getElementById('home-img')
    

    revealtop <= 0? reveals2.classList.add('active3')
                        : reveals2.classList.remove('active3')

    revealtop <= 0? reveals3.classList.add('active4')
                        : reveals3.classList.remove('active4')

    
}

window.addEventListener('load', animation2)







