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