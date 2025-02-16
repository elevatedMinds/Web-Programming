# CS 260 Notes

[Choosi](https://justjess260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## AWS Notes

[AWS](https://github.com/webprogramming260/.github/blob/main/profile/essentials/awsAccount/awsAccount.md)

- EC2 (Elastic Compute Cloud) it is an infrasture as a service. Used to rent virtual machines, store data on virtual drives, distrubute load across machines and scale services using auto-scaling group.
- [WSL SSH Service Setup](https://www.youtube.com/watch?v=VjkE4dqdHX8&t=38s)
- [Connect to EC2 from Windows WSL](https://cvsudheer.medium.com/connect-to-ec2-from-windows-wsl-6f6cf365f743)

## HTML + HTTP (Web 1.0)

HTML facilitates communication between web browsers and servers, making it a crucial skill for web developers. The web page concept has morphed into a web application, where a page now represents either a single page application (SPA) or a large group of hyperlinked pages that form a multi-page application (MPA).

- tags refer to a delimited textual name that we use to designate the start and end of an HTML element as it appears in an HTML document.
- The head element contains metadata about the page (description) and the page title (all things you want to include but isn't the content you are showing to use). The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content.
- Attributes describe the specific details of the element. Attributes describe the specific details of the element.
  [Basic elements, tags, special characters](https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md) <br/>
  [Input elements](https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md)
- [/bin/bash^M:](https://askubuntu.com/questions/304999/not-able-to-execute-a-sh-file-bin-bashm-bad-interpreter) bad interpreter: No such file or directory
  The script indicates that it must be executed by a shell located at /bin/bash^M. There is no such file: it's called /bin/bash. The ^M is a carriage return character. Linux uses the line feed character to mark the end of a line, whereas Windows uses the two-character sequence CR LF. Your file has Windows line endings, which is confusing Linux. Remove the spurious CR characters. You can do it with the following command:
  sed -i -e 's/\r$//' deployFiles.sh
  - run deployFiles.sh from the project directory that you want to deploy.<br/>
    ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon

## CSS

CSS (Cascading Style Sheets) is used to style HTML and to create complex renderings (complex fonts, animated pages,etc).

- p {color: red} -> the whole structure is called a ruleset.
  - selector at the start. declaration specifying which element's property you want to style -> in it is
    the property (features of element that you can change) and the property value. (:) used to seperate each declaration.
    - id selectors are more specific than classes, and unlike classes are unqiue and should only be used once.
- using style attribute: <p style="color:green">CSS</p>
- using style tag within the head element
- using link tag in the head element: <br/>
<link rel="stylesheet" href="styles.css" />
- CSS defines everything as boxes. Within an element's box there are several internal boxes. The innermost box holds the element's content.
  - padding: the space around the content like <p>
  - border: the solid line just outside the padding
  - margin: the spave around the putside of the border
- [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units) </br>
- CSS validation service (W3C): used to detect problems in css
- selecting nested elements -> h1 span or .highlights
  - To select only an em that is nested inside an element, you can use a selector called the descendant combinator, which takes the form of a space between two other selectors.
  - we can style things based on their state- a:link {color: pink;} a:visited {color: green;}
- **specificity overrides element selectors**

## JS (Web 2.0)

JavaScript is based on concepts in C, Java, Scheme. It is interpreted language, making it portable but also suspetible for errors (undefined variable). Browser compatibility is an issue when developing a web application, consult side like (MDN)[https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs] to see how well the feature is supported. </br>
You can execute a line of JavaScript with Node.js from your console with the -e parameter.</br>
You can also run node in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.</br>
Pre-made JS packages can be used for comman tasks
1. install package locally with Node Package Manager (NPM)
  - NPM gives access to large collection of packages needed to set up project by creating a directory of JS files and running init
2. add a require statement in code to reference it</br>
```sh
➜  npm init -y
```
When you create a project, a package.json file is created. This file has three main things:
1. Project information like name and entry JavaScript file.
2. Scripts you can run, such as test or start.
3. Packages that your project depends on.

- package-lock.json: Tracks the exact version of the packages installed.
- node_modules: A folder where installed packages are stored. Don't check this into source control. Add it to your .gitignore file.

You can insert JavaScript into HTML with one of three ways:
1. Script block: Directly including it in the HTML within the content of a script element
2. External code: Using the src attribute of the script element to reference an external JavaScript file.
3. Inline event attribute: Putting JavaScript directly inline as part of an event attribute handler.

Web frameworkds make it easier to build web-apps by providing tools for common tasks like organising code and supporting different devices. Some frameworks create new formats that combine things like HTML and JS into a single file like React JSX. Vue combines HTML, CSS, JS into a single file. Svelte is similar to Vue but requires a transpiler to generate browser ready code. Angular keeps JS, HTML, CSS in seperate files, organized by components.

### React and JSX

React is an open source library for building UI's, not a framework, focus on UI, Rich ecosystem. It was created and is maintained by Facebook with a huge community and an in demand skillset. Component based architecture, which allows us to reuse code and seamlessly integrate reacte into any application.
React uses a JavaScript version called JSX, which combines HTML and JavaScript in one file. JSX is converted into browser ready code using tools like Vite or Babel.

As part of the move to React, we convert Simon from a multi-page application (MPA) to a single-page application (SPA). The browser only loads a single HTML file (index.html), and then we use JavaScript to interactively change the rendered content and components.
1. Phase 1: The first phase will covert the Simon HTML/CSS code into a modern web application using Vite and React. This will introduce routing, modularize the code, and remove redundancy.
2. Phase 2: The second phase will introduce the JavaScript necessary to make Simon interactive and functionally complete.

#### Phase 1
- install NPM package
- npm install vite@latest -D
  edit .json file
  ```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
  ```

The process of converting code from one way of doing things to different way is called porting.

Start by changing the project structure.
1. Create a public directory that is going to hold all the application image and sound assets
2.  Create a src directory where we will put all of the React code. Under the src directory we create a folder for each of the view components that represent the major functionality of the Simon application.
3. When Browser gets response from server and starts rendering, it goes to the root file which in most cases is public/index.html, and (render)[https://stackoverflow.com/questions/65531046/what-is-the-purpose-of-using-demo-or-root] the same file most first.

Inside this html a <div> element is written whose id is "root"

<div id="root"> <div>

Then control goes to another file that is index.js.

Inside this .js file, a component is used in most React apps this component is called <App/>. 

This <App/> component is the most first component that is rendered on the screen. Every Component is defined inside this component or it's children.
  - any function in JS that returns some kind of JSX code
3. npm create vite@latest react-lib -- --template react-ts
  - This will create a folder inside your current directory called "react-lib"
  - files and directories in the project 
    - App.tsx : This is the main component of your React application. It contains the structure and logic for your app’s user interface. You can define the layout, components, and functionality within this file. During the development, Vite will compile this src/main.ts file into a JavaScript bundle and inject it into the index.html file.
      - Vite is a lightweight web server that allows us to run our React applications
    - index.tsx : This file is the entry point of your React application. It is responsible for rendering the root component (App.js) and attaching it to the HTML document. It sets up the React DOM and provides the initial rendering of your app.
    - App.css : This file contains the CSS styles specific to the App.js component. It allows you to style the elements and apply visual formatting to your app.
    - index.css : This file contains global CSS styles that apply to the entire application. It allows you to define styles that should be applied globally, affecting all components within the app.
    - package.json file is used to manage dependencies, scripts, and configurations.

```
npm init -y
npm install vite@latest -D
```

React Bootstrap that wraps the Bootstrap CSS framework in React components. This allows you to treat the Bootstrap widgets, such as Button and Modal, as a React component instead of just imported CSS and JavaScript.
```
npm install bootstrap react-bootstrap
```

in the components where you want to refer to the Bootstrap styles, you can import the Bootstrap style sheet from the imported NPM package just like you would other CSS files.
- JSX file containing a React component element named Demo would cause React to load the Demo component, get the JSX returned from the component, and insert the result into the place of the Demo element.

## Git & GitHub

GitHub - host instructions, notes and backup code.
[Essential GitHub info](https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md)
Git - Git provides two valuable functions. First, it allows you to track versions of files in a directory. Second, it allows you to clone all of those versions to a different location, usually to a different computer. We are going to focus on tracking versions in this instruction and cover cloning repositories when we talk later about GitHub.
[Git](https://github.com/webprogramming260/.github/blob/main/profile/essentials/git/git.md)

- Forks <br/>
  Codepen:
  - https://codepen.io/jessicae/pen/pvzQaYG
  - https://codepen.io/jessicae/pen/xbKQMGB
  - https://codepen.io/jessicae/pen/xbKQMVe
- Pull + Push Requests
