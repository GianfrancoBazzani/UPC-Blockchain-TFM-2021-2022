# IPFS

### Wat is IPFS?

The Interplanetary File System (IPFS) is a distributed, peer-to-peer (p2p) storage network used for storing and accessing files, websites, applications, and data.
Content is accessible from peer nodes located anywhere in the world. These nodes relay information, store it, or both. Some call it the hard drive for blockchain and Web3, though its power extends much further.

IPFS knows how to find data by its contents, not its location. the data are represented by string of numbers i.e (QmXo…), and your computer instead of asking for the data to a centralized server, your computer uses IPFS to ask lots of computers around the world to share the data with you. It can get your desired data from anyone who has it, not just a unique server.

And, when you use IPFS, you don't just download files from someone else — your computer also helps distribute them. When your friend a few blocks away needs the same Wikipedia page, they might be as likely to get it from you as they would from your neighbor or anyone else using IPFS.

IPFS makes this possible for not only web pages but also any kind of file a computer might store, whether it's a document, an email, or even a database record.

Making it possible to download a file from many locations that aren't managed by one organization:
- Supports a resilient internet.
- Makes it harder to censor content.
- Can speed up the web when you're far away or disconnected.

### Content addressing

Identify a file by where it's located (what computer it's on and where on that computer's hard drive it is), that doesn't work if the file is in many places. Instead of being location-based, IPFS addresses a file by what's in it, or by its content. The content identifier is a cryptographic hash of the content at that address. The hash is unique to the content that it came from. The hash is unique to the content that it came from, it also allows you to verify that you got what you asked for — bad actors can't just hand you content that doesn't match. Because the address of a file in IPFS is created from the content itself, links in IPFS can't be changed.

Of course, people want to update and change content all the time and don't want to send new links every time they do it. This is entirely possible in an IPFS world, but explaining it requires a little more info than what's within the scope of this IPFS introduction. Check out the concept guides on [IPNS](https://docs.ipfs.io/concepts/ipns/), the [Mutable File System (MFS)](https://docs.ipfs.io/concepts/file-systems/#mutable-file-system-mfs), and [DNSLink](https://docs.ipfs.io/concepts/dnslink/) to learn more about how changing content can work in a content-addressed, distributed system.

It's important to remember in all of these situations, using IPFS is participatory and collaborative. If nobody using IPFS has the content identified by a given address available for others to access, you won't be able to get it. On the other hand, content can't be removed from IPFS as long as someone is interested enough to make it available, whether that person is the original author or not.

### Participation

Today's World Wide Web is structured on ownership and access, meaning that you get files from whoever owns them — if they choose to grant you access. IPFS is based on the ideas of possession and participation, where many people possess each others' files and participate in making them available. That means IPFS only works well when people are actively participating.

By default, your computer shares a file with others for a limited time after you've downloaded it using IPFS. You can also make content available more permanently by pinning it, which saves it to your computer and makes it available on the IPFS network until you decide to unpin it. Some people have begun offering pinning services based on IPFS. But since IPFS makes this kind of sharing a built-in feature, you can also collaborate with friends or partner with institutions to share each others' files.

# Filecoin

# Textile
### Buckets

# Estuary ([estuary.tech](https://estuary.tech/)).
