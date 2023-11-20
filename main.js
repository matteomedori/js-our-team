"use strict";

/*
FUNCTIONS 
*/

function img_create(src, alt) {
  const img = document.createElement("img");
  img.src = "img/" + src;
  img.alt = alt;
  return img;
}

/*
OPERATIONS 
*/

// array of team members
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

// //per ogni elemento dell'array
// for (let i = 0; i < 1; i++) {
//   const p = document.createElement("p");
//   let text = `Membro ${i + 1}`;
//   //per ogni chiave dell'oggetto
//   for (let key in teamMembers[i]) {
//     text += `
// ${key}: ${teamMembers[i][key]}`;
//   }
//   p.innerText = text;
//   console.log(p.innerText);
//   console.log(text);
//   //   p.innerText += description + "\n";
//   //   p.append(img_create(teamMembers[i]["img"], i));
// }

//creazione schede
const cards = document.querySelector(".cards");

for (let i = 0; i < teamMembers.length; i++) {
  const div = document.createElement("div");
  const img = img_create(teamMembers[i]["img"], i);
  const h2 = document.createElement("h2");
  h2.innerText = teamMembers[i].name;
  const par = document.createElement("p");
  par.innerText = teamMembers[i].role;

  div.append(img);
  div.append(h2);
  div.append(par);
  cards.append(div);
}
