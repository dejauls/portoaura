const texts = [
    "Portofolio Auravia Cinta",
    "Teknik Informatika",
    "Perancangan Web",
    "Database Management",
    "Administrasi & Operasional Keuangan"
];

const text = document.getElementById("changing-text");
const intro = document.getElementById("intro");
const main = document.getElementById("main-content");

let index = 0;

function playSequence(){

    text.textContent = texts[index];

    text.classList.remove("hide");
    text.classList.add("show");

    setTimeout(() => {

        text.classList.remove("show");
        text.classList.add("hide");

        setTimeout(() => {

            index++;

            if(index < texts.length){
                playSequence();
            }else{
                finishIntro();
            }

        },800);

    },1800);
}

function finishIntro(){

    intro.classList.add("intro-finish");

    document.body.style.overflowY = "auto";

    setTimeout(() => {
        main.classList.add("show-main");
    },300);
}

playSequence();