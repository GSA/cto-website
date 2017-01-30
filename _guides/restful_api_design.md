---
title: RESTful API design
category: Development
audiences:
  - Developers
---

![RESTful API image demonstrating how an API works with a client and DB]({{ site.baseurl }}/assets/img/RESTfulAPI.png)


This guide follows the practices outlined by Thomas Hunter on [Code Planet](https://codeplanet.io/principles-good-restful-api-design/).

Some major points to consider as oulined in Thomas's document, our API Strategy, and 18F's API guides:

1. Good API design begins with thought about audience, data to be transferred, technology to be used (documentation and support, programming language, verbs, security, etc.)
2. Consider the verbs - Get, Post, Put, Patch, and Delete.  In most cases with public data, Get will be utilized.  When considering system to system interaction, others may be used to transfer data.
3. Determine the endpoints - root or location of the API and what will be transmitted, between what two connectors (servers, mobile app, DBs, etc.).
4. Utilize status codes - 404 not found, 200 ok.
5. Authentication is key or should use OAuth and/or keys but share documentation with everyone.

Remember: there is a marketing, engagement, business aspect to API creation and utilization...don't consider APIs only a technological tool rather a core business component for openess, creativity, efficiency, etc.