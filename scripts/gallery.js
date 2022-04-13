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

function addImages() {
  document.getElementById("fashion-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + fashion.toString() + " images";
  document.getElementById("live-music-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + liveMusic.toString() + " images";
  document.getElementById("portraits-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + portraits.toString() + " images";
  document.getElementById("film-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + film.toString() + " images";
  document.getElementById("video-count").innerHTML = '<i class="fa-solid fa-hashtag"></i> ' + video.toString() + " images";
}

setTimeout(addImages, 1000);