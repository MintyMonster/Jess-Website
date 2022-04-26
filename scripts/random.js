/*
    Developer: Cameron Liddell A.K.A MintyMonster 
    Github: https://github.com/MintyMonster
    Instagram: https://www.instagram.com/cameronliddelldev/
    Contact: cameronliddelldev@gmail.com

*/

function carouselOnClick(link, element){
    if($(element).attr('data-pos') == 0){
        window.location = link;
    }
}

function mouseOverSeeAll(element){
    if($(element).attr('data-pos') == 0){
        document.getElementById("see-all-arrow-icon").style.transform = "translate(90%)";
    }
}

function mouseOffSeeAll(element){
    if($(element).attr('data-pos') == 0){
        document.getElementById("see-all-arrow-icon").style.transform = "none";
    }
}