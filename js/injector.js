"use strict";

// get URL of site so we know which theme to use
let thisSite = window.location.host;

// insert our theme colors and fonts
doTheme();

// insert correct CSS for respective sites
if ( thisSite === "www.messenger.com" || thisSite === "www.facebook.com" )
{
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

// link the main _theme.css for all sites
function doTheme()
{
  // Debug
  let a     = chrome.extension.getURL("css/_theme.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// link messenger.css for *.messenger.com, *.facebook.com/messages/
function doMessenger()
{
  let a     = chrome.extension.getURL("css/messenger.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// link discord.css for discord.com
function doDiscord()
{
  let a     = chrome.extension.getURL("css/discord.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// link whatsapp.css for *.whatsapp.com
function doWhatsapp()
{
  let a     = chrome.extension.getURL("css/whatsapp.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// link youtube.css for *.youtube.com
function doYouTube()
{
  let a     = chrome.extension.getURL("css/youtube.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// link slack.css for *.slack.com
function doSlack()
{
  let a     = chrome.extension.getURL("css/slack.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}

// link linkedin.com for *.linkedin.com
function doLinkedIn()
{
  let a     = chrome.extension.getURL("css/linkedin.css"),
      link  = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = "webThemesFramework";
  link.href = a;

  document.head.appendChild(link);
}
