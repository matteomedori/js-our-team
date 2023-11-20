"use strict";

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

const p = document.querySelector("p");

//per ogni elemento dell'array
for (let i = 0; i < teamMembers.length; i++) {
  let description = `Membro ${i + 1}`;
  //per ogni chiave dell'oggetto
  for (let key in teamMembers[i])
    description += `
${key}: ${teamMembers[i][key]}`;
  console.log(description);
  p.innerText += description + "\n";
}
// console.log(teamMembers);
