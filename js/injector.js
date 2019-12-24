"use strict";

// TODO: Add add specific CSS for specific websites

let a     = chrome.extension.getURL("css/messenger.css"),
    link  = document.createElement('link');

link.type = 'text/css';
link.rel = 'stylesheet';
link.id = "paranoidAndroid";
link.href = a;

document.head.appendChild(link);
