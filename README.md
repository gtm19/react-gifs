# react-boilerplate

Simple react starter with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

## Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```

## Learnings from completing this challenge

### Fontawesome

The search icon did not appear for me, and attempts to install `font-awesome-free` via `yarn`, and importing to my `scss` stylesheet failed.

Instead, I followed [this guide](https://fontawesome.com/how-to-use/on-the-web/using-with/react).

First installing the necessary libraries:

```sh
yarn add @fortawesome/fontawesome-svg-core \
@fortawesome/free-solid-svg-icons \
@fortawesome/react-fontawesome
```

Then import the relevant functions from the installed packages, at the top of my [src/components/search_bar.jsx](src/components/search_bar.jsx) file:

```jsx
// src/components/search_bar.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
```

Finally plopping the following `jsx` where I wanted the icon to appear:

```jsx
// src/components/search_bar.jsx

<FontAwesomeIcon icon={faSearch} id="search-icon" />
```

Then I tweaked the styling for `#search-icon` in [assets/stylesheets/application.scss](assets/stylesheets/application.scss):

```scss
// assets/stylesheets/application.scss

  #search-icon {
    position: absolute;
    top: 40px;
    left: 60px;
    font-size: 2.6em;
    opacity: 0.4;
  }
  ```

### API key as environment variable

I know the underlying HTTP request to Giphy will reveal the API key anyway, but I just wanted a way to remove it from my source code.

So I installed [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack) using `yarn`:

```sh
yarn install dotenv-webpack
```

Then added the following to [webpack.config.js](webpack.config.js):

```js
// webpack.config.js

const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    ...,
    new DotenvWebpackPlugin()
  ]
  ...
};
```

Then created a `.env` file at the top level of the project, and `.gitignore`d it:

```sh
echo ".env" >> .gitignore
```

Finally, I put my environment variable in this file like so:

```
GIPHY_API_KEY={{THE_API_KEY}}
```

And used it in [src/components/app.jsx](src/components/app.jsx) like so:

```jsx
// src/components/app.jsx

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
```
