var itemArr;
var itemBox;
var choose = 1;

window.onload = function onload(){
    var backBtn = document.getElementsByClassName("backBtn")[0];
    backBtn.onmouseout = function(){
        backBtn.style.animation = "shine 2.5s linear alternate infinite";
        console.log(1);
    }
    
    backBtn.onmouseover = function(){
        backBtn.style.animation = "none";
        console.log(2);
    }
    itemBox = document.getElementsByClassName("main-box")[0];
    itemArr = document.getElementsByClassName("item-box");
    console.log(itemArr);
    console.log(itemBox);
    console.log(itemBox.children);

}


function leftClick(){
    console.log(choose);
    itemArr[choose].classList.remove("main");
    itemArr[choose].classList.add("edge");
    choose = ((choose - 1 % 3)+3) % 3;
    console.log(choose);
    itemArr[choose].classList.remove("edge");
    itemArr[choose].classList.add("main");
    // let lastChoose = ((choose - 1 % 3)+3)%3;
    // let nextChoose = ((choose + 1 % 3)+3)%3;
    // let temp = itemArr[lastChoose];
    // itemArr[lastChoose] = itemArr[choose];
    // itemArr[choose] = itemArr[nextChoose];
    // itemArr[nextChoose] = temp;
    console.log(itemArr);
}

function rightClick(){
    console.log(choose);
    itemArr[choose].classList.remove("main");
    itemArr[choose].classList.add("edge");
    choose = ((choose + 1 % 3)+3) % 3;
    console.log(choose);
    itemArr[choose].classList.remove("edge");
    itemArr[choose].classList.add("main");
}

function backAnimation(){
    window.location.href = "index.html"
}

document.getElementsByClassName("reel")[0].onmousedown = function(){
    window.location.href = "museum1.html"
}