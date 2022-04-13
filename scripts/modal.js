function galleryOnClick(element) {
  var modal = document.getElementById("modal");
  var imgSrc = $(element).find('img').attr('src');
  var modalImage = document.getElementById("modal-image");
  var image = $(element).find('img');

  modal.style.display = "block";
  modalImage.src = imgSrc;
}

function modalClose(element) {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}