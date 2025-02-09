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
- [CSS values and units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- CSS validation service (W3C): used to detect problems in css
- selecting nested elements -> h1 span or .highlights
  - To select only an <em> that is nested inside an <li> element, you can use a selector called the descendant combinator, which takes the form of a space between two other selectors.
  - we can style things based on their state- a:link {color: pink;} a:visited {color: green;}
- **specificity overrides element selectors**

## JS (Web 2.0)

JavaScript is based on concepts in C, Java, Scheme. It is interpreted language, making it portable but also suspetible for errors (undefined variable). Browser compatibility is an issue when developing a web application, consult side like (MDN)[https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs] to see how well the feature is supported. 

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
