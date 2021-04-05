let premierNom = document.getElementById("prenom");
let nomGroupe = document.querySelector("#sltGroupe");
let biographie = document.querySelector("#bio");
let lenom = document.querySelector("#nom");
let btnChoixImg = document.querySelector("#btnChoixImg");
let buttonCreer = document.querySelector(".btn--red");
let buttonReint = document.querySelector(".btn--bleu");
let list = document.querySelector("#list");
let photoProfile = document.querySelector("#photoProfile");
let personnes = [];

// construction objet
buttonCreer.addEventListener("click", function (evt) {
  evt.preventDefault();
  let recupImage = btnChoixImg.files[0];
  let personne = {
    prenom: premierNom.value,
    nom: lenom.value,
    groupe: nomGroupe.value,
    bio: biographie.value,
    photo: URL.createObjectURL(recupImage),
  };

  console.table(personne);
  addtolist(personne);
});

let divListeCtat = document.querySelector(".liste");

function addtolist(personne) {
  let contenairImgtxt = document.createElement("div");
  contenairImgtxt.classList.add("flex-row");
  //Image
  let contenairImg = document.createElement("div");
  contenairImg.classList.add("contenuImages");
  let paragraphImg = document.createElement("p");
  paragraphImg.classList.add("imageTaille");
  let img = document.createElement("img");
  img.classList.add("photo");
  img.setAttribute("src", personne.photo);
  //Text
  let contenairTxt = document.createElement("div");
  contenairTxt.classList.add("contenus");
  let paragraphNom = document.createElement("p");
  paragraphNom.textContent = `${personne.prenom} ${personne.nom}`;
  let paragraphGroupe = document.createElement("p");
  paragraphGroupe.textContent = `${personne.groupe}`;
  let paragraphBiographie = document.createElement("p");
  paragraphBiographie.textContent = `${personne.bio}`;
  //Btn
  let contenairBtn = document.createElement("div");
  contenairBtn.classList.add("btnFerme");
  let paragraphBtn = document.createElement("p");
  paragraphBtn.classList.add("cursor-pointer");
  paragraphBtn.textContent = "X";
  //

  list.append(contenairImgtxt);
  // Ajout dans le dom img
  contenairImgtxt.append(contenairImg);
  contenairImg.append(paragraphImg);
  paragraphImg.append(img);

  //Ajout dans le dom Biograpie nom prenom et group
  contenairImgtxt.append(contenairTxt);
  contenairTxt.append(paragraphNom);
  contenairTxt.append(paragraphGroupe);
  contenairTxt.append(paragraphBiographie);

  // Ajout dans le dom btn X
  contenairImgtxt.append(contenairBtn);
  contenairBtn.append(paragraphBtn);
  paragraphBtn.addEventListener("click", function () {
    contenairImgtxt.remove();
  });
  console.log("olga");
}
// bouton pour reintialiser
buttonReint.addEventListener("click", function (event) {
  event.preventDefault();
  premierNom.value = "";
  lenom.value = "";
  nomGroupe.value = "";
  biographie.value = "";
  btnChoixImg.files[0]=undefined;
  photoProfile.setAttribute("src", "");
  // do {
  //   list.removeChild(list.lastChild);
  // } while (list.firstChild);
});
// visionneuse d'image
btnChoixImg.addEventListener("change", function () {
  let recupImage = this.files[0];
  photoProfile.setAttribute("src", URL.createObjectURL(recupImage));
  console.log("cool");
});
