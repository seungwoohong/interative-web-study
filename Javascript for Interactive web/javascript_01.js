const pElem = document.createElement('p');
const body = document.body;
const specialElem = document.querySelector('.textbox');

pElem.innerHTML = '안녕';
body.appendChild(pElem);

specialElem.classList.add('special');
// specialElem.classList.remove('special');
// specialElem.classList.toggle('special');
