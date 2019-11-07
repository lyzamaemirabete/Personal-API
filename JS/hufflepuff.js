
// API key
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

// create the list where we will place our characters in
const ul = document.getElementById('characters');

// create URL to get all Harry Potter Gryffindor characters
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: 'Hufflepuff' }

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
// return Object(m.a)(t, e.value, {
//     keys: ["patronus"]
// })
// make API request using Fetch API
fetch(url, {key: key})
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
  // Get the results
//   let character = [];
  let characters = data;
    //    console.log(data);
  //Map through the results
  var chars = characters.map(function(character) {
  return `<li><button id="charsBtnHuff" data-id="${character._id}" class="charsBtnHuff" value ="${character.name}">${character.name}</button></li>`
}).join('')
  document.getElementById('cha').innerHTML = chars;

  document.querySelectorAll('#charsBtnHuff').forEach(function(el){
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
  // document.getElementById('body').innerHTML = p;
});

const searchInput = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');
const display = document.querySelector('.cha');

searchBtn.addEventListener('click', function(){
  var term = document.querySelector('.search').value

fetch(url, {key: key})
 .then((resp) =>resp.json()) // Transform the data into json
 .then(function(data) {

  let characters = data;
  const regex = new RegExp( term, 'gi');
  var chars = characters.filter(character => character.name.search(regex) != -1).map(char => {
  return `<li><button id="hufflePuffBtn" data-id="${char._id}" class="charsBtnHuff" value ="${char.name}">${char.name}</button></li>`
 }).join('')
 document.getElementById('cha').innerHTML = chars;
 document.querySelectorAll('#hufflePuffBtn').forEach(function(el){
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
  document.querySelector('.name').innerHTML = `><p class="nameText">${a.name}</p>`;

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
       
}