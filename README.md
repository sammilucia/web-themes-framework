# Web Themes Framework
_**Quickly create themes for popular web apps.**_

## About
The goal of this project is that theme creators can create _their own_ Chrome Extension that themes the most popular websites, and package these as a Chrome extension, quickly, reliably, and easily, and without any programming experience or knowledge.

## How it works
1. Download the source files however you want (from https://github.com/sammilucia/web-themes-framework/archive/master.zip)
2. Edit css/config.css
3. Change the colors and fonts however you wish
4. Enable Developer Mode in Chrome, and install it as an unpacked Extension 😊

## Decisions
There are three ways I'm considering this working, I haven't decided yet (let me know your thoughts?):
1. Edit a config.css file, to add your theme colors, fonts, etc... and all the supported websites will be automagically themed
2. There's no config.css file, instead you edit the web app files directly (e.g. messenger.css), which is more work but gives more control over individual apps
3. Edit config.css to get everything generally themed, but you can customize apps directly in their own CSS if you want (but it's not required)

## Why, when there are others?
A few reasons. One there are Extensions such as Stylish which let you theme specific websites, but they're not aimed at _themers_, and being able to release your own Extension that other people can easily use. Secondly, of those sorts of Extensions I've seen, they generally have access to _all_ websites you visit, and are _not_ open source, which I don't personally like. I think this can be a much better option for themers.

## Web apps supported so far
1. Facebook Messenger (both standalone and through Facebook)
2. Discord
3. Whatsapp

## Contributing
I have okay coding skills, but I could definitely use help. Skills required:
- JS, jQuery (probably), and semantic CSS
- Good coding practices
- Graphic design skills

## Bugs
Please let me know any problems. A github page will be up soon

## License
Because this Extension is designed as a framework, you are free to edit it, repackage it, and release it under the The MIT License. The License file should always be included so

## To do
1. Fix Messenger support

## Changelog
## Version 0.3.2 - 8 Jun 2020
- Updated Slack to support new wysiwig class
- Added Firefox support

## Version 0.3.1 - 16 May 2020
- Added Slack support

### Version 0.2.4 - 27 Feb 2020
- Fixed wrong textinput color on WhatsApp

### Version 0.2.3 - 21 Jan 2020
- Accommodated some changes in WhatsApp

### Version 0.2.2 - 25 Dec 2019
- Added https://www.youtube.com theme

### Version 0.2.1 - 24 Dec 2019
- Added https://web.whatsapp.com theme
- Fixed minor bug in Discord theme

### Version 0.2.0 - 24 Dec 2019
- Added logic to apply the correct theme for the current website
- Added https://discordapp.com theme

### Version 0.1.1 - 24 Dec 2019
- Working as intended for https://www.messenger.com and https://www.facebook.com/messages/

### Version 0.1.0 - 23 Dec 2019
- Proof of concept
