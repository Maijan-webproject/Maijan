



window.addEventListener('scroll', function() {
    var header = document.getElementById('H');
    var headerBack = document.getElementById('navigation');
    var sections = document.querySelectorAll('main');
    var Dbutton1 = document.querySelectorAll('.bSwich1');
    var Dbutton2 = document.querySelectorAll('.bSwich2');
    var cookie = document.getElementById("cookieBanner");

    sections.forEach(function(section) {
        var rect1 = section.getBoundingClientRect();
        if (rect1.top <= 0 && rect1.bottom >= 0) {

            if (section.classList.contains('dark-background')) {
                header.classList.add("dark");
                headerBack.classList.add("dark");
                Dbutton1.forEach(function(Dbutton1){
                    Dbutton1.classList.add("dark");
                });
            } else {
                header.classList.remove("dark");
                headerBack.classList.remove("dark");
                Dbutton1.forEach(function(Dbutton1){
                    Dbutton1.classList.remove("dark");
                });
            }
        }
    });
    sections.forEach(function(section) {
        var rect2 = section.getBoundingClientRect();
        if (rect2.top <= window.innerHeight) {
            if (section.classList.contains('dark-background')) {
                cookie.classList.add("dark");
                Dbutton2.forEach(function(Dbutton2){
                    Dbutton2.classList.add("dark");
                });
            }
            else{
                cookie.classList.remove("dark");
                Dbutton2.forEach(function(Dbutton2){
                    Dbutton2.classList.remove("dark");
                });
            }
        }
    });
});

window.addEventListener('scroll', reveal);
function reveal(){

    if(window.innerWidth > 1024){
        
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
            var revealpoint = 100;

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
            var revealpoint = 200;

            if(revealTop < windowheight - revealpoint){
                reveals3[i].classList.add('active');
            }
            else{
                reveals3[i].classList.remove('active');
            }
        }
        var reveals3 = document.querySelectorAll(".reveal4");

        for(var i = 0; i < reveals3.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals3[i].getBoundingClientRect().top;
            var revealpoint = 0;

            if(revealTop < revealpoint){
                reveals3[i].classList.add('active');
            }
        }
    }
};

let featNum = 0;
function swichFeature(num){
    const f1 = document.getElementById("feat1");
    const f2 = document.getElementById("feat2");
    const f3 = document.getElementById("feat3");
    const f4 = document.getElementById("feat4");
    const f5 = document.getElementById("feat5");
    const f6 = document.getElementById("feat6");
    const f7 = document.getElementById("feat7");

    let Fs = [f1, f2, f3, f4, f5, f6, f7];

    if(num == 2){
        if(featNum < Fs.length - 1){
            featNum++
        }
        else{}
    }
    else if(num == 1){
        if(featNum > 0){
            featNum--
        }
        else{}
    }

    for(var i = 0; i < featNum; i++){
        Fs[i].classList.remove("active");
        
        if(window.innerWidth > 767){
            Fs[i].style.marginLeft = "-550px";
        }
        else{
            Fs[i].style.marginLeft = "-400px";
        }
    }

    Fs[featNum].classList.add("active");
    Fs[featNum].style.marginLeft = "0px";

    for(var i = featNum + 1; i < Fs.length; i++){
        Fs[i].classList.remove("active");
        Fs[i].style.marginLeft = "0px";
    }
}

function stopVideo(){
    const button = document.getElementById("stopButton");
    const video = document.getElementById("openVideo");

    if(button.classList.contains("go")){
        button.classList.remove("go");
        button.classList.add("stop");

        video.play();
    }
    else if(button.classList.contains("stop")){
        button.classList.remove("stop");
        button.classList.add("go");

        video.pause();
    }
    else{}
}

function highText(num){
    const i1 = document.getElementById("info1");
    const i2 = document.getElementById("info2");
    const i3 = document.getElementById("info3");
    const i4 = document.getElementById("info4");
    const i5 = document.getElementById("info5");
    const i6 = document.getElementById("info6");
    const i7 = document.getElementById("info7");
    const i8 = document.getElementById("info8");
    const i9 = document.getElementById("info9");
    const i10 = document.getElementById("info10");
    const i11 = document.getElementById("info11");
    const i12 = document.getElementById("info12");

    let Is = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12];

    for(var i = 0; i < Is.length; i++){
        Is[i].classList.remove('active');
        
        Is[num].classList.add('active');
    }
}

function filter(num){
    const Cprojects = document.querySelectorAll(".cp");
    const NCprojects = document.querySelectorAll(".ncp");

    if(num == 1){
        for(var i = 0; i < Cprojects.length; i++){
            Cprojects[i].classList.add("active");
        }
        for(var i = 0; i < NCprojects.length; i++){
            NCprojects[i].classList.remove("active");
        }
    }
    else if(num == 2){
        for(var i = 0; i < Cprojects.length; i++){
            Cprojects[i].classList.remove("active");
        }
        for(var i = 0; i < NCprojects.length; i++){
            NCprojects[i].classList.add("active");
        }
    }
    else if(num == 3){
        for(var i = 0; i < Cprojects.length; i++){
            Cprojects[i].classList.add("active");
        }
        for(var i = 0; i < NCprojects.length; i++){
            NCprojects[i].classList.add("active");
        }
    }
    else{}
}

// select video element
var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();
 
// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
    vid.pause();
};

// refresh video frames on interval for smoother playback
setInterval(function(){
    vid.currentTime = window.pageYOffset/100;
}, 80);