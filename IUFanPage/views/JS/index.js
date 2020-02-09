let clickchk = 0;

function MenuButtonClick(){ 
    clickchk++;
    let a=document.getElementsByClassName("MenuBar");
    for (var i = 0; i < a.length; i++) 
        a[i].style.visibility="visible";

    if(clickchk%2==0) {
        for (var i = 0; i < a.length; i++) 
        a[i].style.visibility="hidden";
    }
}

var imgArray=new Array(); 
imgArray[0]="./IMG/MainBackgroundIMG1.png"; 
imgArray[1]="./IMG/MainBackgroundIMG5.png";
imgArray[2]="./IMG/MainBackgroundIMG3.png";
imgArray[3]="./IMG/MainBackgroundIMG4.jpg";

let i = 0;

setInterval(function()
{
    let bg = document.getElementById("MBGIMG1");
    if (i == 0) {
        console.log("실화냐1");
        bg.src = imgArray[1];
        i=1;
    }else if(i == 1){
        console.log("실화냐2");
        bg.src = imgArray[2];
        i=2;
    }else if(i == 2){
        console.log("실화냐3");
        bg.src = imgArray[3];
        i=3;
    }else if(i == 3){
        console.log("실화냐3");
        bg.src = imgArray[0];
        i=0;
    }

},4000);
