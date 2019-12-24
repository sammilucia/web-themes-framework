# Web Themes Framework
Project page: https://github.com/sammilucia/web-themes-framework

## About
The goal of this project is that theme creators can create _their own_ Chrome Extension that themes the most popular websites, and package these as a Chrome extension, quickly, reliably, and easily, and without any programming experience or knowledge.

## How it works
There are three ways I'm considering this working, I haven't decided yet (let me know your thoughts?):
1. Edit a config.css file, to add your theme colors, fonts, etc... and all the supported websites will be automagically themed
2. There's no config.css file, instead you edit the web app files directly (e.g. messenger.css), which is more work but gives more control over individual apps
3. Edit config.css to get everything generally themed, but you can customize apps directly in their own CSS if you want (but it's not required)

## Why? There are others?
A few reasons. One there are Extensions such as Stylish which let you theme specific websites, but they're not aimed at _themers_, and being able to release your own Extension that other people can easily use. Secondly, of those sorts of Extensions I've seen, they generally have access to _all_ websites you visit, and are _not_ open source, which I don't personally like. I think this can be a much better option for themers.

## Web apps supported so far
1. Facebook Messenger (both standalone and through Facebook)

## Contributing
I have okay coding skills, but I could definitely use help. Skills required:
- JS, jQuery (probably), and semantic CSS
- Good coding practices
- Graphic design skills

## Bugs
Please let me know any problems. A github page will be up soon

## License
Because this Extension is designed as a framework, you are free to edit it, repackage it, and release it under the The MIT License. The License file should always be included so

## Changelog
### Version 0.1.1 - 24 Dec 2019
- Working as intended for https://www.messenger.com and https://www.facebook.com/messages/

### Version 0.1.0 - 23 Dec 2019
- Proof of concept
