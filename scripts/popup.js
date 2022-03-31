const images = [...document.querySelectorAll('.image-container')];

// Popup

const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = dodcument.querySelector('.right-arrow');

let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = './Assets/Placeholders/Jess_photo_${i+1}.png';
    largeImage.src = path;
    imageName.innerHTML = path;
    index = i;
}

closeButton.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.legnth - 1){
        updateImage(index + 1);
    }
})