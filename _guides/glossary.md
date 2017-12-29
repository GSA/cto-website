---
title: Glossary
category: Agile
audiences:
  - Developers
  - Designers
  - Project Managers
---

<a name="acceptance-testing"></a>**Acceptance Testing**: Formal testing conducted to determine whether or not a system satisfies its acceptance criteria and to enable the customer to determine whether or not to accept the system.

<a name="agile-manifesto"></a>**Agile Manifesto:** A philosophical foundation for effective software development, the Agile Manifesto was created by representatives from Extreme Programming, Scrum, DSDM, Adaptive Software Development, Crystal, Feature-Driven Development, Pragmatic Programming, and others sympathetic to the need for an alternative to documentation-driven, heavyweight software development processes. It reads, in its entirety, as follows:

“We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come to value:
* **Individuals and interactions** over processes and tools
* **Working software** over comprehensive documentation
* **Customer collaboration** over contract negotiation
* **Responding to change** over following a plan"

<a name="automated-build"></a>**Automated Build:** the "build" for a developer consists the process of starting from files and other assets under the developers' responsibility, results in a software product in its final or "consumable" form. This may include compiling source files, their packaging into compressed formats (jar, zip, etc.), production of installers, the creation or updating of database schema or data, etc. The build is "automated" to the extent that these steps are repeatable and require no direct human intervention, and can be performed at any time with no information other than what is stored in the source code control repository.

<a name="backlog"></a>**Backlog:** A collection of stories and tasks the Sprint team will work on at some point in the future. Either the Product Owner has not prioritized them or has assigned them lower priority.

<a name="backlog-grooming"></a>**Backlog Grooming:** Backlog grooming is the process of adding new user stories to the backlog, re-prioritizing existing stories as needed, creating estimates, and deconstructing larger stories into smaller stories or tasks. Rather than grooming the backlog sporadically throughout an iteration, the team may hold a backlog grooming session once per iteration. The Backlog Grooming session is one of the five Scrum ceremonies. The other Scrum ceremonies are Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.

<a name="branching"></a>**Branching:** the duplication of objects under revision control (such as a source code file, or a directory tree) in such a way that the newly created objects initially have the same content as the original, but can evolve independently of the original.

<a name="breaking-the-build"></a>**Breaking the Build:** when a developer adds changes to the source code repository that result in the failure of a subsequent build process, the developer has “broken the build.” Avoiding breaking the build is a commitment generally required by agile software developers and integral to the XP practice continuous integration. The build is broken if the build process cannot successfully completed for any number of reasons including (but not limited to) failure to compile, compiling with unacceptable warnings, or the failure of any number of (usually) automated software tests. The more comprehensive the build process, the higher the threshold for breaking the build.

<a name="burndown-chart"></a>**Burndown Chart:** a publicly displayed large graph relating to the quantity of work remaining (on the vertical axis) and the time elapsed since the start of the project (on the horizontal, showing future as well as past). Two variants exist, depending on whether the amount graphed is for the work remaining in the iteration ("sprint burndown") or more commonly the entire project ("product burndown").

<a name="burnup-chart"></a>**Burnup Chart:** representation of the amount of stories completed, with points plotted on an X and Y axis that map an upward trend of work completed until reaching 100%.

<a name="business-owners"></a>**Business Owners:** a small group of management stakeholders who have the primary efficacy, governance, and ROI responsibility for the value delivered by a specific release train. Business Owners play a key role throughout the flow of value, and have particularly critical roles during Release Planning, where they participate in the management review and problem solving meeting, approve plans, and assign Business.

<a name="business-value"></a>**Business Value:** an informal term that includes all forms of value that determine the health and well-being of the firm in the long run. It expands the concept of value of the firm beyond economic value to include other forms of value such as employee value, customer value, supplier value, channel partner value, alliance partner value, managerial value, and societal value. In the context of agile development, it is what management is willing to pay for and a way to identify the value of “work” or a story.

<a name="capacity"></a>**Capacity:** refers to the measurement of how much work can be completed within a given, fixed time frame by estimating the number of available, productive work hours for an individual or team. To accurately estimate capacity, it is important to factor in all known variables such as meetings, holidays and vacations, as well as the effects of multi-tasking and normal administrative tasks.

<a name="collective-ownership"></a>**Collective Ownership:** commonly only one developer "owns" each code file. Collective code ownership, as the name suggests, is the explicit convention that "every" team member is not only allowed, but in fact has a positive duty, to make changes to "any" code file as necessary: either to complete a development task, to repair a defect, or even to improve the code's overall structure.

<a name="continuous-delivery"></a>**Continuous Delivery (CD):** a software development discipline where you build software in such a way that the software can be released to production at any time in the product lifecycle.
In the event that the software is for whatever reason not deployable, the Delivery Team swarms to rectify the issue. The team can perform push-button deployments of any version of the software to any environment on demand.

<a name="continuous-deployment"></a>**Continuous Deployment:** a software development discipline where you build software in such a way that every successful change goes through the development pipeline and automatically gets put into production, resulting in many possible production deployments every day. An extension of Continuous Integration, Continuous Deployment aims to minimize the time between coding and releasing produced code to a live production environment where the end-user can benefit from it.

<a name="continuous-integration"></a>**Continuous Integration (CI):** a eXtreme Programming (XP) practice where members of a delivery team frequently integrate their work (e.g. hourly, or at least once daily). Each integration is verified by an automated build, which also performs testing, to detect any integration errors quickly and automatically.

<a name="cross-functional-team"></a>**Cross-Functional Team:** Team comprised of members with all functional skills and specialties necessary to complete a project from start to finish.

<a name="daily-scrum"></a>**Daily Scrum / Stand-up:** one of the five Scrum ceremonies, generally held in the form of a time-boxed Standup Meeting. The Daily Scrum provides some guidelines to improve Team efficacy when its members are thoroughly aligned on the stories they are working on, any impediments blocking those tasks, and what next steps are after the story is completed.
Team members come to the Daily Scrum ready to answer the following three questions:
* What have you done since yesterday?
* What are you planning to do today?
* What impediments/obstacles are blocking your progress?
* The meeting always starts on time in the same location every day, even if all are not in attendance.
* The time box is usually 15 minutes.
Non-team members may participate, but Daily Scrum is a platform to help the team first and foremost.

<a name="definition-of-done"></a>**Definition of Done:** The criteria for accepting work as completed. The definition of done is a key component of Agile project governance used to help teams comply with the important agile principle to deliver (potentially) releasable software after every iteration. Specifying these criteria is the responsibility of the entire team, including the business. Although the the exact criteria for what constitutes “Done” varies to meet the specific needs of different organizations and initiatives, there are generally three levels of “Done” (also known as Done-Done-Done):
* Done: Developed, runs on developer’s box
* Done: Verified by running unit tests, code review, etc.
* Done: Validated as being of deliverable quality with functional tests, reviews, etc.

<a name="definition-of-ready"></a>**Definition of Ready:** by analogy with the "Definition of Done", the team makes explicit and visible the criteria that a user story must meet prior to being accepted into the upcoming iteration. For instance, a team may require that work can begin on a specific work item once priority is assigned, User Acceptance Criteria Defined, etc.

<a name="demo"></a>**Demonstration (Demo):** at the end of each iteration, the development unit performs a demo of the functionality completed during the iteration. The demo is a forum for the customer to provide feedback on the product’s development to influence the evolution of the product.

**Deployment Pipeline, or Pipeline:** This is the set of phases that code changes go through before it is complete and ready to be delivered to production; typically includes a “build," “unit test,” “functional test,” “performance test,” and “deploy” phases. Various automated tests can be run at different stages. Only once the code goes through the entire deployment pipeline can the software be delivered to production.

**Development Environment:** Where developers create, integrate, build, and test code.

<a name="devops"></a>**DevOps:** short for development and operations, is a philosophy of approach to software development and a set of practices that stresses communication, collaboration and close cooperation between the agile development teams and information technology professionals who are responsible for deploying and maintaining the software systems. This is accomplished, in part, by including IT/deployment/operations personnel as members of the Agile Release Train and by following a set of DevOps guidance practices.

<a name="dis-dev-team"></a>**Distributed Development Team:** Refers to development teams that work on the same project but are located across multiple geographic locations or work sites.

<a name="dsdm"></a>**Dynamic Systems Development Method (DSDM):** is an agile software development methodology. It is an iterative, incremental approach that is largely based on the Rapid Application Development (RAD ) methodology. The method provides a four-phase framework consisting of:
Feasibility and business study, Functional model / prototype iteration, Design and build iteration, and Implementation.

<a name="epic"></a>**Epic:** A very large user story that is eventually broken down into smaller stories. Epics are often used as placeholders for new ideas that have not been thought out fully or whose full elaboration has been deferred until actually needed. Epic stories help Agile development teams effectively manage and groom their Product Backlog.

<a name="estimation"></a>**Estimation:** The process of agreeing on a size measurement for the stories or tasks in a product backlog. On agile projects, estimation is done by the team responsible for delivering the work, usually using a planning game.

<a name="extreme-programming"></a>**Extreme Programming (XP):** A software development methodology adhering to a very iterative and incremental approach, Extreme Programming is intended to improve software quality and responsiveness to changing customer requirements. As a type of agile software development, it advocates frequent releases in short development cycles (timeboxing), which is intended to improve productivity and introduce checkpoints where new customer requirements can be adopted. XP consists of a number of integrated practices for developers and management – the original twelve practices of XP include Small Releases, On-site Customer, Sustainable Pace, Simple Design, Continuous Integration, Unit Testing, Coding Conventions, Refactoring Mercilessly, Test-Driven Development, System Metaphor, Collective Code Ownership, and Pair Programming. Most successful Agile practitioners adopt some subset of XP practices, often in conjunction with Scrum.

<a name="fibonacci-sequence"></a>**Fibonacci Sequence:** A sequence of numbers in which the next number is derived by adding together the previous two (e.g. 1, 2, 3, 5, 8, 13, 21, 34,...). The sequence is used to size stories in Agile estimation techniques such as Planning Poker.

**Green Build:** A green build, or version, is one that has passed the tests for that particular stage of the development and delivery process. Generally, a build or version of the software will not be promoted to the next stage of the deployment pipeline unless it is “green." The opposite of a green build is a red build (see below).

**Incremental Development:** (not to be confused with *Iterative Development*) A small chunk of the product gets built at a time until it is complete. Pieces are added on in each increment, and those increments may be small or large. You can use *Continuous Integration* with incremental development, but it can be harder to achieve *Continuous Delivery* or *Continuous Deployment* as you must wait until all increments are completed to deliver value. A great illustration of the difference between incremental and iterative development is Jeff Paton’s Mona Lisa.

<a name="increments"></a>**Increments:** development and delivery of each successive version of the product that is usable, and each builds upon the previous version by adding user-visible functionality. These are called "vertical" increments (that is, difference between successive product versions), as opposed to the opposite strategy which successively delivers complete technical components: for instance, creating a database schema, then building business rules on top of that, and only then implementing a UI.

**Integration:** All code that is written by individuals or teams needs to be combined. In *Continuous Integration*, we generally mean software from individuals needs to be consolidated on a regular basis. In *Continuous Delivery*, we often mean software from different teams is integrated together to create the whole product.

<a name="iteration"></a>**Iteration:** A period (from 1 week to  4 weeks in duration) during which the Agile development team produces an increment of completed software. All system lifecycle phases (requirements, design, code, and test) must be completed during the iteration and then (empirically) demonstrated for the iteration to be accepted as successfully completed. At the beginning of the iteration, the business or the product owner identifies the next (highest priority) chunk of work for the team to complete. The development team then estimates the level of effort and commits to completing a segment of work during the iteration. During the iteration, the team is not expected to change objectives or respond to change requests. However, at the front end of the next iteration the business or product owner is free to identify any new segment of work as the current highest priority.

**Iterative Development:** (not to be confused with *Incremental Development*) A small chunk of the product gets built at a time and is refined until it is complete. The product is built iteratively where the same pieces are reworked each iteration. Change is expected and planned between features in different iterations. You can use *Continuous Integration*, *Continuous Delivery*, or *Continuous Deployment* with iterative development. A great illustration of the difference between incremental and iterative development is Jeff Paton’s Mona Lisa.

<a name="kanban-board"></a>**Kanban Board:** Kanban is a tool derived from Lean manufacturing and is associated with the branch of agile practices loosely referred to as Lean software development. Like a task board, Kanban visually represents the state of work in process. Unlike a task board, the Kanban constrains how much work in process is permitted to occur at the same time. The purpose of limiting work in process is to reduce bottlenecks and increase throughput by optimizing that segment of the value stream that is the subject of the Kanban. A principle difference between Kanban and Scrum is that Scrum limits work in process through timeboxing (i.e. the sprint) and Kanban limits work in process by limiting how much work may occur at one time (e.g. N tasks or N stories).

<a name="lead-time"></a>**Lead Time:** A term borrowed from the manufacturing method known as Lean or Toyota Production System, can be described more abstractly as the time elapsed between the identification of a requirement and its fulfillment. Defining a more concrete measurement depends on the situation being examined: for instance, when focusing on the software development process, the "lead time" elapsed between the formulation of a user story and that story being used "in production", that is, by actual users under normal conditions.

<a name="lean-agile"></a>**Lean-Agile:** An adaption of Lean manufacturing principles and practices to the software development domain. Lean software development (also known as Lean-Agile) is focused on reducing (lean) waste and optimizing the software production value stream. In large part, the principles and practices of lean software development are congruent with other well-known Agile practices such as Scrum and extreme programming. However, in some cases they use different means to obtain the same end. For example, Scrum and Kanban (a lean technique) both reduce work in process (a lean waste) but use different techniques to accomplish this objective.

**Master / Trunk / Mainline:** The “master," “trunk,” or “mainline” branch is the main branch of the source repository. Most developers use trunk-based development, meaning that they will always integrate their changes to the mainline branch. Others use branch-based development where individual developers, or teams, will have their own branches for different features.

<a name="moscow"></a>**MoSCoW:** A feature classification/categorization method rooted in rapid application development that is commonly utilized in agile projects. The method is intended for short, time-boxed development iterations in which the focus remains on items deemed most critical for delivery within the time-boxed period. MoSCoW is a modified acronym that represents four levels of priority classification:
* Must have – generally baseline, or critical path features.
* Should have – also critical project level requirements, but not as time critical
* Could Have – considered nice-to-have requirements. Not necessarily required for the success of the iteration or project. Would increase end-user/customer satisfaction.
* Won’t have – lowest priority requirements.  Not scheduled or planned within the delivery time box.

<a name="mvp"></a>**MVP (Minimum Viable Product):** is the smallest thing we can test to enable one cycle of the build – measure – learn loop. As opposed to Minimum Marketable Feature (MMF) that is the smallest thing that delivers a user value.

<a name="pair-pr"></a>**Pair Programming:** Is one of the original Extreme Programming XP Software development practices in which two programmers work together at one workstation. One types in code while the other reviews each line of code as it is typed in. The person typing is called the driver. and the person reviewing the code is called the observer or navigator. The two programmers switch roles frequently.” As counter-intuitive as it may seem to the uninitiated, pair programming is more productive than two individuals working independently on separate tasks.

<a name="personas"></a>**Personas:** A fictional character that is created to represent the attributes of a group of a product’s users. Personas are helpful tools to use as a guide when deciding on a product’s features, functionality or visual design. Personas allow a team to easily identify with a fictional version of the product’s end users.

<a name="planning-poker"></a>**Planning Poker:** Is a playful way to estimate level of effort. The team meets in presence of the customer or Product Owner. Around the table, each team member holds a set of playing cards, bearing numerical values appropriate for points estimation of a user story. Encourages a consensus-based technique for estimating, mostly used to estimate effort or relative size of tasks in software development.

<a name="points"></a>**Points (estimates in):** Agile teams generally prefer to express estimates in units other than the time-honored "man-day" or "man-hour". Possibly the most widespread unit is "story points".

<a name="product-owner"></a>**Product Owner:** The Scrum Product Owner is the primary project key stakeholder. The main role of the product owner is to have a vision of what needs to be built, and convey that vision to the scrum team. The Product Owner is the lead champion of the product and is responsible for ensuring the product creates value for its customers and users as well as the company providing it. The agile product owner does this in part through the product backlog, which is a prioritized features list for the product.

**Production Environment:** This is the place where software gets deployed or released to the customer, or end user; often referred to as “in production,” “in prod,” or “live."

**Red Build:** A red build, or version, is one that has not passed the tests for that particular stage of the development and delivery process. Generally, a build or version of the software will not be promoted to the next stage of the deployment pipeline if it is “red." The opposite of a red build is a green build (see above).

<a name="refactoring"></a>**Refactoring:** Changing existing software code in order to improve the overall design. Refactoring normally doesn’t change the observable behavior of the software; it improves its internal structure. For example, if a programmer wants to add new functionality to a program, they may decide to refactor the program first to simplify the addition of new functionality in order to reduce technical debt. Refactoring is one of the original twelve extreme programming practices and is considered critical for incrementally maintaining technical quality on Agile development projects.

<a name="regression-test"></a>**Regression Test:** A test completed to validate previously completed and tested code. The regression test is performed in an effort to ensure that subsequent deliveries of code segments have not corrupted previously completed code. These tests are also often performed after defects are remediated to ensure that the fixes have not corrupted any other portion of the software.

<a name="relative-estimation"></a>**Relative Estimation:** is one of estimation techniques used in Agile teams that consists of estimating tasks or user stories, not separately and in absolute units of time, but by comparison or by grouping of items of equivalent difficulty. Relative estimation is the basis of several closely related variants, such as "silent grouping" or "affinity estimating". Some teams use non-numerical scales as a way to "force" relative estimation and the names of the corresponding techniques reflect the scale: "tee-shirt sizing" is common, more exotic scales such as fruit or dog points are also found, possibly more for novelty value than for any real gains in clarity.

<a name="release-train"></a>**Release Train:** The Agile Release Train (ART) is a long-lived team of agile teams, typically consisting of 50-125 individuals that serve as the program-level value delivery mechanism in SAFe. Using a common cadence, each train has the dedicated resources necessary to continuously define, built, test and deliver value to one of the enterprises value streams. Each train produces valuable and evaluate-able, system-level increments every two weeks, and additional quantum, Program Increment milestones every 8-12 weeks. ARTs can Release at any time in accordance with market needs.

<a name="scrum"></a>**Scrum:** A framework for the iterative development of complex products, particularly software. Scrum is the most widely recognized Agile framework, and is compatible with other Agile practices like Extreme Programming. Scrum is comprised of a series of short iterations – called sprints – each of which ends with the delivery of an increment of working software. The framework is comprised of:
* Three roles: Product Owner, ScrumMaster, (Scrum) Team
* Four ceremonies: Daily Standup Meeting, Sprint Planning Meeting, Sprint Review, Retrospective
* Three artifacts: Burndown charts, Product backlog, Sprint backlog
Scrum should not be used interchangeably with the term Agile. Agile is not a framework, but a broader set of values and practices, while Scrum is a specific framework that fits comfortably under the Agile umbrella.

<a name="scrum-of-scrums"></a>**Scrum of Scrums:** Similar in intent to the daily scrum (or daily stand up), the scrum of scrums is a daily communication forum commonly used in larger projects utilizing multiple scrum teams. As more teams are introduced, the likelihood of intra-team impediments due to overlapping work and dependencies increases. The scrum of scrums is an effective way of managing these impediments. Typically, this meeting occurs after all of the individual team scrum meetings have been completed.

<a name="scrum-master"></a>**Scrum Master:** The ScrumMaster is responsible for maintaining the Scrum process and the overall health of the team. The ScrumMaster assures that the team is fully functional and productive. The ScrumMaster performs this role by administering the Scrum ceremonies, facilitating the organic self-organization of the team, and removing any obstacles that may be impeding the team’s progress.

<a name="self-organization"></a>**Self-Organization:** In Agile development, particularly in Scrum, self-organization is a property of the agile development team, which organizes itself over time, rather than being ordered by an external force such as a project or development manager. Self-organization also reflects the management philosophy whereby operational decisions are delegated as much as possible to those who have the most detailed knowledge of the consequences and practicalities associated with those decisions.

**Source Repository:** This is where source code lives. The source repository will contain all the code after developers check in their changes to it.

<a name="spike"></a>**Spike:** A story or task aimed at answering a question or gathering information, rather than implementing product features, user stories, or requirements. Sometimes a user story is generated that cannot be estimated until the development team does some actual work to resolve a technical question or a design problem. The solution is to create a “spike,” which is a story whose purpose is to provide the answer or solution. Like any other story or task, the spike is then given an estimate and included in the sprint backlog.

<a name="sprint"></a>**Sprint:** The Scrum term for an iteration. The sprint starts with a sprint planning meeting. At the end of the sprint there is a sprint review meeting, followed by a sprint retrospective meeting.

<a name="sprint-backlog"></a>**Sprint Backlog:** A list of features, user stories or tasks that are pulled from the product backlog for consideration for completion during the upcoming sprint. Product backlog features and user stories are broken down into tasks to form the sprint backlog during the sprint planning meeting.

<a name="sprint-goal"></a>**Sprint Goal:** A short, one- or two-sentence description of what the team plans to achieve during the sprint. It is finalized collaboratively during Sprint Planning by the Scrum Team and Product Owner.

<a name="sprint-reviews"></a>**Sprint Review:** A meeting held at the end of each sprint in which the Scrum team shows what they accomplished during the sprint; typically this takes the form of a demo of the new features. The sprint review meeting is intentionally kept very informal. With limited time allocated for Sprint review prep. A sprint review meeting should not become a distraction or significant detour for the team; rather, it should be a natural result of the sprint. See Demo

<a name="story-mapping"></a>**Story Mapping:** A practice intended to provide a more structured approach to release planning, story mapping consists of ordering user stories along two independent dimensions. The "map" arranges user activities along the horizontal axis in rough order of priority (or "the order in which you would describe activities to explain the behaviour of the system"). Down the vertical axis, it represents increasing sophistication of the implementation. Given a story map so arranged, the first horizontal row represents a "walking skeleton", a barebones but usable version of the product. Working through successive rows fleshes out the product with additional functionality.

<a name="story-points"></a>**Story Points:** Story points are unit-less measures of relative size assigned to requirements for functionality. They are assigned by the entire team utilizing the planning poker exercise. Story points allow the team to focus on the pure size and complexity of delivering a specific piece of functionality rather than trying to perfectly estimate the duration of time required for its completion.

<a name="story-splitting"></a>**Story Splitting:** Before a user story is ready to be scheduled for implementation in an upcoming iteration, it should be "small enough", the usual rule of thumb being "a story that can be completed within the iteration". However, many user stories start out larger than that. "Splitting" consists of breaking up one user story into smaller ones, while preserving the property that each user story separately has measurable business value.

**Test Automation:** High quality test automation is needed to support *Continuous Integration* and *Continuous Delivery*. Tests ensure that the software will work as expected. Automated tests are coded tests that run automatically once code is checked into the common source repositories. With *Continious Integration*, the unit tests are run each time the software gets integrated and built. If the tests don’t pass, that version of your software is determined as broken or “red.” In the case of a broken build, the developer responsible for the malfunctioning code has fix it or “make it green.”

<a name="tdd"></a>**Test Driven Development (TDD):** A software development process that relies on the repetition of a very short development cycle: first the developer writes a failing automated test case that defines a desired improvement or new function, then produces code to pass that test and finally refractors the new code to acceptable standards.

<a name="team"></a>**Team:** In agile software development, the team refers to the cross-functional group of people that have made a collective commitment to work together to produce the work product and improve their performance over time. In addition to software development and test roles, the team may include any skill set necessary to deliver the work product.

<a name="timebox"></a>**Timebox:** A timebox is a time period of fixed length allocated to achieve some objective. In agile development, iterations and sprints are examples of timeboxes that limit work in process and stage incremental progress. Timeboxes are often used to avoid over-investing in tasks such as estimating development tasks.

**Unit Tests:** Unit tests are automated tests in code that test low-level, single pieces of code to ensure that they are usable and working as expected. Unit tests are considered a prerequisite for practicing *Continuous Integration* and *Continuous Delivery*.

<a name="unit-testing"></a>**Unit Testing:** “A unit is the smallest testable part of a software system. In procedural programming, a unit may be an individual function or procedure.” (Wikipedia) Comprehensive unit test coverage is an important part of software integrity and should be automated to support the incremental delivery requirements of agile software development teams. In most cases, unit testing is the responsibility of the developer.

<a name="use-cases"></a>**Use Cases:** "A use case is a list of actions or event steps typically defining the interactions between a role (known in the Unified Modeling Language as an actor) and a system to achieve a goal. The actor can be a human or other external system." (Wikipedia)

<a name="uat"></a>**User Acceptance Testing (UAT):** Describes the tests that must be successfully executed in order to validate that a specific piece of functionality meets the needs of the user as outlined in the customer requirements. As many agile methods advocate the use of narrowly defined requirements that speak from a specific user’s perspective (i.e. user stories), it is recommended that user acceptance criteria follow similar form and define validation steps from the same user perspective. User acceptance tests are an essential component of user requirements. Without well defined acceptance criteria, it becomes difficult to clearly define the scope of any given requirement.

<a name="user-stories"></a>**User Stories:** A requirement, feature and/or unit of business value that can be estimated and tested. Stories describe work that must be done to create and deliver a feature for a product. Stories are the basic unit of communication, planning, and negotiation between the Scrum Team, Business Owners, and the Product Owner. Stories consist of the following elements:
* A description, usually in business terms
* A size, for rough estimation purposes, generally expressed in story points (such as 1, 2, 3, 5)
* An acceptance test, giving a short description of how the story will be validated

<a name="user-experience"></a>**User Experience (UX):** While Agile Teams have the full responsibility for implementing the code, including the user interface (UI) elements, the User Experience designer works at the Program Level to provide cross-component and cross-program design guidance so as to provide a consistent user experience across the components and systems of the solution.

<a name="velocity"></a>**Velocity:** Velocity measures how much work a team can complete in an iteration. Velocity is often measured in stories or story points. Velocity may also measure tasks in hours or an equivalent unit. Velocity is used to measure how long it will take a particular team to deliver future outcomes by extrapolating on the basis of its prior performance. This works in Agile development, when work is comprehensively completed after each iteration.

<a name="vertical-slicing"></a>**Vertical Slicing (VS):** is a type of milestone, benchmark, or deadline, with emphasis on demonstrating progress across all components of a project. The term "vertical slice" refers to a cross-sectional slice through the layers that form the structure of the software code base. It is mostly used in Scrum terminology where the work is planned in terms of features (or stories). For example, as a very basic approach, a software project may consist of three layers (or components):
* Data access layer (bottom)
* Business logic layer (middle)
* User interface layer (top)

**References:**
[SolutionsIQ](http://www.solutionsiq.com/agile-glossary/),
[Agile Alliance](https://www.agilealliance.org/agile101/agile-glossary/),
[Agile Manifesto](http://agilemanifesto.org/),
[Scrum Alliance](https://www.scrumalliance.org/?gclid=COSknaWf1c8CFYaDaQodTh8DTg)
