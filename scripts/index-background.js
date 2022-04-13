const images = [
    "../Assets/Gallery/Live-Music_CANDID_Birmingham_2021_1.jpg",
    "../Assets/Gallery/Live-Music_Jack-Catell_Birmingham_2021_5.jpg",
    "../Assets/Gallery/Live-Music_LA-DHARMA_Birmingham_2021_10.jpg",
    "../Assets/Gallery/Live-Music_LA-DHARMA_Birmingham_2021_6.jpg",
    "../Assets/Gallery/Live-Music_LA-DHARMA_Birmingham_2021_9.jpg",
    "../Assets/Gallery/Live-Music_THE-CLAUSE_Birmingham_2021_10.jpg",
    "../Assets/Gallery/Portraits_THE-CHASERS_Cheltenham_2022_54.png",
    "../Assets/Gallery/Portraits_THE-CHASERS_Cheltenham_2022_60.png"
]

const div = document.getElementById("head-banner");

function changeBackground(){
    const random = Math.floor(Math.random() * images.length);
    $(div).css("background", "url(" + images[random] + ") center center/cover no-repeat");
    console.log(div.id);
    console.log(random);
}

div.addEventListener("load", changeBackground());
