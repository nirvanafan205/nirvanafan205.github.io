//selecting classes
const displayedImage = document.querySelector(".pic");
const thumbBar = document.querySelector(".thumb-bar");
const overlay = document.querySelector(".overlay");

//declaring array of image filenames

const images = [
  "MagicGiant.jpg",
  `OlMelvoney.jpg`,
  `RiseAgainst.jpg`,
  `SantaMonica.jpg`,
  `SystemofaDown.jpg`,
];

const alts = {
  "MagicGiant.jpg": "Magic Giant Band",
  "OlMelvoney.jpg": "Park",
  "RiseAgainst.jpg": "Rise Against Band",
  "SantaMonica.jpg": "Beach",
  "SystemofaDown.jpg": "Syste of a Down",
};

//looping through images

for (const image of images) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `IMGS/${image}`);
  newImage.setAttribute("alt", alts[image]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

//updated
