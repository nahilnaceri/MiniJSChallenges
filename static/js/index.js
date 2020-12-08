// challenge 1 : Your Age in Days


var calcButton = document.getElementById("calc");

calcButton.addEventListener("click", ()=> {
    var birthYear  = document.getElementById("age");
    var ageInDayss = (2020-birthYear.value) * 365;
    var li = document.createElement('li');
    li.innerHTML = `If you are born on ${birthYear.value} then You are ${ageInDayss} old in days`; 
    li.classList.add('list-group-item');
    
    document.getElementsByClassName('list-group')[0].appendChild(li);
    birthYear.value = "";
    console.log(ageInDayss);
});

function resetValue() {
    var birthYear  = document.getElementById("age");
    birthYear.value = "";
    var agesList = document.getElementById("list-mate");
    agesList.innerHTML = "";

    
}

document.querySelector("#generator").addEventListener("click",()=>{
    var img = document.createElement("img");
    var randInt = Math.floor(Math.random() * 100);
    img.setAttribute("src",`https://picsum.photos/300/300?random=${randInt}`);
    img.classList.add("challenge2__image");
    document.getElementsByClassName('challenge2__flex-box')[0].prepend(img);
});


var myButtonRock = document.getElementById("rock");
var myButtonPaper = document.getElementById("paper");
var myButtonsis = document.getElementById("sis");

myButtonRock.addEventListener("click",()=>{
    document.querySelector("#player-hand").classList.replace(document.querySelector("#player-hand").classList[1],"fa-hand-rock");
    let result = switchComputerHand("rock");
    document.getElementById("result").innerHTML = "You "+result;

})
myButtonPaper.addEventListener("click",()=>{
    document.querySelector("#player-hand").classList.replace(document.querySelector("#player-hand").classList[1],"fa-hand-paper");
    let result = switchComputerHand("paper");
    document.getElementById("result").innerHTML = "You "+result;
})
myButtonsis.addEventListener("click",()=>{
    document.querySelector("#player-hand").classList.replace(document.querySelector("#player-hand").classList[1],"fa-hand-scissors");
    let result = switchComputerHand("sis");
    document.getElementById("result").innerHTML = "You "+result;
})

function switchComputerHand(s) {
    var random = Math.floor(Math.random() * 3);
    let myArr = ["rock","sis","paper"];
    if(myArr[random] === "rock") {
        document.querySelector("#comp-hand").classList.replace(document.querySelector("#comp-hand").classList[1],"fa-hand-rock");
        if(s === "rock") {
            return "tie";
        }else if(s === "paper") {
            return "win";
        }else{
            return "lost";
        }
    }
    else if(myArr[random] === "sis"){
        document.querySelector("#comp-hand").classList.replace(document.querySelector("#comp-hand").classList[1],"fa-hand-scissors");
        if(s === "rock") {
            return "win";
        }else if(s === "paper") {
            return "lost";
        }else{
            return "tie";
        }
    }else {
        document.querySelector("#comp-hand").classList.replace(document.querySelector("#comp-hand").classList[1],"fa-hand-paper");
        if(s === "rock") {
            return "lost";
        }else if(s === "paper") {
            return "tie";
        }else{
            return "win";
        }
    }
}



