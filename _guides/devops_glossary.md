---
title: DevOps Glossary
category: Agile
audiences:
  - Developers
  - Designers
  - Project Managers
---

**Checking In**: The process of pushing local development code changes to the common source repository.

**CI Server**: A tool used to build and test source code. The CI Server will tell a developer if their latest code builds were successful and if they continue to pass tests.

**Continuous Delivery**: The process of pushing local development code changes to the common source repository.

**Continuous Integration**: The process of pushing local development code changes to the common source repository.

**Development Environment**: Where developers create, integrate, build, and test code.

**Deployment Pipeline, or Pipeline**: This is a set of stages that Steve and Annie’s code changes go through before they are done and ready to be delivered to production. Commonly these will be “build”, “unit test”, “functional tests”, “performance test” and “deploy”. Different automated tests will be run at different stages. Only once the code goes through the entire deployment pipeline can the software be delivered to production.

**Green Build**: A green build, or version, is one that has passed the tests for that particular stage of the development and delivery process. Generally, a build or version of the software will not be promoted to the next stage of the deployment pipeline unless it is “green." The opposite of a green build is a red build (see below).

**Incremental Development**: Not to be confused with *Iterative Development* (see below). In Incremental Development, a small chunk of the product gets built at a time until it is all complete. Pieces are added on in each increment, and those increments may be small or large. You can use CI with incremental development, but it can be harder to achieve Continuous Delivery or Continuous Deployment with incremental development, as you must wait until all increments are completed to deliver value. A great illustration of the difference between Incremental and Iterative development is Jeff Paton’s Mona Lisa.

**Integration**: All code that is written by individuals or teams needs to be combined. We call this integration. In continuous integration, we generally mean software from individuals needs to be consolidated on a regular basis. In continuous delivery, we often mean software from different teams is integrated together to create the whole product.

**Iterative Development**: Not to be confused with incremental development (see above). Iterative development is where a little bit of the product gets built at a time and is refined until it is complete. The product is built iteratively where the same pieces are reworked each iteration. Change is expected and planned between features in different iterations. You can use CI, Continuous Delivery or Continuous Deployment with iterative development. A great illustration of the difference between incremental and iterative development is Jeff Paton’s Mona Lisa.

**Master / Trunk / Mainline**: The “master," “trunk,” or “mainline” branch is the main branch of the source repository. Most people do trunk-based development, meaning that they will always integrate their changes to the mainline branch. Others do branch-based development where individual developers, or teams, will have their own branches for different features.

**Production Environment:** This is the place where software gets deployed or released. Customers using your product or website are most likely using this environment. Also referred to as “in production”, “in prod” or “live”.

**Red Build**: Red is an indication of failure. A red version or build is one where it has not passed the tests for that particular stage of the development and delivery process. Generally a build or version of the software will not be promoted to the next stage of the deployment pipeline if it is “red”. The opposite of a red build is a green build (see above).

**Source Repository**: This is where the source code lives. Steve and Annie have their own local version of the code that they are working on (meaning on their own machines), but the source repository will contain all the code after developers check in their changes to it.

**Test Automation**: High quality test automation is needed to do continuous integration and continuous delivery. Tests are ways to check that the software will work as expected. Automated tests are tests that are coded and automatically run once code is checked into the common source repositories.

In the CI world, the unit tests are run each time the software gets integrated and built. If the tests don’t pass, that version of your software is determined as “not working”, “red” or “broken”. In some workplaces “red lights” or sad sounds occur when this happens.

In the case of a broken build, Steve or Annie (whoever committed the malfunctioning code) need to “fix it”, “make it green” or “get it working”. They can either do this by making a change to the code to fix it, or removing the prior change that broke it.

**Unit tests**: Unit tests are automated tests in code that test low-level, single pieces of code to ensure that they are usable and working as expected. Unit tests are considered a prerequisite for practicing CI and CD.
