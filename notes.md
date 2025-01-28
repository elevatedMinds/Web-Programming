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
- The head element contains metadata about the page and the page title. The body element represents the content structure. The main element represents the main content structure, as opposed to things like headers, footers, asides, and navigation content.
- Attributes describe the specific details of the element.Attributes describe the specific details of the element.
  [Basic elements, tags, special characters](https://github.com/webprogramming260/.github/blob/main/profile/html/introduction/introduction.md) <br/>
  [Input elements](https://github.com/webprogramming260/.github/blob/main/profile/html/input/input.md)
- [/bin/bash^M:](https://askubuntu.com/questions/304999/not-able-to-execute-a-sh-file-bin-bashm-bad-interpreter) bad interpreter: No such file or directory
  The script indicates that it must be executed by a shell located at /bin/bash^M. There is no such file: it's called /bin/bash. The ^M is a carriage return character. Linux uses the line feed character to mark the end of a line, whereas Windows uses the two-character sequence CR LF. Your file has Windows line endings, which is confusing Linux. Remove the spurious CR characters. You can do it with the following command:
  sed -i -e 's/\r$//'
  - run deployFiles.sh from the project directory that you want to deploy.<br/>
    ./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s simon

## CSS + JS (Web 2.0)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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
