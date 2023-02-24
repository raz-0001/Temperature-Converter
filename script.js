let x=document.getElementById("num");
let y=document.getElementById("unit");

let ans1=document.getElementById("c");
let ans2=document.getElementById("f");
let ans3=document.getElementById("k");

function getans(){
    let num=x.value;
    let unit=y.value;

    if(unit=="c"){
        var cans=num;
        var fans=(((num*9)/5)+32).toFixed(2);
        var kans=(num*1)+273;
    }

    if(unit=="f"){
        var cans=(((num-32)*5)/9).toFixed(2);
        var fans=num;
        var kans=(cans*1)+273;
    }

    if(unit=="k"){
        var cans=(num*1)-273;
        var fans=(((cans-32)*5)/9).toFixed(2);
        var kans=num;
    }

    ans1.innerText=cans;
    ans2.innerText=fans;
    ans3.innerText=kans;
}

function clr(){
    x.value=y.value=ans1.innerText=ans2.innerText=ans3.innerText=0;
}