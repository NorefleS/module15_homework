const buttonSend = document.querySelector('.send');
const buttonGeo = document.querySelector('.geolocation');
const chat = document.querySelector('.chat__messeges');
const wsUrl = 'wss://echo-ws-service.herokuapp.com';
let input = document.querySelector('.input');

function writeMessege(messege) {
    const messegeBlock = document.createElement('p');
    messegeBlock.classList.add('messege');
    messegeBlock.innerHTML = messege;
    chat.appendChild(messegeBlock);
}

let websocket = new WebSocket(wsUrl);
    websocket.onopen = function(e) {
        console.log('Соединение установлено');
    }

    websocket.onmessage = function(e) {
        writeMessege(e.data);
    }

    websocket.onerror = function(e) {
        console.log('Ошибка!');
    }

buttonSend.addEventListener('click', () => {
    let messege = input.value;
    writeMessege(messege);
    websocket.send(messege);
});

/* ---------- Geolocation ---------- */

const success = (position) => {
	let latitude  = position.coords.latitude;
	let longitude = position.coords.longitude;
	let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	let linkMessege = `<a href = "${geoLink}" target = "_blank">Геолокация</a>`
    writeMessege(linkMessege);
};

const error = () => {
    writeMessege('Невозможно получить ваше местоположение');
}

buttonGeo.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log('Geolocation не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
})