var isChoose = false;
var backPos = 0;
var maskPos = 0;
var textPos = 0;
var leftMove = false;
var rightMove = false;
var isMove = false;
const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;
var speed = 0;
var backBox;
var mask;
var text;
var background;
window.onload = function(){
    backBox = document.getElementsByClassName("back-box")[0];
    background = document.getElementsByClassName("background")[0];
    mask = document.getElementsByClassName("mask")[0];
    text = document.getElementsByClassName("text")[0];
    // backBox.onmousedown = function(){
    //     isChoose = true;
    //     console.log("鼠标点击");
    // }
    // backBox.onmouseup = function(){
    //     isChoose = false;
    //     console.log("鼠标松开");
    // }
    // backBox.onmouseout = function(){
    //     isChoose = false;
    // }
    backBox.onmousemove = function(e){
        if(e.clientX/WIDTH>0.95){
            isMove = true;
            rightMove = true;
        }else if(e.clientX/WIDTH<0.17 && e.clientX/WIDTH>0.12){
            isMove = true;
            leftMove =true;
        }else{
            isMove = false;
            rightMove = false;
            leftMove = false;
        }
        console.log(e.clientX/WIDTH);
        console.log(textPos);
    }
}


document.body.parentNode.style.overflowX  = "hidden";
// $("body").parent().css("overflow-y","hidden");

function backMenu(){
    window.location.href = "menu.html"
}
function toHang(){
    window.location.href = "museum1.html"

}
function toFace(){
    window.location.href = "museum.html"
}

function move(speed){
    if(!text){
        if(backPos<=0 && backPos>=-99 ){
            // if(Math.abs(e.movementX) > 30)
            //     e.movementX = 30;
            backPos+=0.05*speed;
            maskPos+=0.04*speed;
            if(backPos<-99 || textPos < -80 ){
                backPos = -99;
                maskPos = -80;

            }
            else if (backPos>0){
                backPos = 0;
                maskPos = 0;
            }
            background.style.left = backPos +"%";
            mask.style.left = maskPos+80 + "%";
       }
    }else{
        if(backPos<=0 && backPos>=-400 ){
            // if(Math.abs(e.movementX) > 30)
            //     e.movementX = 30;
            backPos+=0.05*speed;
            textPos+=0.045*speed;
            maskPos+=0.042*speed;
            if(backPos<-400 || textPos < -360 || maskPos <-337 ){
                backPos = -400;
                textPos = -360;
                maskPos = -337;

            }
            else if (backPos>0){
                backPos = 0;
                maskPos = 0;
                textPos = 0;
            }
            // console.log(pos);
            background.style.left = backPos +"%";
            mask.style.left = maskPos+ 80 + "%";
            text.style.left = textPos + '%';
        } 

    }
}

setInterval(function(){
    if(isMove){
        let speed;
        if(leftMove)
            speed = 10;
        else if(rightMove)
            speed = -10;
        else
            speed = e.movementX;
        move(speed);
    }
}, 1000/60)