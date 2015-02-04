# spacegray-chrome
Spacegray for devtools

##Installation
Installation is pretty straightforward if you've installed an unpacked extension before. Just make sure you install the `dist` folder instead of the folder itself (chrome doesn't like underscores in the filenames and I'm using sass partials

##development
You can either do pull requests or I'll add you as a contributor.

###Setting up dev environment
Using grunt and bower, so make sure you've set that up. I don't check in the dependencies so you'll need to:
`npm install && bower install`

There's a plugin that will reload the devtools automatically, also, there's an HTML file that can show you a big chunk of the devtools. When you run `grunt` it will open. It's not exact and it's pretty close to styled already so I recommend actually opening devtools.
