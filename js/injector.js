/* get name of site from URL so we know which theme to use: */
const urlParts = window.location.hostname.split( '.' );

console.log( urlParts );

let cssName = urlParts[ urlParts.length - 2 ];

if( cssName == 'google' ) {
	cssName = urlParts[ urlParts.length - 3 ];
}

console.log( 'WTF: Detected ' + cssName );

/* insert theme colors and fonts: */
addStyleSheet( '_theme' );
addStyleSheet( cssName );

/* link CSS files in site <head>: */
function addStyleSheet(styleSheet)
{
	const a		= chrome.runtime.getURL( 'css/' + styleSheet + '.css' ),
		link	= document.createElement( 'link' );

	link.type	= 'text/css';
	link.rel	= 'stylesheet';
	link.id		= "webThemesFramework";
	link.href	= a;

	console.log( 'WTF: injecting ' + styleSheet + '.css' );
	document.head.appendChild(link);
}
