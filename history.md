### [notes.md](./notes.md) <br/>

## The internet started with the formation of a global communication network

- **ARPANET**, created by the ARPA (Advanced Research Projects Agency) of the DoD to share nuclear defence research between universities.
  - Overview: linked a network computers at Pentagon-funded reasearch institutions over telephone line.
    Created due to military concerns that the Soviets may use jet bombers to launch suprise nuclear attacks at the US.
    Cold War - demand for communication system without a central core or headquarters which would leave them vulernable to attack.
    As more academic universities connected the network started to look like the system the miltary needed.
    Two computers would dynammically discover a path to each other without the use of a central authority. - "a network system serves the important function of establishing a cohesive architecture that allows a variety of equipment types to transfer information in a near-seamless fashion. architecture - [IBM's Systems Network Architecture (SNA)](https://www.ibm.com/docs/en/zos-basic-skills?topic=implementation-what-is-systems-network-architecture-sna)." - Basic Network Types: - LANs: connect computers + peripheral devices in a limited area by means of links (wires, fiber optics, Wi-Fi) that transmit data.
    Typically it consists of two or more file servers (printers, personal computers), which enable each computer on the network to access a common set of files.
    The centeral operating system software, interprets input and instructs networked devices and access centrally located processor or programs.
    LANS with different architectures are linked by "gateways", which convert data as they pass between systems. - WANs: connect computers and smaller networks to larger networks over larger area (ex. continents).
    May link theses computers by cables, satellites or more commonly via modem (communication over telephone lines.) The internet is a WAN. - **SAGE (Semi-Automatic Ground Environment, 1960s)**: 23 "direction centers" with mainframe computers to track 400 planes and distinguish enemy + friendly aircraft.
    Would take six years and $61 billion to implement. [seminal 1960 essay](https://www.merriam-webster.com/dictionary/seminal)
    Joseph Licklider joined the ARPA in 1962 (to 1964) and emphasized interactive computing.
    During his tenure in the the ARPA's Information Processing Techniques Office, about 70% of the U.S computer-science research was funded by ARPA.
    Lick believed that computers and humans working together would create a better world and helped foster radical ideas.
    ARPA birthed computer networks, the interent, computer graphics, parallel processing, computer flight simulation, etc.
    _Teletype terminals: systems development corp in santa monica, uc berkeley genie project, mit compatible time-sharing system project._ - ARPANET (late 1960s): These teletype terminals spurred Robert Taylor (IPTO director in 1966) to idea that having a single computer language protocol for communication between terminals would be more efficient leading to the creation and funding of ARPANET. - [The Computer as a Communication Device by Robert Taylor] - To share information at the time required the use of packets (Paul Baran - Rand Corporation Think Tank). **Packets - small cluster of information broken up from larger messages.** They do not follow the same route and do not arrive in order, a modem is used at receiver;s end to reassemble it as each packet contains a "header" that reveals which part of the larger message it represents, w/ instructions for reassembling it. Mathematical verification schemes were used to insure data transmission. The network - computerized switches that foward packets, these packets often used existing telephon infastructure as it presented the least resistance, preventing logjams. - 1971 **first e-mail program**, Ray Tomlinson - BBN. - Computer communications proctocol, gateway b/w networks: **TCP/IP (transmission-control protocol/Iternet protocol) [Vinton Cerf]**. In 1983, ARPANET divided with MILNET being the miltary and defence. In 1983, "Internet" was adopted (referring to the combination of these two networks - internetwroking) and TCP/IP came into wide use. - TCP: packet switching to connect computers on a network, combined with IP to determine how computers transfer packets between each other. - January 1st 1983 TCP/IP became the universal protocol, soldifing itself when built into a version of the UNIX operating system and Sun Microsystems workstations. - System shut-down in 1989 and decomissioned in 1990.
- **World Wide Web** is an information retrieval service, development started in 1989 by Tim Berners-Lee and colleagues at CERN. They created HTTP (HyperText Transfer Protocol) that standardized communication between servers and clients - general release 1992.
  - HyperText: a hyperlink involving text. Hyperlinks have a tree link structure.
    - A hypertext document is written in HyperTect Markup Language (HTML) and assigned a Uniform Resource Locator (URL).
      - Markup refers to elements used to annotate text, images and other content. 
  - Client-server format: servers - computer programs that store and transmit documents to other computers on the network when asked and clients - programs that request documents from a server as user asks them to.
  - Mosaic and Netscape: the most popular web browser of the late 90s.
- **Browser** software allows users to view retrieved documents. A developers jobs is to ensure smooth interactions and render time is key, we must ensure that the main thread can complete all the work we throw at it and still be available to handle user interactions.
  - Main thread is where a browser processes user events and paints, JavaScript runs on the main thread so less work required on the main page means decreased event processing or painting delays and the more responsive thread is to user.
  - The biggest threat to a fast loading page is **Latency** - the network time it takes for a requested resource to reach its destination. High latency means it takes a longer time (bad). Network latency is the time it takes to transmit bytes (a packet of data) from source to destination and media codec latency is the time it takes for source data to be encoded or decoded and reach consumer.
  - **Navigation** occurs whenever a user requests a page by entering a URL into the address bar and other actions. Goal here is to minimize the amount of time navigation take to complete.
  - **Domain Name System (DNS Lookup)**. In order to navigate to a web page we need to find where the assets for tha page are located. DNS lookup occurs when you have not visited a page before and your browser request it, it is then fielded (categorized into indiviudal fields - data storage) by a name server which responds with an IP address, which is cached (stored) for a time, speeding up susequent requests by retrieving the IP address from cache instread contacting a name server again.
    - [invented in 1983](https://runcloud.io/blog/what-is-dns), connecting IP addresses to names, amking browsing easier. In the 70s the number of computers grew and IP address were manually assigned as computers were only able to communicate using numbers and problems arose with booking numbers and IP addesrees. Paul Mockapetris designed a systm that automatically mapped IP address to domain names.
    - usually only needs to be done once per hostname for a page to load, but it must be done for each unique hostname the request page references.
  - once we have the IP address the browser sets up a connection to the server using a TCP three-way handshake/ **SYN-SYN-ACK (SYNchronize, SYNchronize-ACKnowledgement, ACKnowledgement)**. It is designed so that two computers that want to pass information back and forth to each other can negitiate the parameters of the connection before transmitting data such as HTTP browser requests.
    - the initiator (browser) sends a TCP SYN packet to the other host (server).
    - the server receives the SYN and sends back a SYN-ACK.
    - the initiator receives the servers SYN-ACK and sends an ACK, server receivs it and the TCP socket connection is established.
  - TLS (Transport Layer Security) is another handshake required to secure connection established over HTTPS. It determines which cipher will be used to encrypt the communication, verifies the server and establishes that a secure connection is in place before transferring data. worth the latency expense as the data transmitted between browser and web server cannot be decrypted by a third party.
  - Now, browser sends an initial HTTP GET request on behalf of the user (for websites this is an HTML file). server receives it and replies with relevant HTML content.

- **JS**

JS orginally designed only to run in browsers, executed by their JS engines. Node takes the open sourced v8 JS engine and embeds it inside a C++ which allows us to run JS outside of browser.  

JS is one the implementations of a standard specification called ECMAscript and there are many specification standards, new standards are often equiped with new features. Sometimes new standards are not implemented on certain browsers and in these cases it is useful to have a transpiler.
  - Typescript is a free open source language developed and maintained by Microsoft, it is a typed superset of JS that compiles to superset of JS. 
    - to install TS globally: npm install -g typescript
    - then create a tsconfig.json using tsc npm init -y. tsconfig.json file specifies the root files and the compiler options required to compile the project.
    - uncomment "sourceMap": true so that we have a mapping ts to js file to help with debugging.  
    - edit "outDir": "./" in tsconfig and build (Crtl, Shift B) this is where all the js files will be located
    - add script tag with element src pointing to js file

[scope](https://www.bing.com/ck/a?!&&p=fad073e775c153c8374c650a4d87bbedd99e24c79d2f89759019ce2e38c725e0JmltdHM9MTczOTQwNDgwMA&ptn=3&ver=2&hsh=4&fclid=0d5c47c3-0a99-637d-1c53-532e0b1d62e0&psq=js+functional+scope&u=a1aHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9HbG9zc2FyeS9TY29wZQ&ntb=1)
Hoisting is a JS mechanism where variables and function declarations are moved to the top of their scope before code execution, meaning you can use variables and functions before they are declared in the code. <br/>
The let keyword has block scope{}, must be declared before use and cannot be redeclared. 
The const keyword is like the let keyword but it must have an assigned value when declared. 

Vite is a build tool used to set up development environments for frameworks like Vue and React. Provides fast development with minimal configuration and overhead