
function hSwitch(num){
    const menu = document.getElementById('sM');
    const items = document.querySelectorAll('.menIt')
    if(num == 0){
        menu.classList.add('active');
        items.forEach(item => item.classList.add("active"));
    }
    else{
        menu.classList.remove('active');
    }
}

function swicher(kind, rotateNum){
    const container1 = document.getElementById("featContainer");
    const container2 = document.getElementById("ablContainer");
    const container3 = document.getElementById("asetContainer");

    if(kind == 0){
        if(window.innerWidth >= 1024){
            if(rotateNum == 0){
                container1.scrollBy(-420, 0)
            }
            else if(rotateNum == 1){
                container1.scrollBy(420, 0)
            }
            else{}
        }
        else if(window.innerWidth < 1024){
            if(rotateNum == 0){
                container1.scrollBy(-(window.innerWidth*0.93), 0)
            }
            else if(rotateNum == 1){
                container1.scrollBy(window.innerWidth*0.93, 0)
            }
            else{}
        }
    }
    else if(kind == 1){
        if(rotateNum == 0){
            container2.scrollBy(-580, 0)
        }
        else if(rotateNum == 1){
            container2.scrollBy(580, 0)
        }
        else{}
    }
    else if(kind == 2){
        if(rotateNum == 0){
            container3.scrollBy(-400, 0)
        }
        else if(rotateNum == 1){
            container3.scrollBy(400, 0)
        }
    }
}

function switchFaQ(num){
    const Fs = document.querySelectorAll('.question')

    for(var i = 0; i < Fs.length; i++){
        Fs[i].classList.remove("active")
        Fs[num].classList.add("active")
    }
}

function switchData(num){
    const Fs = document.querySelectorAll('.dataItem');

    Fs[num].classList.toggle("active")
}

function land() {
    const tB = document.querySelectorAll('.tBarItem');
    const uI = document.querySelector('.bCont');
    const hBar = document.querySelector('.hHolder');

    tB.forEach(item => item.classList.add("active"));
    uI.classList.add('active')
    hBar.classList.add('active')
}

window.addEventListener('scroll', reveal);
function reveal(){

    var reveals1 = document.querySelectorAll(".reveal1");

    for(var i = 0; i < reveals1.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals1[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealTop < windowheight - revealpoint){
            reveals1[i].classList.add('active');
        }
        else{
            reveals1[i].classList.remove('active');
        }
    }
    var reveals2 = document.querySelectorAll(".reveal2");

    for(var i = 0; i < reveals2.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals2[i].getBoundingClientRect().top;
        var revealpoint = 250;

        if(revealTop < windowheight - revealpoint){
            reveals2[i].classList.add('active');
        }
        else{
            reveals2[i].classList.remove('active');
        }
    }
    var reveals3 = document.querySelectorAll(".reveal3");

    for(var i = 0; i < reveals3.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals3[i].getBoundingClientRect().top;
        var revealpoint = 400;

        if(revealTop < windowheight - revealpoint){
            reveals3[i].classList.add('active');
        }
    }
    var reveals4 = document.querySelectorAll(".reveal4");

    for(var i = 0; i < reveals4.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals4[i].getBoundingClientRect().top;
        var revealpoint = 200;

        if(revealTop < revealpoint){
            reveals4[i].classList.add('active');
        }
    }
};

function switchEvoke(num){
    const items = document.querySelectorAll('.evSec');
    const he = document.querySelectorAll('evHeader');

    if(num == 0){
        items.forEach(item => item.scrollBy(-(window.innerWidth * 0.6), 0));
        he.forEach(item => he.style.paddingLeft = "100%");
    }
    else if(num == 1){
        items.forEach(item => item.scrollBy(window.innerWidth * 0.6, 0));
        he.forEach(item => he.style.paddingLeft = "0%")
    }
    else{}
}
