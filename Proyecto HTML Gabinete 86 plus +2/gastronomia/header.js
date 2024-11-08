let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

function PlayAudio() {
    var audio = document.getElementById("musica-main");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function girar() {
    var button = document.getElementById("boton");
    if (button.classList.contains("rotate")) {
        button.classList.remove("rotate");
    } else {
        button.classList.add("rotate");
    }
}
