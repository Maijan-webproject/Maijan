


function fold(num){
    const f1 = document.getElementById("f1");
    const b1 = document.getElementById("fold1");
    const f2 = document.getElementById("f2");
    const b2 = document.getElementById("fold2");

    if(num == 1){
        if(!f1.classList.contains("active")){
            f1.classList.add("active");
            b1.classList.add("active");
        }
        else if(f1.classList.contains("active")){
            f1.classList.remove("active");
            b1.classList.remove("active");
        }
    }
    else{}
    if(num == 2){
        if(!f2.classList.contains("active")){
            f2.classList.add("active");
            b2.classList.add("active");
        }
        else if(f2.classList.contains("active")){
            f2.classList.remove("active");
            b2.classList.remove("active");
        }
    }
    
}

function Change(){
    const c1 = document.getElementById("c1");
    const c2 = document.getElementById("c2");
    const c3 = document.getElementById("c3");
    const c4 = document.getElementById("c4");
    const c5 = document.getElementById("c5");
    const c6 = document.getElementById("c6");

    const d1 = document.getElementById("d1");
    const d2 = document.getElementById("d2");
    const d3 = document.getElementById("d3");
    const d4 = document.getElementById("d4");
    const d5 = document.getElementById("d5");
    const d6 = document.getElementById("d6");

    const i6 = document.getElementById("mI6");

    if(c1.checked){
        d1.innerHTML = "ja";
    }
    if(c2.checked){
        d2.innerHTML = "ja";
    }
    if(c3.checked){
        d3.innerHTML = "ja";
    }
    if(c4.checked){
        d4.innerHTML = "ja";
    }
    if(c5.checked){
        d5.innerHTML = "ja";
    }
    if(c6.checked){
        d6.innerHTML = "ja";
        i6.style.display = "flex";
    }
    if(!c1.checked){
        d1.innerHTML = "nein";
    }
    if(!c2.checked){
        d2.innerHTML = "nein";
    }
    if(!c3.checked){
        d3.innerHTML = "nein";
    }
    if(!c4.checked){
        d4.innerHTML = "nein";
    }
    if(!c5.checked){
        d5.innerHTML = "nein";
    }
    if(!c6.checked){
        d6.innerHTML = "nein";
        i6.style.display = "none";
    }
    else{}
}

