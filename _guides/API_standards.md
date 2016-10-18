---
title: API Standards
category: Development
audiences:
  - Developers
---

As GSA continues down the past to "open all the things" and take an "open first" approach to data, APIs, code, etc., we consider standards around how to make "things" open.  With APIs, we borrow from the [standards](https://github.com/18F/api-standards) developed by our sister organization 18F.

In short, we consider the following as good practice:

1. Primarily speaking of web APIs (some consideration should be given to maturing SOA/SOAP and other ETL type code/transactions).
2. Standard use cases - bulk data, staying up to date, and transactions - in every case, as we have data, we should support through API exposure of that data.
3. Test with an API built in a production envrionment and have a person accountable for the API - a real life person who can evangalize, mature the code, and assist users.
4. Utilize [api.data.gov](http://api.data.gov/docs/gsa/) as a cataloging methods.  Further exposed on [open.gsa.gov/developer](http://open.gsa.gov/developer/).
5. Consider end points with verbs (Get, Post) and URL/HTTP strings.
6. Use JSON!  There are other types of machine-readable formats that would work but recently JSON has become the most common and easiest to use.
7. Consider keys, HTTPs, error handling, etc.  These need to be executed on the GSA side to provide users appropriate access and messaging.
8. Always use the GSA documentation framework! (currently being developed)  Fork it, change it, make it look good, make it work for consumers.

Good API management starts with the program office that recognizes the need to expose data in an easy to understand way.  APIs create the connection to expose data, transfer to a database, use in a mobile app, use by a new application moving away from legacy, etc. SAMPLE CHANGE
