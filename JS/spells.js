
// API key
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

// create the list where we will place our characters in
const ul = document.getElementById('characters');

// create URL to get all Harry Potter Gryffindor characters
const url = new URL('https://www.potterapi.com/v1/spells/'), params = {key: key}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

function displayInfos(a){
  document.querySelector('.name').innerHTML = `<div class="name"><p class="nameText">${a.spell}</p></div>`;
  document.querySelector('.house').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Spell Type"><img class="icons" src="./img/type.png"></a><p class="infoContent"> &nbsp;${a.type}</p>`;
  document.querySelector('.patronus').innerHTML = `<a href="#" data-toggle="tooltip" data-placement="bottom" title="Effect"><img class="icons" src="./img/effect.png"></a><p class="infoContent"> &nbsp;${a.effect}</p>`;
}

// make API request using Fetch API
fetch(url, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
//   let character = [];
  let spells = data;
  //Map through the results
  var chars = spells.map(function(spell) {
  return `<li><button id="spellBtn" data-id="${spell._id}" class="spellBtn" value ="${spell.spell}">${spell.spell}</button></li>`
}).join('')
  document.getElementById('cha').innerHTML = chars;

  document.querySelectorAll('#spellBtn').forEach(function(el){
    el.addEventListener('click', function(){
        // console.log(this.getAttribute('data-id')
        var charID = this.getAttribute('data-id');
       var cha = spells.filter(chat => (chat._id == charID))
        cha.map(displayInfos)
    })
});
})
.catch(function(error) {
  // Error handling
  let p = "There's an error with the API.";
   document.getElementById('body').innerHTML = p;
});


//search
const searchInput = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');
const display = document.querySelector('.cha');

searchBtn.addEventListener('click', function(){
  var term = document.querySelector('.search').value

fetch(url, {key: key})
 .then((resp) =>resp.json()) // Transform the data into json
 .then(function(data) {

  let spells = data;
  const regex = new RegExp( term, 'gi');
  var spellTerm = spells.filter(spell => spell.spell.search(regex) != -1 || spell.effect.search(regex) != -1 || spell.type.search(regex) != -1).map(spellName => {
  return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
 }).join('')
 document.getElementById('cha').innerHTML = spellTerm;

 document.querySelectorAll('#spellBtn').forEach(function(el){
  el.addEventListener('click', function(){
      // console.log(this.getAttribute('data-id')
      var charID = this.getAttribute('data-id');
     var cha = spells.filter(chat => (chat._id == charID))
      cha.map(displayInfos)
  })
});
})
})

//All spells
var allSpells = document.querySelector('.allSpells');
allSpells.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      var chars = spells.map(function(spell) {
        return `<li><button id="spellBtn" data-id="${spell._id}" class="spellBtn" value ="${spell.spell}">${spell.spell}</button></li>`
      }).join('')
        document.getElementById('cha').innerHTML = chars;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})




//charm
var charm = document.querySelector('.charmDrop');
charm.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      const text = 'charm'
      const regex = new RegExp( text, 'gi');
      var spellTerm = spells.filter(spell => spell.type.search(regex) != -1).map(spellName => {
      return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
       }).join('')
       document.getElementById('cha').innerHTML = spellTerm;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})

//curse
var curse = document.querySelector('.curseDrop');
curse.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      const text = 'curse'
      const regex = new RegExp( text, 'gi');
      var spellTerm = spells.filter(spell => spell.type.search(regex) != -1).map(spellName => {
      return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
       }).join('')
       document.getElementById('cha').innerHTML = spellTerm;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})

//enchantment
var enchantment = document.querySelector('.enchantmentDrop');
enchantment.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      const text = 'enchantment'
      const regex = new RegExp( text, 'gi');
      var spellTerm = spells.filter(spell => spell.type.search(regex) != -1).map(spellName => {
      return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
       }).join('')
       document.getElementById('cha').innerHTML = spellTerm;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})

//hex
var hex = document.querySelector('.hexDrop');
hex.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      const text = 'hex'
      const regex = new RegExp( text, 'gi');
      var spellTerm = spells.filter(spell => spell.type.search(regex) != -1).map(spellName => {
      return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
       }).join('')
       document.getElementById('cha').innerHTML = spellTerm;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})

// jinx
var jinx = document.querySelector('.jinxDrop');
jinx.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      const text = 'jinx'
      const regex = new RegExp( text, 'gi');
      var spellTerm = spells.filter(spell => spell.type.search(regex) != -1).map(spellName => {
      return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
       }).join('')
       document.getElementById('cha').innerHTML = spellTerm;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})

//spell
var spell = document.querySelector('.spellDrop');
spell.addEventListener('click', function(){
  dropdownText.innerText = "";
  dropdownText.innerText = this.innerText
  fetch(url, {key: key})
     .then((resp) =>resp.json()) // Transform the data into json
     .then(function(data) {

      let spells = data;
      const text = 'spell'
      const regex = new RegExp( text, 'gi');
      var spellTerm = spells.filter(spell => spell.type.search(regex) != -1).map(spellName => {
      return `<li><button id="spellBtn" data-id="${spellName._id}" class="spellBtn" value ="${spellName.spell}">${spellName.spell}</button></li>`
       }).join('')
       document.getElementById('cha').innerHTML = spellTerm;
       document.querySelectorAll('#spellBtn').forEach(function(el){
         el.addEventListener('click', function(){
          // console.log(this.getAttribute('data-id')
          var charID = this.getAttribute('data-id');
          var cha = spells.filter(chat => (chat._id == charID))
          cha.map(displayInfos)
  })
  });
})
})