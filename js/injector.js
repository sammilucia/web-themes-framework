"use strict";

// get URL of site so we know which theme to use
const thisSite = window.location.host;

// insert our theme colors and fonts
doTheme();

// ...then insert correct CSS for respective sites
switch( thisSite )
{
	case "www.messenger.com":
		doMessenger();
		break;
	case  "www.facebook.com":
		doMessenger();
		break;
	case "discord.com":
		doDiscord();
		break;
	case "web.whatsapp.com":
		doWhatsapp();
		break;
	case "www.youtube.com":
		doYouTube();
		break;
	case "app.slack.com":
		doSlack();
		break;
	case "www.linkedin.com":
		doLinkedIn();
}

// link the main _theme.css for all sites
function doTheme()
{
	// Debug
	const a		= chrome.extension.getURL("css/_theme.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}

// link messenger.css for *.messenger.com, *.facebook.com/messages/
function doMessenger()
{
	const a		= chrome.extension.getURL("css/messenger.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}

// link discord.css for discord.com
function doDiscord()
{
	const a		= chrome.extension.getURL("css/discord.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}

// link whatsapp.css for *.whatsapp.com
function doWhatsapp()
{
	const a		= chrome.extension.getURL("css/whatsapp.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}

// link youtube.css for *.youtube.com
function doYouTube()
{
	const a		= chrome.extension.getURL("css/youtube.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}

// link slack.css for *.slack.com
function doSlack()
{
	const a		= chrome.extension.getURL("css/slack.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}

// link linkedin.com for *.linkedin.com
function doLinkedIn()
{
	const a		= chrome.extension.getURL("css/linkedin.css"),
		link	= document.createElement('link');

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	document.head.appendChild(link);
}
