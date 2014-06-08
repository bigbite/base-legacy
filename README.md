# Base project
> A base project with all the things.

## Contains
- Ruby Sass compile (with autoprefixer)
- Image compression
- SVG minify
- SVG to PNG
- Copy static assets (with uglify to `.js` and autoprefix + minify for `.css` files)
- Watch
- Reload on change with BrowserSync or LiveReload
- Optional static server

### Roadmap
- Bower
- Browserify


## Usage

### Clean build
Create a clean build and clean out the assets folder, useful to run before deploying to clean up any left over assets:

```
gulp build
```

### Watching files

#### Basic
Watch files and automatically run the necessary task:

````
gulp watch
```

#### LiveReload
Install the LiveReload browser extension (current requirement) and run:

```
gulp watch -l
```

#### BrowserSync
To enable [BrowserSync](http://browsersync.io), run:

```
gulp watch -s
```

#### Static Connect HTTP server
Starts a static HTTP server using [Connect](https://github.com/senchalabs/connect):

```
gulp watch -c
```
