const move = document.getElementById("move");

let initialLoad = true;
document.body.onpointermove = e => {
    const { clientX, clientY } = e;

    if (initialLoad) {
        move.style.left = clientX + 'px';
        move.style.top = clientY + 'px';
        initialLoad = false;
    }

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 1000, fill: "forwards"})

}
addEventListener("click", (e) => {
    move.classList.add('unblurred');

    setTimeout(() => { move.classList.remove('unblurred'); }, "500");
});


const names = ['Christina Agront', 'Sebastien Belime', 'Jacqui Calder', 'Patrick Calmet', 'Teryce Cox', 'Matthew Evans', 'Danielle George', 'Cristina Gil', 'Elizabeth Hernandez', 'Valerie Malbaurn', 'Harry Mussotte', 'Tate Ridenour', 'Mackenzie Snyder']
const studentName = document.getElementById('student-name');
const studentNameLine = document.getElementById('student-name-line');
const studentsHeader = document.getElementById('students__header');
function updateName(nth) {

    if (studentNameLine.style.opacity == '') {
        studentNameLine.style.opacity = '1';
        studentsHeader.style.top = '0';
        studentNameLine.style.transform = 'translateY(0)';
    }
    // studentName.classList.add('invisible');
    // const div = document.querySelector(`.students__headshot:nth-child(${nth})`);
    studentName.innerHTML = names[nth-1];
    setTimeout(() => {
        
        // studentName.classList.remove('invisible');
    }, "100");
}


function scrollDistance() {
    return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
}

const sections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar');
const navbarLinksHeight = document.getElementById('navbar__links').getBoundingClientRect().height;
const bodyHeight = document.querySelector('body').getBoundingClientRect().height;
onscroll = e => {
    // let i = 0;
    // while ([...sections][i].getBoundingClientRect().top - navbarLinksHeight < 1) {
    //     i++;
    // }
    // i -= 2;
    // console.log(i);

    if (scrollDistance() > 0) { navbar.classList.remove('invisible'); } else { navbar.classList.add('invisible'); }
    // move.style.opacity = 1 - ((scrollDistance() + window.innerHeight) / bodyHeight);

    // if (i == 1) {
    //     [...navbar.children].forEach(div => {
    //         div.classList.add('navbar__blue');
    //     });
    // } else {
    //     [...navbar.children].forEach(div => {
    //         div.classList.remove('navbar__blue');
    //     });
    // }

    // if (i == 2) {
    //     [...navbar.children].forEach(div => {
    //         div.classList.add('navbar__red');
    //     });
    // } else {
    //     [...navbar.children].forEach(div => {
    //         div.classList.remove('navbar__red');
    //     });
    // }

    // if (i == 3) {
    //     [...navbar.children].forEach(div => {
    //         div.classList.add('navbar__tan');
    //     });
    // } else {
    //     [...navbar.children].forEach(div => {
    //         div.classList.remove('navbar__tan');
    //     });
    // }
}
