Internet (refresher)

MAC addresses are assigned to each computer in a network. Each message contains the sender's and recipient's MAX addresses, and the switch remembers the sender's address so it can send it back if ever someone sends a message to that address. It otherwise sends it to all its other connections and stores it once it receives a message back so it can send to it directly after.

Multiple computers are connected to many switches in what we call a local network.

We use a router to connect devices with their IP address which is a 4 number sequence like 142.250.290.78 and act a bit like a house address and ar assigned whena. computer connects to a network where they share the same IP network prefix. This means a router can directly forward to a group of computers via local networks which makes it more optimised. It doesnt need to learn all the individual addresses of all the individual computers.

We use the pre existing TCP base network which was built for the telephone and we connect to it by using a piece of equipment called a modem. It turns the info managed by the internet into information manageable through the telephone network. Most modern internet boxes are a combination of a router, a modem, and a switch.

We connect it to the big network we want to reach, we connect to a Intenet Service Provider which can communicate with other ISPs' routers. So different ISPs connect to local networks.

## Domain names

We replace IP addresses with domain names because they are more readable.

Internet = technical infrastructure which allows computers to connect to eachother.

Web = a service built on top of the internet infrastructure

Mail and IRC are other services built on top of the internet.

Intranet -> extranet -> internet

How the internet wokrs:

- big wire with multiple servers(special computer) can connect to that big wire to communicate with other servers.
- These servers contain web pages which are stored on the server's hard drive.
- Our computers are not servrs: they are called clients. This is because they are connected indirectly to the internet usign ISP like swisscom.
- when information is sent over the internet, computers break the information into smaller chunks which are called packets. They are reordered in their original order once they arrive.
- Routers are responsible for directing the packets to the right destination. Maybe 10-15 routers helped get your information.
- The addresses of the successive routers are added around the data packet like layers. When it gets to the server, the server sends it back and creates layers with an identical wrapper and each router unwraps the successive layers to know how to send it back.

## difference between web browser, website, web server, and search engine

web page: A document that can be displayed in a web browser. They are written in HTML language.

website: a collection of web pages grouped otgether in a single resource with links connecting them together

Web server: a computer that hosts a website on the internet.
