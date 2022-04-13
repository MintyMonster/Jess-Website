/*
    Developer: Cameron Liddell A.K.A MintyMonster 
    Github: https://github.com/MintyMonster
    Instagram: https://www.instagram.com/cameronliddelldev/
    Contact: cameronliddelldev@gmail.com

*/

const galleryElementOne = document.getElementById("image-column-one");
const galleryElementTwo = document.getElementById("image-column-two");
let i = 1;


const settings = {
  "async": true,
  "crossDomain": true,
  "url": "/json/live-music.json",
  "method": "GET"
};
$.ajax(settings).done((response) => {
  console.log(response);
  response.forEach((element) => {
    if (i % 2) {
      galleryElementOne.innerHTML += `
              <div class="image-container id="container-${i}" onclick="galleryOnClick(this)">
              <div class="image-information">
                <p class="band-name"><i class="fa-solid fa-volume-low"></i> ${element.Name}</p>
                <p class="image-location"><i class="fa-solid fa-location-pin"></i> ${element.Location}</p>
                <p class="image-date"><i class="fa-solid fa-calendar"></i> ${element.Year}</p>
              </div>
              <img src="${element.Path}" class="gallery-image" alt="${element.Name}">
            </div>
              `;

    } else {
      galleryElementTwo.innerHTML += `
              <div class="image-container" id="container=${i}" onclick="galleryOnClick(this)">
              <div class="image-information">
                <p class="band-name"><i class="fa-solid fa-volume-low"></i> ${element.Name}</p>
                <p class="image-location"><i class="fa-solid fa-location-pin"></i> ${element.Location}</p>
                <p class="image-date"><i class="fa-solid fa-calendar"></i> ${element.Year}</p>
              </div>
              <img src="${element.Path}" class="gallery-image" alt="${element.Name}">
            </div>
              `;
    }
    i++;
  })
})