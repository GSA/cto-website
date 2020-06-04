---
title: API Standards
category: API
audiences:
  - Developers
---

GSA has developed [API Standards](https://github.com/GSA/api-standards) that capture GSA's recommended best practices, conventions, and standards for Application Programming Interfaces (APIs).

API Security is governed by the GSA IT Security Procedural Guide: API Security CIO-IT Security-19-93. Reference that guide for security-related topics such as HTTPS encryption, authentication, and authorization.

The API standards include these required items:

1. **Add Your API To The GSA API Directory** - The GSA API Directory is available at [https://open.gsa.gov/api](https://open.gsa.gov/api). 
2. **Use The api.data.gov Service** - The [api.data.gov service](https://api.data.gov/about/) is an API management service for federal agencies. GSA APIs should use the api.gsa.gov base domain with this service.
3. **Provide Support For Versioning** - Versioning APIs makes the process of adding new functionality smoother and less disruptive to existing API consumers.
4. **Provide Public Documentation** - The developer's entry point to an API is its documentation. Clear and functional documentation improves the on-boarding process. 
5. **Provide A Feedback Mechanism That Is Clear and Monitored** - Having an obvious mechanism for clients to report issues and ask questions about the API demonstrates that the API can be counted on for production usage. 
6. **Provide An OpenAPI Specification File** - Providing this allows consumers to understand the details and can be used by development or testing tools accessing your API.
7. **Follow The Standard API Endpoint Design** - This allows for a standardization of all Public APIs released for easier consumption. Exceptions: Not required for SOAP APIs. Not required for APIs that were in progress or production prior to December 2018.
