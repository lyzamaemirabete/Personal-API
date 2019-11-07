
// API key
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

// create URL to get all Harry Potter Gryffindor characters
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

const dropdownText = document.querySelector('.dropdownText');
const titleAll = document.querySelector('.titleAll');


//ALL CHARACTERS
// make API request using Fetch API
fetch(url, {key: key})
  .then((resp) =>resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
  let characters = data;

  //Map through the results
  var chars = characters.map(function(character) {
  return `<li><button id="allCharsBtn" data-id="${character._id}" class="allCharsBtn" value ="${character.name}">${character.name}</button></li>`
}).join('')
  document.getElementById('cha').innerHTML = chars;

  document.querySelectorAll('#allCharsBtn').forEach(function(el){

    el.addEventListener('click', function(){
        // console.log(this.getAttribute('data-id')
       var charID = this.getAttribute('data-id');
       var cha = characters.filter(chat => (chat._id == charID))
       cha.map(displayInfos)
    })
});
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
  document.getElementById('body').innerHTML = p;
});

// search 
    const searchInput = document.querySelector('.search');
    const searchBtn = document.querySelector('.searchBtn');
    const display = document.querySelector('.cha');
    const charInfos = document.querySelector('.charInfos');

    searchBtn.addEventListener('click', function(){
      charInfos.innerHTML = "";
      var term = document.querySelector('.search').value

   fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {
  
      let characters = data;
      const regex = new RegExp( term, 'gi');
      var chars = characters.filter(character => character.name.search(regex) != -1).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
        // console.log(this.getAttribute('data-id')
        var charID = this.getAttribute('data-id');
       var cha = characters.filter(chat => (chat._id == charID))
        cha.map(displayInfos)
    })
  });
})
})

//All characters dropdown
var all = document.querySelector('.all');
all.addEventListener('click', function(){
  titleAll.innerText = "All Characters";
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText;
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;
      // console.log(characters)
      var chars = characters.map(function(character) {
        return `<li><button id="allCharsBtn" data-id="${character._id}" class="allCharsBtn" value ="${character.name}">${character.name}</button></li>`
      }).join('')
      document.getElementById('cha').innerHTML = chars;

      document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//Death Eaters Display
var death = document.querySelector('.deathEaterDrop');
death.addEventListener('click', function(){
  titleAll.innerText = "Death Eaters"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText;
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.deathEater == true ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//Dumbledors Army Display
var army = document.querySelector('.army');
army.addEventListener('click', function(){
  titleAll.innerText = "Dumbledors Army"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.dumbledoresArmy == true ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//inistry of Magic Display
var ministry = document.querySelector('.ministry');
ministry.addEventListener('click', function(){
  titleAll.innerText = "Ministry Of Magic"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.ministryOfMagic == true ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

// Order of the pheonix Display
var order = document.querySelector('.order');
order.addEventListener('click', function(){
  titleAll.innerText = "Order of the Phoenix"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.orderOfThePhoenix == true ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//Pure-blood
var pureblood = document.querySelector('.pureblood');
pureblood.addEventListener('click', function(){
  titleAll.innerText = "Pure-Blood"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.bloodStatus == "pure-blood" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//Half -Blood
var halfblood = document.querySelector('.halfblood');
halfblood.addEventListener('click', function(){
  titleAll.innerText = "Half-Blood"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.bloodStatus == "half-blood" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

// Muggleborn
var muggleborn = document.querySelector('.muggleborn');
muggleborn.addEventListener('click', function(){
  titleAll.innerText = "Muggle-Born"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.bloodStatus == "muggle-born" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//Unknown
var unknown = document.querySelector('.unknown');
unknown.addEventListener('click', function(){
  titleAll.innerText = "Unknown Blood Status"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.bloodStatus == "unknown" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

// Beausbatons
var Beaux = document.querySelector('.Beaux');
Beaux.addEventListener('click', function(){
  titleAll.innerText = "Beauxbatons Academy"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.school == "Beauxbatons Academy of Magic" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

// Hogwarts
var hogwarts = document.querySelector('.hogwarts');
hogwarts.addEventListener('click', function(){
  titleAll.innerText = "Hogwarts School"  
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.school == "Hogwarts School of Witchcraft and Wizardry" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

//Durmstrang
var durms = document.querySelector('.durms');
durms.addEventListener('click', function(){
  titleAll.innerText = "Durmstrang Institute"
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let characters = data;

      var chars = characters.filter(character => character.school == "Durmstrang Institute" ).map(char => {
      return `<li><button id="allCharsBtn" data-id="${char._id}" class="allCharsBtn" value ="${char.name}">${char.name}</button></li>`
     }).join('')
     document.getElementById('cha').innerHTML = chars;
     document.querySelectorAll('#allCharsBtn').forEach(function(el){
      el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
         var charID = this.getAttribute('data-id');
         var cha = characters.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
      })
  });
})
})

function displayInfos(a){
  document.querySelector('.name').innerHTML = `<p class="nameText">${a.name}</p>`;

 if(`${a.house}` === 'undefined'){
   document.querySelector('.house').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="House"><img class="icons" src="./img/house.png"></a><p class="infoContent"> &nbsp;---</p>`;    
   }
 else 
   document.querySelector('.house').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="House"><img class="icons" src="./img/house.png"></a><p class="infoContent"> &nbsp;${a.house}</p>`;

 if(`${a.patronus}` === 'undefined'){
 document.querySelector('.patronus').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Patronus"><img class="icons" src="./img/patronus.png"></a><p class="infoContent"> &nbsp;---</p>`;
 }
 else 
 document.querySelector('.patronus').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Patronus"><img class="icons" src="./img/patronus.png"></a><p class="infoContent"> &nbsp;${a.patronus}</p>`;

 if(`${a.wand}` === 'undefined'){
   document.querySelector('.wand').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Wand"><img class="icons" src="./img/wand.png"></a><p class="infoContent"> &nbsp;---</p>`;
   }
   else 
   document.querySelector('.wand').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Wand"><img class="icons" src="./img/wand.png"></a><p class="infoContent"> &nbsp;${a.wand}</p>`;
 
 if(`${a.bloodStatus}` === 'undefined'){
   document.querySelector('.bloodStatus').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Blood Status"><img class="icons" src="./img/blood.png"></a><p class="infoContent"> &nbsp;---</p>`;
 }
 else 
   document.querySelector('.bloodStatus').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Blood Status"><img class="icons" src="./img/blood.png"></a><p class="infoContent"> &nbsp;${a.bloodStatus}</p>`; 
 
 if(`${a.deathEater}` === 'undefined'){
 document.querySelector('.deathEater').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Wand"><img class="icons" src="./img/death.png"></a><p class="infoContent"> &nbsp;---</p>`;
 }
 else 
 document.querySelector('.deathEater').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Wand"><img class="icons" src="./img/death.png"></a><p class="infoContent"> &nbsp;${a.deathEater}</p>`; 
 
 if(`${a.school}` === 'undefined'){
 document.querySelector('.school').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="School"><img class="icons" src="./img/school.png"></a><p class="infoContent"> &nbsp;---</p>`;
 }
 else 
 document.querySelector('.school').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="School"><img class="icons" src="./img/school.png"></a><p class="infoContent"> &nbsp;${a.school}</p>`;
 
 if(`${a.role}` === 'undefined')
 {
  document.querySelector('.role').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Role"><img class="icons" src="./img/role.png"></a><p class="infoContent"> &nbsp;---</p>`;
  }
  else 
  document.querySelector('.role').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Role"><img class="icons" src="./img/role.png"></a><p class="infoContent"> &nbsp;${a.role}</p>`;
        
}
