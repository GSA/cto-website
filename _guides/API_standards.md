---
title: API Standards
category: APIs
audiences:
  - Developers
---

GSA has developed [API Standards](https://github.com/GSA/api-standards) that capture GSA's recommended best practices, conventions, and standards for Application Programming Interfaces (APIs). The standards include these critical items:

In short, we consider the following as good practice:

1. Always Use HTTPS - All APIs should require and use [HTTPS encryption](https://en.wikipedia.org/wiki/HTTPS) (using TLS/SSL). APIs should not allow HTTP connections.
2. Add Your API To The GSA API Directory = A directory of GSA public APIs is available at open.gsa.gov/api. 
3. Use The api.data.gov Service - The [api.data.gov service](https://api.data.gov/about/) is an API management service for federal agencies. GSA APIs should use the api.gsa.gov base domain with this service.
4. Provide Support For Versioning - Versioning APIs makes the process of adding new functionality smoother and less disruptive to existing API consumers.
5. Provide Public Documentation - The developer's entry point to an API is its documentation. Clear and functional documentation improves the on-boarding process 
6. Provide A Feedback Mechanism That Is Clear and Monitored - Having an obvious mechanism for clients to report issues and ask questions about the API demonstrates that the API can be counted on for production usage. 
7. Provide An OpenAPI Specification File - Providing this allows consumers to understand the details and can be used by development or testing tools accessing your API.
