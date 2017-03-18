# Vert.x / NodeJS - Yarn / NPM - Preact Boilerplate / Starter Kit

> :guitar: Ready-to-rock [Vert.x](https://github.com/eclipse/vert.x) or NodeJS with [Preact] starter project, powered by [webpack].
>
> :rocket: If you're starting a new project using [Preact], you've come to the right place.
Below is a step-by-step guide that takes you straight from downloading this boilerplate to production.

# Why NodeJS and Vert.x

If you are a frontend developer you might be familiar with JavaScript and if you've been following the hype of the last few years you might have heard of NPM and NodeJS as well.

Besides JavaScript, what NodeJS and Vert.x have in common is that their are based on the same architecture style. NodeJS is based on the Reactor Pattern and Vert.x is based on the [Multi-Reactor Pattern](http://vertx.io/docs/vertx-core/java/#_reactor_and_multi_reactor).  
Therefore, whilst NodeJS has 1 event-loop, Vert.x will, by default, set you up with 1 event-loop per CPU thread. But the differences do not finish here. Out of the box Ver.x can:

 - Scale vertically
 - Scale horizontally without the need for a load balancer (one less hop to go through)
 - Be programmed in several languages (Polyglot)
 - Promote blocking code into an async future literally at the call of a single function
 - Use Service Discovery
 - Easily communicate with other services through the eventbus
 - Propagate the eventbus to the client (firebase like)
 - Deploy in a single Jar or through the Vert.x app ()like the one used in this boilerplate)

Because of this and much more, Vert.x has been gaining some serious traction in the world of [Reactive Systems](https://www.oreilly.com/ideas/reactive-programming-vs-reactive-systems) because of how easy it is to develop, deploy and main Vert.x applications.
Vert.x is not a new tool and has been around for almost as long as NodeJS but it is its latest installment, version 3.0.0, that converted Vert.x in what might just be the best micro-service technology for containerized applications. The main reason for this might be because it complies the [Reactive Manifesto](http://www.reactivemanifesto.org/).   

---


# Quick-Start Guide

- [Before you start](#before-you-start)
- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Structure](#structure)
- [CSS Modules](#css-modules)
- [Handling URLS](#handling-urls)
- [React Compatibility](#react-compatibility)

## Before you start

You haven't done so yet, you'll need to install NPM. You can do this by installing [NodeJS](https://nodejs.org/en/download/) or, if available, by installing it through your OS package manager (e.g. brew, yum or apt).
If you will be using Vert.x, then you'll also need to install [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) (or above). 


## Installation

**1. Clone this repo:**

```sh
git clone --depth 1 https://github.com/bmsantos/preact-boilerplate.git my-app
cd my-app
```


**2. Make it your own:**

```sh
rm -rf .git && git init && yarn init
```

> :information_source: This re-initializes the repo and sets up your NPM project.


**3. Install the dependencies:**

```sh
yarn install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**4. Start a live-reload development server:**

```sh
yarn run dev
```

or

```sh
yarn run dev:vertx
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**5. Testing with `mocha`, `karma`, `chai`, `sinon` via `phantomjs`:**

```sh
yarn test
```

> 🌟 This also instruments the code in `src/` using [isparta](https://github.com/douglasduteil/isparta), giving you pretty code coverage statistics at the end of your tests! If you want to see detailed coverage information, a full HTML report is placed into `coverage/`.

**6. Generate a production build in `./build`:**

```sh
yarn run build
```

or

```sh
yarn run build:vertx
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`
>
> **[Netlify](https://www.netlify.com/docs/cli/) Example:** `netlify deploy`
>
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/developit/preact-boilerplate)


**5. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
yarn start
```

or

```sh
yarn start:vertx
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`.



---


## Structure

Apps are built up from simple units of functionality called Components. A Component is responsible for rendering a small part of an application, given some input data called `props`, generally passed in as attributes in JSX. A component can be as simple as:

```js
class Link extends Component {
  render({ to, children }) {
    return <a href={ to }>{ children }</a>;
  }
}
// usage:
<Link to="/">Home</Link>
```


---


## CSS Modules

This project is set up to support [CSS Modules](https://github.com/css-modules/css-modules).  By default, styles in `src/style` are **global** (not using CSS Modules) to make global declarations, imports and helpers easy to declare.  Styles in `src/components` are loaded as CSS Modules via [Webpack's css-loader](https://github.com/webpack/css-loader#css-modules).  Modular CSS namespaces class names, and when imported into JavaScript returns a mapping of canonical (unmodified) CSS classes to their local (namespaced/suffixed) counterparts.

When imported, this LESS/CSS:

```css
.redText { color:red; }
.blueText { color:blue; }
```

... returns the following map:

```js
import styles from './style.css';
console.log(styles);
// {
//   redText: 'redText_local_9gt72',
//   blueText: 'blueText_local_9gt72'
// }
```

Note that the suffix for local classNames is generated based on an md5 hash of the file. Changing the file changes the hash.


---


## Handling URLS

:information_desk_person: This project contains a basic two-page app with [URL routing](http://git.io/preact-router).

Pages are just regular components that get mounted when you navigate to a certain URL. Any URL parameters get passed to the component as `props`.

Defining what component(s) to load for a given URL is easy and declarative. You can even mix-and-match URL parameters and normal props.

```js
<Router>
  <A path="/" />
  <B path="/b" id="42" />
  <C path="/c/:id" />
</Router>
```


---


## React Compatibility

This project includes [preact-compat] alias in as `react` and `react-dom` right out-of-the-box.  This means you can install and use third-party React components, and they will use Preact automatically!  It also means that if you _don't_ install third-party React components, `preact-compat` doesn't get included in your JavaScript bundle - it's free if you don't use it 👍

---


## License

MIT


[Preact]: https://github.com/developit/preact
[preact-compat]: https://github.com/developit/preact-compat
[webpack]: https://webpack.github.io

---

Based on [preact-boilerplate](https://github.com/developit/preact-boilerplate)
