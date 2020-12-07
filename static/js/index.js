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


