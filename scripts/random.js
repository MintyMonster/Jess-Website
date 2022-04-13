function carouselOnClick(link, element){
    if($(element).attr('data-pos') == 0){
        window.location = link;
    }
}