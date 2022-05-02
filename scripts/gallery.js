/*
    Developer: Cameron Liddell A.K.A MintyMonster 
    Github: https://github.com/MintyMonster
    Instagram: https://www.instagram.com/cameronliddelldev/
    Contact: cameronliddelldev@gmail.com

*/

const galleryElementOne = document.getElementById("image-column-one");
const galleryElementTwo = document.getElementById("image-column-two");
let i = 1;

var fashion = 0;
var liveMusic = 0;
var portraits = 0;
var film = 0;
var video = 0;

function toElem(element, i, name, location, year, path) {
  element.innerHTML += `
                <div class="image-container id="container-${i}" onclick="galleryOnClick(this)">
                <div class="image-information">
                  <p class="band-name"><i class="fa-solid fa-camera"></i> ${name}</p>
                  <p class="image-location"><i class="fa-solid fa-location-pin"></i> ${location}</p>
                  <p class="image-date"><i class="fa-solid fa-calendar"></i> ${year}</p>
                </div>
                <img src="${path}" class="gallery-image" alt="${name}">
              </div>
                `;
}

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "/json/gallery.json",
  "method": "GET"
};
$.ajax(settings).done((response) => {
  console.log(response);
  response.forEach((element) => {

    if (element.Description === "Fashion") {
      fashion++;
    } else if (element.Description === "Live-Music") {
      liveMusic++;
    } else if (element.Description === "Portraits") {
      portraits++;
    } else if (element.Description === "Film") {
      film++;
    } else if (element.Description === "Video") {
      video++;
    }

    if (i <= 26) {
      if (i % 2) {
        toElem(galleryElementOne, i, element.Name, element.Location, element.Year, element.Path);

      } else {
        toElem(galleryElementTwo, i, element.Name, element.Location, element.Year, element.Path);
      }
    } else if(i == 27){
      toElem(galleryElementTwo, i, element.Name, element.Location, element.Year, element.Path);
    }

    i++;
  })
})

function addImages() {
  document.getElementById("fashion-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + fashion.toString() + " images";
  document.getElementById("live-music-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + liveMusic.toString() + " images";
  document.getElementById("portraits-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + portraits.toString() + " images";
  document.getElementById("film-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + film.toString() + " images";
}

setTimeout(addImages, 1000);
