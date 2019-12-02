const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');
const body = document.querySelector('body');


//Show Time
  function showTime(){
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;
  setTimeout(showTime, 1000);
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let hours = new Date().getHours();
  if (hours < 12) {
    body.style.background = "url('img/morning.jpg') no-repeat center /cover";
    greeting.innerHTML = 'Good morning,';
  } else if (hours < 18) {
    body.style.background = "url('img/afternoon.jpg') no-repeat center /cover";
    greeting.innerHTML = 'Good afternoon,';
  } else if (hours < 21) {
    body.style.background = "url('img/evening.jpg') center top /cover";
    greeting.innerHTML = 'Good evening,';
  } else {
    body.style.background = "url('img/night.jpg') no-repeat center /cover";
    greeting.innerHTML = 'Good night,';
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

showTime();
setBgGreet();
getName();
getFocus();
