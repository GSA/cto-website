---
title: DevOps Glossary
category: Agile
audiences:
  - Developers
  - Designers
  - Project Managers
---

**Checking In**: The process of pushing local development code changes to the common source repository.

**CI Server**: A tool used to build and test source code; tells the developer if their latest code builds were successful and if they continue to pass tests.

**Continuous Delivery (CD)**: A software engineering approach in which teams produce software in short cycles, ensuring that the software can be reliably released at any time and supports frequent and faster building, testing, and releasing of software.

**Continuous Deployment**: An extension of *Continuous Integration*; aims at minimizing the time elapsed between development writing a new line of code and the new code being used by live users in production.

**Continuous Integration (CI)**: The practice of developers ensuring that code is frequently checked in and integration tested with its dependencies with each check-in.

**Deployment Pipeline, or Pipeline**: This is the set of phases that code changes go through before it is complete and ready to be delivered to production; typically includes a “build," “unit test,” “functional test,” “performance test,” and “deploy” phases. Various automated tests can be run at different stages. Only once the code goes through the entire deployment pipeline can the software be delivered to production.

**Development Environment**: Where developers create, integrate, build, and test code.

**Green Build**: A green build, or version, is one that has passed the tests for that particular stage of the development and delivery process. Generally, a build or version of the software will not be promoted to the next stage of the deployment pipeline unless it is “green." The opposite of a green build is a red build (see below).

**Incremental Development**: (Not to be confused with *Iterative Development*) A small chunk of the product gets built at a time until it is complete. Pieces are added on in each increment, and those increments may be small or large. You can use *Continuous Integration* with incremental development, but it can be harder to achieve *Continuous Delivery* or *Continuous Deployment* as you must wait until all increments are completed to deliver value. A great illustration of the difference between incremental and iterative development is Jeff Paton’s Mona Lisa.

**Integration**: All code that is written by individuals or teams needs to be combined. In *Continuous Integration*, we generally mean software from individuals needs to be consolidated on a regular basis. In *Continuous Delivery*, we often mean software from different teams is integrated together to create the whole product.

**Iterative Development**: (Not to be confused with *Incremental Development*) A small chunk of the product gets built at a time and is refined until it is complete. The product is built iteratively where the same pieces are reworked each iteration. Change is expected and planned between features in different iterations. You can use *Continuous Integration*, *Continuous Delivery*, or *Continuous Deployment* with iterative development. A great illustration of the difference between incremental and iterative development is Jeff Paton’s Mona Lisa.

**Master / Trunk / Mainline**: The “master," “trunk,” or “mainline” branch is the main branch of the source repository. Most developers use trunk-based development, meaning that they will always integrate their changes to the mainline branch. Others use branch-based development where individual developers, or teams, will have their own branches for different features.

**Production Environment:** This is the place where software gets deployed or released to the customer, or end user; often referred to as “in production,” “in prod,” or “live."

**Red Build**: A red build, or version, is one that has not passed the tests for that particular stage of the development and delivery process. Generally, a build or version of the software will not be promoted to the next stage of the deployment pipeline if it is “red." The opposite of a red build is a green build (see above).

**Source Repository**: This is where source code lives. The source repository will contain all the code after developers check in their changes to it.

**Test Automation**: High quality test automation is needed to support *Continuous Integration* and *Continuous Delivery*. Tests ensure that the software will work as expected. Automated tests are coded tests that run automatically once code is checked into the common source repositories. With *Continious Integration*, the unit tests are run each time the software gets integrated and built. If the tests don’t pass, that version of your software is determined as broken or “red.” In the case of a broken build, the developer responsible for the malfunctioning code has fix it or “make it green.”

**Unit tests**: Unit tests are automated tests in code that test low-level, single pieces of code to ensure that they are usable and working as expected. Unit tests are considered a prerequisite for practicing *Continuous Integration* and *Continuous Delivery*.
