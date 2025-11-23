// PRELOADER
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector('.hey')?.classList.add('popup');
});

// SETTINGS TOGGLE
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle('settingactivate');
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
    document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}

// SOUND TOGGLE
function playpause() {
    if (document.getElementById('switchforsound').checked == false) {
        audio.pause();
    } else {
        audio.play();
    }
}

// VISUAL (LIGHT/DARK) MODE
function visualmode() {
    document.body.classList.toggle('light-mode');
    document.getElementById('labelforsound')?.classList.toggle('invertsoundlabel');

    let toggleClasses = [
        '.about-heading-article', '.aboutHeadingP',
        '.skills-heading-article', '.skillsHeadingP',
        '.projects-heading-article', '.projectsHeadingP',
        '.frontend-dev-heading', '.designing-heading',
        '.languages-heading'
    ];

    toggleClasses.forEach(cls => {
        document.querySelector(cls)?.classList.toggle('heading-article-light');
    });

    let ids = ['html', 'css', 'bootstrap', 'react', 'js', 'ap', 'canva', 'ai', 'c', 'cpp'];
    ids.forEach(id => {
        document.getElementById(id)?.classList.toggle('language-gradient-class');
    });

    document.querySelectorAll('.project-box').forEach(box => {
        box.classList.toggle('language-gradient-class');
    });
}

// MOBILE HAMBURGER MENU
let emptyArea = document.getElementById("emptyarea");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    emptyArea.classList.toggle("blur-class");

    ["burger-bar1", "burger-bar2", "burger-bar3"].forEach(id =>
        document.getElementById(id).classList.toggle("hamburger-animation" + id.slice(-1))
    );
}

function hidemenubyli() {
    document.body.classList.remove("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    emptyArea.classList.remove("blur-class");

    ["burger-bar1", "burger-bar2", "burger-bar3"].forEach(id =>
        document.getElementById(id).classList.remove("hamburger-animation" + id.slice(-1))
    );
}

emptyArea.addEventListener('click', hidemenubyli);

// ACTIVE NAVBAR ON SCROLL
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul a li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul a li');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(section => {
        if (pageYOffset >= section.offsetTop - 500) {
            current = section.id;
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.toggle('activeThismobiletab', li.classList.contains(current));
    });

    navLi.forEach(li => {
        li.classList.toggle('activeThistab', li.classList.contains(current));
    });
});

// BACK TO TOP BUTTON
let mybutton = document.getElementById("backtotopbutton");
window.addEventListener("scroll", () => {
    mybutton.style.display =
        (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
            ? "block" : "none";
});

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// DISABLE RIGHT-CLICK ON IMAGES ONLY
document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") e.preventDefault();
}, false);

// EYE MOVEMENT
let pupilsArr = Array.from(document.getElementsByClassName('pupil'));
let pupilStartPoint = -1;
let pupilRange = 3;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let mouseYEndPoint = window.innerHeight;

window.addEventListener('mousemove', (event) => {
    let fracX = event.clientX / mouseXEndPoint;
    let fracY = event.clientY / mouseYEndPoint;

    let posX = pupilStartPoint + (fracX * pupilRange);
    let posY = pupilStartPoint + (fracY * pupilRange);

    pupilsArr.forEach(p => {
        p.style.transform = `translate(${posX}px, ${posY}px)`;
    });
});

window.addEventListener('resize', () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
});
