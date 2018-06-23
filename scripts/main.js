var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/kon.jpeg'){
    myImage.setAttribute('src', 'images/koniky.png');
  }else{
    myImage.setAttribute('src', 'images/kon.jpeg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozzila is cool,' + myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozzila is cool' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
