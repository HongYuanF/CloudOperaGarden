function start(){
    var bg = document.getElementsByClassName("firstBg")[0];
    bg.style.background = "url(\"../IMG/过渡背景.jpg\") no-repeat";
    bg.style.backgroundSize = "cover";
    document.getElementsByClassName("startBtn")[0].style.display = "none";
    bg.onclick = showText;
    var circleArr = document.getElementsByClassName("circleY");
    circleArr[0].style.display = "flex";
    circleArr[1].style.display = "block";
}

var clickTime = 0;
let textArr ;
function showText(){
    console.log(clickTime);
    textArr = document.getElementsByClassName("text");
    if(clickTime<=4&&clickTime>=1){
        textArr[clickTime-1].style.display = "block";
        textArr[clickTime-1].classList.add("show");
    }else if(clickTime == 5){
        window.location.href = "menu.html";
    }
    clickTime+=1;
}

