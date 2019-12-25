"use strict";

// What site are we theming?
let thisSite = window.location.host;

// Insert the respective CSS
if ( thisSite === "www.messenger.com" || thisSite === "www.facebook.com" ) {
  doMessenger();
}
else if ( thisSite === "discordapp.com" ) {
  doDiscord();
}

// www.messenger.com and https://www.facebook.com/messages/
function doMessenger() {

  // Debug
  console.log('******** Web Theme: ' + thisSite + ' ********');

  let a     = chrome.extension.getURL("css/messenger.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// discordapp.com
function doDiscord() {

  // Debug
  console.log('******** Web Theme: ' + thisSite + ' ********');

  let a     = chrome.extension.getURL("css/discord.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}
