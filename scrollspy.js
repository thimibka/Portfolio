// document.addEventListener("DOMContentLoaded", function () {
//   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
//     target: ".navbar",
//     offset: 50,
//   });
// });

// let image = document.getElementById("image");
// image.addEventListener(
//   "mouseenter",
//   function (event) {
//     event.target.style.width = "50vw";
//     event.target.style.height = "50vh";

//     image.addEventListener(
//       "mouseleave",
//       function (event) {
//         event.target.style.width = "";
//         event.target.style.height = "";
//       },
//       500
//     );
//   },
//   false
// );

function showImage(index) {
  let image = document.getElementById("image-diplome-" + index);
  if (image) {
    image.style.display = "block";
  }
}

function hideImage(index) {
  let image = document.getElementById("image-diplome-" + index);
  if (image) {
    image.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let ul = document.getElementById("text-diplomes").querySelector("ul");

  for (let i = 1; i <= 6; i++) {
    let li = document.getElementById("diplome-" + i);
    let img = document.createElement("img");
    img.id = "image-diplome-" + i;
    img.className = "diplome-image";
    img.src = "picture/diplomes/image" + i + ".jpg";
    img.alt = "Image " + i;

    li.appendChild(img);
    li.classList.add("diplome-title-container");

  }
});

function showImageProjet(index) {
  let image = document.getElementById("image-projet-" + index);
  if (image) {
    image.style.display = "block";
  }
}

function hideImageProjet(index) {
  let image = document.getElementById("image-projet-" + index);
  if (image) {
    image.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let ul = document.getElementById("link-projets").querySelector("ul");
  for (let i = 1; i <= 3; i++) {
    let titreProjet = document.getElementById("projet-" + i);
    let img = document.createElement("img");

    img.id = "image-projet-" + i;
    img.className = "projet-image";
    img.src = "picture/projets/image" + i + ".jpg";
    img.alt = "Projet Image " + i;

    titreProjet.appendChild(img);
    titreProjet.classList.add("projet-title-container");
  }
});
