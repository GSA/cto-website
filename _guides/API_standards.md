---
title: API Standards
category: Development
audiences:
  - Developers
---

As GSA continues down the past to "open all the things" and take an "open first" approach to data, APIs, code, etc., we consider standards around how to make "things" open.  

We are developing draft [API Standards](https://github.com/GSA/api-standards). We invite you to participate in the discussion of those standards as they develop.

In short, we consider the following as good practice:

1. Primarily speaking of RESTful APIs (some consideration should be given to maturing SOA/SOAP and other ETL type code/transactions).
2. Standard use cases - bulk data, staying up to date, and transactions - in every case, as we have data, we should support through API exposure of that data.
3. Support your API! Have a real life person who can evangelize, mature the code, and assist users.
4. Utilize [api.data.gov](http://api.data.gov/docs/gsa/) as a gateway to your APIs. This provides key management, analytics, and throttling.
5. Use JSON!  There are other types of machine-readable formats that would work but recently JSON has become the most common and easiest to use.
6. Consider keys, HTTPs, error handling, etc.  These need to be executed on the GSA side to provide users appropriate access and messaging.
7. Use the [GSA API Documentation Template](https://github.com/GSA/api-documentation-template).  Clone it, change it, make it look good, make it work for consumers.

Good API management starts with the program office that recognizes the need to expose data in an easy to understand way.  APIs create the connection to share with external customers, support mobile apps, transition from legacy technology, and many other situations.
