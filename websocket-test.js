let wsUri = "wss://echo.websocket.org/";
let output;

function initSocket() {
    output = document.getElementById('output');
    wsController();
}

function wsController() {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) {onOpen(evt)};
    websocket.onclose = function(evt) {onClose(evt)};
    websocket.onmessage = function(evt) {onMessage(evt)};
    websocket.onerror = function(evt) {onError(evt)};
}

function onOpen(evt) {
    outputLog('connection was successfully established');
    doSend(`Hey, I'm Dmytro!`);
}

function onClose(evt) {
    outputLog('disconnected by onMessage()');
}

function onMessage(evt) {
    outputLog('<span style="color:green;">RESPONSE: ' + evt.data + '</span>');
}

function onError(evt) {
    outputLog('<span style="color:tomato;">RESPONSE: ' + evt.data + '</span>');
}

function doSend(message) {
    outputLog('SENT: ' + message);
    websocket.send(message);
}

function outputLog(message) {
    let pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

window.addEventListener("load", initSocket, false);