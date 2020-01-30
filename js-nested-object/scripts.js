"use strict";

const people = {
  person1: {
    "First name": "Ekantika",
    "Last name": "Kaur",
    Age: 25
  },
  person2: {
    "First name": "Jorge",
    "Last name": "Kahlo",
    Age: 37
  },
  person3: {
    "First name": "Neil",
    "Last name": "Smith",
    Age: 54
  }
}; 

const listPeople = document.getElementById("listPeople");

const showList = () => {
  let text = "";
  let keyTitle = "";
  
  for (let key in people) {
    console.log(key);
    keyTitle = key.charAt(0).toUpperCase() + key.substr(1); 
    text += `<dt>${keyTitle}:</dt>`;
  
    for (let who in people[key]) {
      console.log(who, people[key][who]);
      text += `<dd><strong>${who}:</strong> ${people[key][who]}</dd>`;
    }
  
  }
  
  document.getElementById("results").innerHTML = text;
}

listPeople.addEventListener("click", showList);
