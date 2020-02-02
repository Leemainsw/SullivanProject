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

function HomeButtonClick(){
    location.replace("./index.html");
}

