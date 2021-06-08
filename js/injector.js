"use strict";

// What site are we theming?
let thisSite = window.location.host;

// Insert the respective CSS
if ( thisSite === "www.messenger.com" || thisSite === "www.facebook.com" ) {
  doMessenger();
}
else if ( thisSite === "discord.com" ) {
  doDiscord();
}
else if ( thisSite === "web.whatsapp.com" ) {
  doWhatsapp();
}
else if ( thisSite === "www.youtube.com" ) {
  doYouTube();
}
else if ( thisSite === "app.slack.com" ) {
  doSlack();
}
else if ( thisSite === "www.linkedin.com" ) {
  doLinkedIn();
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

// discord.com
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

// web.whatsapp.com
function doWhatsapp() {

  // Debug
  console.log('******** Web Theme: ' + thisSite + ' ********');

  let a     = chrome.extension.getURL("css/whatsapp.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// youtube.com
function doYouTube() {

  // Debug
  console.log('******** Web Theme: ' + thisSite + ' ********');

  let a     = chrome.extension.getURL("css/youtube.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

function doSlack() {

  // Debug
  console.log('******** Web Theme: ' + thisSite + ' ********');

  let a     = chrome.extension.getURL("css/slack.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

function doLinkedIn() {

  // Debug
  console.log('******** Web Theme: ' + thisSite + ' ********');

  let a     = chrome.extension.getURL("css/linkedin.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}
