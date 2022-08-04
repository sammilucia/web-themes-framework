"use strict";

// get name of site from URL so we know which theme to use:
const urlParts = window.location.hostname.split( '.' );
const cssName = urlParts[ urlParts.length - 2 ];

// insert theme colors and fonts:
addStyleSheet( '_theme' );
addStyleSheet( cssName );

// link CSS files in site <head>:
function addStyleSheet(styleSheet)
{
	const a		= chrome.runtime.getURL( 'css/' + styleSheet + '.css' ),
		link	= document.createElement( 'link' );

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	console.log( 'injecting Web Themes Framework' );
	document.head.appendChild(link);
}
