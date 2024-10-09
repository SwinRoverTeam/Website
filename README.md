# Welcome to our website!!

### Please keep this readme up to date! Everyone will benefit from your diligence.

If you change anything listed here, please update it. when your changes are merged they will so be here to.

### Pretaining to commit messages

Keep them short, in your head say "This commit will..." then the rest of the sentence becomes the commit message.

### On the topic of branch creation. Create a branch for a new feature, not every new dev.

And when commiting, commit at sane times, preferrably when you have checked one step in the recipe of what you need to do. A commit should not be considered a save.
If you have finished a feature and wish to merge it into the main branch, notify someone with acces in the website channel on the discord.

## To Start:

clone repo
```sh
git clone git@github.com:SwinRoverTeam/Website.git
cd Website
cd swin_rover_app
```

download dependencies
```sh
npm install
```

build the application
```sh
npm run build
```

open a local instance to test
```sh
npm run preview
```

## TODO

Arranged, short term to long term.

- fill in Sponsors page
- fix broken links
- make site look better on desktop
- reduce css complexity
- add more content to existing pages
- timeline page
- pages for each departement
- page for system overview
- showcase page to show off designs and productivity
- news page for latest updates

- Reduce git clutter
    - follow above rules

- Reduce code complexity
    - begin moving to react and typescript with tailwind for css
    - reduce the amount of code required to add content

### Directory map
```
swin_rover_app/
|-- node_modules/
|   |-- ... (contains installed node packages)
|-- public/
|   |-- ... (contains files accessed directly from the HTML)
|-- src/
|   |-- assets/
|   |   |-- ... (contains app assets)
|   |-- components/
|   |   |-- footer/
|   |   |-- nav-menu/
|   |   |-- sponsor-bubbles/
|   |   |-- nav-cards/
|   |   |-- etc..
|   |-- views/
|   |   |-- home/
|   |   |-- about/
|   |   |-- projects/
|   |-- App.css
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
```
