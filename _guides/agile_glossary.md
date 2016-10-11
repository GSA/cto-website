---
title: Agile Glossary
category: Agile
audiences:
  - Developers
  - Designers
  - Project Managers
---

**Acceptance Testing**: Formal testing conducted to determine whether or not a system satisfies its acceptance criteria and to enable the customer to determine whether or not to accept the system.

**Automated Build**: the "build" for a developer consists the process of starting from files and other assets under the developers' responsibility, results in a software product in its final or "consumable" form. This may include compiling source files, their packaging into compressed formats (jar, zip, etc.), production of installers, the creation or updating of database schema or data, etc. The build is "automated" to the extent that these steps are repeatable and require no direct human intervention, and can be performed at any time with no information other than what is stored in the source code control repository.

Backlog: A collection of stories and tasks the Sprint team will work on at some point in the future. Either the Product Owner has not prioritized them or has assigned them lower priority.

Backlog Grooming: Backlog grooming is the process of adding new user stories to the backlog, re-prioritizing existing stories as needed, creating estimates, and deconstructing larger stories into smaller stories or tasks. Rather than grooming the backlog sporadically throughout an iteration, the team may hold a backlog grooming session once per iteration. The Backlog Grooming session is one of the five Scrum ceremonies. The other Scrum ceremonies are Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.

Branching: the duplication of objects under revision control (such as a source code file, or a directory tree) in such a way that the newly created objects initially have the same content as the original, but can evolve independently of the original.

Breaking the Build: when a developer adds changes to the source code repository that result in the failure of a subsequent build process, the developer has “broken the build.” Avoiding breaking the build is a commitment generally required by agile software developers and integral to the XP practice continuous integration. The build is broken if the build process cannot successfully completed for any number of reasons including (but not limited to) failure to compile, compiling with unacceptable warnings, or the failure of any number of (usually) automated software tests. The more comprehensive the build process, the higher the threshold for breaking the build.

Burndown Chart: a publicly displayed large graph relating to the quantity of work remaining (on the vertical axis) and the time elapsed since the start of the project (on the horizontal, showing future as well as past). Two variants exist, depending on whether the amount graphed is for the work remaining in the iteration ("sprint burndown") or more commonly the entire project ("product burndown").

Burnup Chart: representation of the amount of stories completed, with points plotted on an X and Y axis that map an upward trend of work completed until reaching 100%. 

Business Owners: a small group of management stakeholders who have the primary efficacy, governance, and ROI responsibility for the value delivered by a specific release train. Business Owners play a key role throughout the flow of value, and have particularly critical roles during Release Planning, where they participate in the management review and problem solving meeting, approve plans, and assign Business.

Business Value: an informal term that includes all forms of value that determine the health and well-being of the firm in the long run. It expands the concept of value of the firm beyond economic value to include other forms of value such as employee value, customer value, supplier value, channel partner value, alliance partner value, managerial value, and societal value. In the context of agile development, it is what management is willing to pay for and a way to identify the value of “work” or a story.

Capacity: refers to the measurement of how much work can be completed within a given, fixed time frame by estimating the number of available, productive work hours for an individual or team. To accurately estimate capacity, it is important to factor in all known variables such as meetings, holidays and vacations, as well as the effects of multi-tasking and normal administrative tasks.


Collective Ownership: commonly only one developer "owns" each code file. Collective code ownership, as the name suggests, is the explicit convention that "every" team member is not only allowed, but in fact has a positive duty, to make changes to "any" code file as necessary: either to complete a development task, to repair a defect, or even to improve the code's overall structure.

Continuous Delivery (CDel): a software development discipline where you build software in such a way that the software can be released to production at any time in the product lifecycle. 
In the event that the software is for whatever reason not deployable, the Delivery Team swarms to rectify the issue. The team can perform push-button deployments of any version of the software to any environment on demand.

Continuous Deployment: a software development discipline where you build software in such a way that every successful change goes through the development pipeline and automatically gets put into production, resulting in many possible production deployments every day. An extension of Continuous Integration, Continuous Deployment aims to minimize the time between coding and releasing produced code to a live production environment where the end-user can benefit from it.

Continuous Integration (CI): a eXtreme Programming (XP) practice where members of a delivery team frequently integrate their work (e.g. hourly, or at least once daily). Each integration is verified by an automated build, which also performs testing, to detect any integration errors quickly and automatically.

Cross-Functional Team: Team comprised of members with all functional skills and specialties necessary to complete a project from start to finish.


Daily Scrum/Stand-up: one of the five Scrum ceremonies, generally held in the form of a time-boxed Standup Meeting. The Daily Scrum provides some guidelines to improve Team efficacy when its members are thoroughly aligned on the stories they are working on, any impediments blocking those tasks, and what next steps are after the story is completed. 
Team members come to the Daily Scrum ready to answer the following three questions:
* What have you done since yesterday?
* What are you planning to do today?
* What impediments/obstacles are blocking your progress?
* The meeting always starts on time in the same location every day, even if all are not in attendance.
* The time box is usually 15 minutes.
Non-team members may participate, but Daily Scrum is a platform to help the team first and foremost.

Definition of Done: The criteria for accepting work as completed. The definition of done is a key component of Agile project governance used to help teams comply with the important agile principle to deliver (potentially) releasable software after every iteration. Specifying these criteria is the responsibility of the entire team, including the business. Although the the exact criteria for what constitutes “Done” varies to meet the specific needs of different organizations and initiatives, there are generally three levels of “Done” (also known as Done-Done-Done):
* Done: Developed, runs on developer’s box
* Done: Verified by running unit tests, code review, etc.
* Done: Validated as being of deliverable quality with functional tests, reviews, etc.

Definition of Ready: by analogy with the "Definition of Done", the team makes explicit and visible the criteria that a user story must meet prior to being accepted into the upcoming iteration. For instance, a team may require that work can begin on a specific work item once priority is assigned, User Acceptance Criteria Defined, etc. 


Demonstration (Demo): at the end of each iteration, the development unit performs a demo of the functionality completed during the iteration. The demo is a forum for the customer to provide feedback on the product’s development to influence the evolution of the product.

DevOps: short for development and operations, is a philosophy of approach to software development and a set of practices that stresses communication, collaboration and close cooperation between the agile development teams and information technology professionals who are responsible for deploying and maintaining the software systems. This is accomplished, in part, by including IT/deployment/operations personnel as members of the Agile Release Train and by following a set of DevOps guidance practices.

Distributed Development Team: Refers to development teams that work on the same project but are located across multiple geographic locations or work sites.

Dynamic Systems Development Method (DSDM): DSDM is an agile software development methodology. It is an iterative, incremental approach that is largely based on the Rapid Application Development (RAD ) methodology. The method provides a four-phase framework consisting of:
Feasibility and business study, Functional model / prototype iteration, Design and build iteration, and Implementation.

Epic: A very large user story that is eventually broken down into smaller stories. Epics are often used as placeholders for new ideas that have not been thought out fully or whose full elaboration has been deferred until actually needed. Epic stories help Agile development teams effectively manage and groom their Product Backlog.

Estimation: The process of agreeing on a size measurement for the stories or tasks in a product backlog. On agile projects, estimation is done by the team responsible for delivering the work, usually using a planning game.

Extreme Programming (XP): A software development methodology adhering to a very iterative and incremental approach, Extreme Programming is intended to improve software quality and responsiveness to changing customer requirements. As a type of agile software development, it advocates frequent releases in short development cycles (timeboxing), which is intended to improve productivity and introduce checkpoints where new customer requirements can be adopted. XP consists of a number of integrated practices for developers and management – the original twelve practices of XP include Small Releases, On-site Customer, Sustainable Pace, Simple Design, Continuous Integration, Unit Testing, Coding Conventions, Refactoring Mercilessly, Test-Driven Development, System Metaphor, Collective Code Ownership, and Pair Programming. Most successful Agile practitioners adopt some subset of XP practices, often in conjunction with Scrum.
