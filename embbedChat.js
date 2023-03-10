let id = document.currentScript.getAttribute('data-id');

const embbedLink = document.getElementById('embbedApp');

const embbedStyle = document.createElement('link');
const embbedScript = document.createElement('script');

const boxDiv = document.createElement('div');

const iframe = document.createElement('iframe');

const topBarDiv = document.createElement('div');
const topBarDivImg = document.createElement('img');

const openChatButton = document.createElement('button');
const openChatButtonImg = document.createElement('img');

const closeChatButton = document.createElement('button');
const closeButtonImg = document.createElement('img');

function start() {

    document.head.appendChild(embbedStyle);
    embbedStyle.setAttribute('rel', 'stylesheet');
    embbedStyle.setAttribute('href', '/config/embbedChatStyle.css');

    document.body.appendChild(openChatButton);
    openChatButton.setAttribute('id', 'chat-button');
    openChatButton.appendChild(openChatButtonImg);
    openChatButtonImg.setAttribute('id', 'openChatImg');
    openChatButtonImg.setAttribute('src', embbedLink.dataset.image || '/embbed-icons/chat-icon.png');
    openChatButtonImg.setAttribute('alt', 'chat-icon.png');
    openChatButton.setAttribute('class', 'rounded-button');
    openChatButton.classList.add('chat-button');

    document.body.appendChild(boxDiv);
    boxDiv.setAttribute('class', 'box');
    boxDiv.setAttribute('id', 'embbed-chat');
    boxDiv.style.width = embbedLink.dataset.width;
    boxDiv.style.height = embbedLink.dataset.height;
    boxDiv.appendChild(topBarDiv);
    boxDiv.appendChild(iframe);
    
    topBarDiv.setAttribute('class', 'top-chat-bar');

    iframe.setAttribute('id', 'embbed-chat');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '89.4%');
    iframe.setAttribute('src', embbedLink.dataset.link);
    iframe.setAttribute('frameborder', '0');

    topBarDiv.appendChild(topBarDivImg);
    topBarDivImg.setAttribute('id', 'set-logo');
    topBarDivImg.setAttribute('src', embbedLink.dataset.logo);
    topBarDiv.appendChild(closeChatButton);

    closeChatButton.setAttribute('id', 'close-button');
    closeButtonImg.setAttribute('id', 'embbed-icons');
    closeButtonImg.setAttribute('src', '/embbed-icons/close-icon.png');
    closeButtonImg.setAttribute('alt', 'close-icon.png');
    closeChatButton.appendChild(closeButtonImg);
    closeChatButton.setAttribute('class', 'rounded-button');

    document.body.appendChild(embbedScript);
    embbedScript.setAttribute('src', '/config/embbedChatController.js');
}

window.addEventListener('load', start);



