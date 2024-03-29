const colorchange = () =>{
    let navcolor1 = document.getElementById('nav-item1')
    let navcolor2 = document.getElementById('nav-item2')
    let navcolor3 = document.getElementById('nav-item3')
    let navcolor4 = document.getElementById('nav-item4')
    let navcolor5 = document.getElementById('nav-item5')

    let sectiontop1 = document.getElementById('home').getBoundingClientRect().top;
    let sectiontop2 = document.getElementById('new').getBoundingClientRect().top;
    let sectiontop3 = document.getElementById('about').getBoundingClientRect().top;
    let sectiontop4 = document.getElementById('favorite').getBoundingClientRect().top;
    let sectiontop5 = document.getElementById('visit').getBoundingClientRect().top;

    sectiontop1 <= 0 && sectiontop2 > 55 ? navcolor1.classList.add('active-link')
                        :navcolor1.classList.remove('active-link')

    sectiontop2 <= 54 && sectiontop3 > 20 ? navcolor2.classList.add('active-link')
                        :navcolor2.classList.remove('active-link')

    sectiontop3 <= 20 && sectiontop4 > 25 ? navcolor3.classList.add('active-link')
                        :navcolor3.classList.remove('active-link')

    sectiontop4 <= 25 && sectiontop5 > 100 ? navcolor4.classList.add('active-link')
                        :navcolor4.classList.remove('active-link')

    sectiontop5 <= 100 && sectiontop5 <80 ? navcolor5.classList.add('active-link')
                        :navcolor5.classList.remove('active-link')
    
            
}
window.addEventListener('scroll', colorchange)