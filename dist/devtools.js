var x = new XMLHttpRequest();
x.open('GET', ['Custom.css', 'icomoon.woff']);
x.onload = function() {
    chrome.devtools.panels.applyStyleSheet(x.responseText);
};
x.send();
