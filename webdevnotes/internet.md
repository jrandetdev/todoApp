# Internet (refresher)

**In one line:** the internet is the physical network that carries data between machines; the web is one service running on top of it.

The sections build outward — one cable, then a local network, then the whole world, then names, then the web on top. If a later section stops making sense, the gap is usually in an earlier one.

---

## 1. Two machines on the same wire — MAC addresses and switches

A **MAC address** identifies each machine on a network. Every message carries the sender's and the recipient's MAC address.

A **switch** connects many machines and learns as it goes:

- It remembers which of its sockets a sender's address arrived on, so it can send replies straight back there.
- If it doesn't know the recipient yet, it sends the message out to all its other connections.
- Once an answer comes back, it stores that address too, and can go direct from then on.

## 2. Local networks

Many computers connected through many switches make up a **local network**.

## 3. Connecting networks to each other — routers and IP addresses

A **router** connects networks to each other, using **IP addresses** rather than MAC addresses. An IPv4 address is four numbers, like `142.250.190.78` — each one between 0 and 255. (My first draft had `142.250.290.78`; `290` can't exist. Good sanity check.)

An address is assigned when a computer connects to a network, and every machine on that network shares the same **network prefix** — the leading part of the address.

That shared prefix is the whole point: a router forwards to an entire group of machines via their local network, so it never has to learn every individual address. This is what makes routing scale.

## 4. Reaching the rest of the world — modems and ISPs

> ⚠️ **Correction to my first draft.** I wrote "the pre-existing TCP network built for the telephone". Two separate things had merged in my head:
>
> - the **telephone network** is the physical infrastructure that already existed everywhere, so we reuse it;
> - **TCP** is a protocol — a set of rules for how data is packaged and acknowledged. It isn't a cable and it has nothing to do with telephones.

A **modem** converts the information the internet deals in into signals the telephone network can carry, and converts them back at the other end.

To reach the wider network rather than just the neighbours, we connect to an **ISP** (Internet Service Provider) — Swisscom, for example. An ISP's routers talk to other ISPs' routers, and each ISP connects its own local networks. That mesh of ISPs is the internet.

Most home "internet boxes" are a router + modem + switch in one case.

## 5. Domain names

IP addresses are hard to remember, so we replace them with **domain names**.

## 6. How data actually travels — packets

- A **server** is a special computer that connects to the network to communicate with other servers. Web pages live on a server's hard drive.
- Our own machines are not servers: they're **clients**, connected indirectly through an ISP.
- Information sent over the internet is broken into small chunks called **packets**, and put back in order on arrival.
- **Routers** direct the packets to the right destination — maybe 10–15 routers handle a single message.
- The address of each successive router is wrapped around the packet in layers, like an onion. The server replies with an identically wrapped packet, and each router unwraps its own layer to know where to send it next. (The proper name for this wrapping is **encapsulation**.)

## 7. Internet vs web

- **Internet** = the technical infrastructure that lets computers connect to each other.
- **Web** = a service built on top of that infrastructure.
- Mail and IRC are *other* services on the same infrastructure — which is why "the internet is down" and "the web is down" aren't the same claim.
- Scale, smallest to largest: intranet → extranet → internet.

## 8. Web vocabulary

- **Web page** — a document that can be displayed in a web browser. Written in HTML (layout), CSS (styling information) and JS scripts for reactivity as well as media.
- **Website** — a collection of web pages grouped as a single resource, linked together.
- **Web server** — a computer that hosts a website on the internet. "hosting" means that the web pages and their associated files are on that computer. The web server will send the files it is hosting to a client requesting them.
- **Search engine** — Accessible through a web browswer. And is like a library. search engine (search index) -> website(library section) -> web page ( book) --> all stored in a web server (library). A search engine is a spcial kind of web service whereas the browser is a software.

How a request is sent:

1. Resource I want to access are requested through technology called HTTP which uses a language of verbs such as PUT PATCH DELETE and GET to describe what the web server should do.
2. If request is successfulm the web server will send a HTTP response back to the web browser containing the requested resource
3. In some cases the requested resource will fire more HTTP requests which will result in more responses.
   1. when a website is loaded, initially only the index.html file is requested
   2. when that file is received, it will start to parse it and will receive instructions to make more requests such as images, style information etc.
   3. when all the resources have been requested, the web browser parses and renders them as required before displaying the result to the user.


### 9. How the web works

clients --> any device that connects to the internet to get information from somewhere. 

web browser: not an OS like windows or macs and is not a search engine which is used to find documents. A broswer allows you to visit websites by displaying them for you. It is the most important piece of software on your computer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               A switch receives a message for an address it has never seen. What does it do, and what does it learn from the reply?

1. Why does a router not need to know every individual machine's address?
3. What's wrong with the IP address `142.250.290.78`?
4. Which of these is a physical thing and which is a set of rules: the telephone network, TCP, a modem, an IP address?
5. Your machine is a client, not a server. What makes the difference?
6. A packet passes through twelve routers. What has been added to it, and who removes it?
7. Email is not the web. What *is* it, then, in terms of section 7?

## Still to fill in

- The name → IP lookup has a name and a system behind it: **DNS**. How does a browser find the IP for a domain name it has never seen?
- **Intranet** and **extranet** — I wrote the arrow in section 7 without defining either.
- **Web browser** and **search engine** in section 8 — the heading promises four terms and I defined two.
- Where does a **URL** fit? It contains a domain name, but it's more than one.
- IPv4 addresses are four numbers. What is IPv6 and why did it appear?

## Sources

- [MDN — How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work) — sections 1–7 above
- [MDN — What is a web server?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) — the website vs web server distinction
- [MDN — What is a URL?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- [MDN Glossary — DNS](https://developer.mozilla.org/en-US/docs/Glossary/DNS)
- [MDN Glossary — Packet](https://developer.mozilla.org/en-US/docs/Glossary/Packet)
- [MDN Glossary — Router](https://developer.mozilla.org/en-US/docs/Glossary/Router)
- [MDN Glossary — Browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser)
- [MDN -- how the web works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works#clients_and_servers) (great)
- [MDN Glossary — Search engine](https://developer.mozilla.org/en-US/docs/Glossary/Search_engine)
