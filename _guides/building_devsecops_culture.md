---
title: Building a DevSecOps Culture - from a Technical Perspective
category: DevSecOps
audiences:
  - Developers
  - Designers
  - Project Managers
---

GSA IT continues to cultivate its own DevSecOps strategy. Originally we began with **DevOps** - which differs from other well-known lean approaches, like Agile, in that it focuses on improving *delivery outcomes* versus the *process of delivery*. Granted, even if the engaged software development team is *not* practicing an Agile approach, DevOps can still be successfully implemented in any environment. Further, it promotes a more cohesive collaboration between Development and Operations teams as they work towards continuous integration and delivery.

<img src="{{ site.baseurl }}/assets/img/guides/DevOps_Integration.png"
  alt="DevOps Integration"
  class="guide-image guide-image-three-fourths">
*Source: Edureka!*

*Example*
* *Developers develop the code and this source code is managed by **Version Control System** tools like Git, etc.*
* *Developers send this code to the Git **repository** and any changes made in the code is  committed to this Repository.*
* *Jenkins **pulls this code** from the repository using the Git plugin and build it using tools like Ant or Maven.*
* ***Configuration management tools** like puppet deploys & provisions testing environment and then Jenkins **releases this code on the test environment** on which testing is done using tools like Selenium.*
* *Once the code is tested, Jenkins **sends it for deployment on the production server** (even production server is provisioned & maintained by tools like puppet).*
* *After deployment it is **continuously monitored** by tools like Nagios.*
* *Docker containers provides **testing environment** to test the build features.*

### Utilizing DevOps
[DevOps]({{ site.baseurl }}/guides/what_is_devops/) is a composition of enhanced “engineering” practices that reduce lead time and increase the frequency of delivery. The primary goal of DevOps is to ensure Operations team members are engaged and collaborating with Development from the very beginning of a project / product development. As [Edureka!](https://www.edureka.co/blog/interview-questions/top-devops-interview-questions-2016/) states, *“Gartner believes that rather than being a market per se, DevOps is a philosophy, a cultural shift that merges operations with development and demands a linked toolchain of technologies to facilitate collaborative change.”* It requires pushing past departmental lines for more effective planning, design, and release of projects / products.

<img src="{{ site.baseurl }}/assets/img/guides/DevOps_Utilization.png"
  alt="DevOps Utilization"
  class="guide-image guide-image-half">
*Source: McKinsey&Company*

Moreover, as we continue to build upon automated delivery, we find there are opportunities to test for issues beyond typical bugs - potential security flaws, design defects, and code weaknesses. Imagine being able to identify and and fix flaws earlier in delivery process, **before** they are exposed to the public.

### DevOps + Security = DevSecOps
To this end, there’s a growing movement, called [DevSecOps](http://www.devsecops.org/), to incorporate Security into the coding process. Its primary focus is to ensure loopholes and weaknesses are exposed early on through monitoring and analytics, so that remediation actions can be implemented efficiently.

<img src="{{ site.baseurl }}/assets/img/guides/DevSecOps.png"
  alt="DevSecOps"
  class="guide-image guide-image-half">
*Source: Hypergrid*

[Checkmarx](https://www.checkmarx.com/2017/02/02/devops-secure-sdlc-breaking-barriers-devsecops/) quotes DevOps advocate Shannon Lietz, *“The purpose and intent of DevSecOps, is to build on the mindset that ‘everyone is responsible for security’ with the goal of safely distributing security decisions at speed and scale to those who hold the highest level of context without sacrificing the safety required.”*

In GSA IT, we are actively pursuing a **DevSecOps** model that will not only engage Security throughout the development and operations processes, but more specifically, ensure their involvement as we align the Authority to Operate (ATO) / Lightweight Authority to Operate (LATO) process with the cloud delivery process.

#### Automation
Automation is an imperative in any DevSecOps environment, at least where it makes sense. A strong DevSecOps environment should employ tools that automate the following:
* Version Control System
* Continuous Integration
* Continuous Testing
* Configuration Management & Deployment
* Continuous Monitoring
* Containerization
* Orchestration

#### GSA IT-Approved Tools
GSA IT currently uses the following approved tools to support DevSecOps delivery:

<img src="{{ site.baseurl }}/assets/img/guides/DevOps_GSA_Tools.png"
  alt="DevOps GSA Tools"
  class="guide-image guide-image-three-fourths">

### Measuring DevSecOps Success
When utilizing DevSecOps practices, success is often measured by the efficiency of continuous development, threat detection, and release cycles. Metrics include:
* deployment frequency
* lead time
* detection of threats, security defects, and flaws
* mean time to repair
* and mean time to recovery.

Delivery efficiency is gained through [Continuous Integration]({{ site.baseurl }}/guides/glossary/#continuous-integration) and [Continuous Delivery]({{ site.baseurl }}/guides/glossary/#continuous-delivery) activities that encourage and support frequent code check-in, version control, sensible test automation, continuous low-risk releases and feedback. Security issue detection gains are achieved through “[threat modeling, code reviews, and red teaming](https://techbeacon.com/3-most-crucial-security-behaviors-devsecops).” Over time, Jez Humble says these metrics lead to “[the top five predictors of IT performance](https://blog.newrelic.com/2015/04/28/devops-jez-humble/):”
* Peer-reviewed change approval process
* Version control everything
* Proactive monitoring
* High-trust organizational culture
* A win-win relationship between dev and ops

### Benefits of a DevSecOps Environment
DevSecOps provides a number of benefits between Development, Security, and Operations - it eliminates silos, promotes collaboration and teamwork, identifies vulnerabilities early, and provides better, faster delivery. However, be wary of creating a departmental silo from Business team members. The Business can provide valuable support by engaging DevSecOps team members upfront and ensuring Development team members’ time is accounted for and visible.

DevSecOps also contributes business value through dollars and resources saved, improved operations, diminished security threats, reduction of re-work and increased quality through automated testing, as well as the delivery of projects / products early and often with less cycle time to the customer. As [Edureka!](https://www.edureka.co/blog/interview-questions/top-devops-interview-questions-2016/) further notes, the benefits of a DevOps (or DevSecOps) environment include:

#### Technical Benefits:
* Continuous software delivery
* Less complex problems to fix
* Faster resolution of problems

#### Business Benefits:
* Faster delivery of features
* More stable operating environments
* More time available to add value (rather than fix/maintain)

### Good Reads
These are good references for understanding DevSecOps culture and tools:
* [5 Popular Devops tools every devops should know about](http://www.actoncloud.com/blog/devops-tools/)
* [9 Open Source DevOps Tools We Love](https://devops.com/9-open-source-devops-tools-love/)
* [10 Deep DevOps Thoughts From Chef’s Jez Humble](https://blog.newrelic.com/2015/04/28/devops-jez-humble/)
* [Agile Vs. DevOps: 10 Ways They're Different](http://www.informationweek.com/devops/agile-vs-devops-10-ways-theyre-different/d/d-id/1326121)
* [Beyond agile: Reorganizing IT for faster software delivery](http://www.mckinsey.com/business-functions/digital-mckinsey/our-insights/beyond-agile-reorganizing-it-for-faster-software-delivery)
* [DevOps.com](https://devops.com/)
* [DevOps & The Secure SDLC: Breaking Down Barriers with DevSecOps](https://www.checkmarx.com/2017/02/02/devops-secure-sdlc-breaking-barriers-devsecops/)
* [DevSecOps Manifesto](http://www.devsecops.org/)
* [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration)
* [How are DevOps and Agile different?](https://www.quora.com/How-are-DevOps-and-Agile-different)
* [How are Lean, Agile, and Devops related to each other?](http://www.agileweboperations.com/lean-agile-devops-related)
* [HyperCloud Enables DevSecOps to Secure & Scale DevOps at Large Enterprises](http://hypergrid.com/hypercloud-enables-devsecops-to-secure-scale-devops-at-large-enterprises/)
* [Principles of DevSecOps](http://www.devsecops.org/blog/2015/2/21/principles-of-devsecops)
* [ShiwaForce: What is DevOps?](https://www.shiwaforce.com/mi-az-devops/)
* [The 3 most crucial security behaviors in DevSecOps](https://techbeacon.com/3-most-crucial-security-behaviors-devsecops)
* [The Agile Admin: What is DevOps?](https://theagileadmin.com/what-is-devops/)
* [The DevOps Handbook: How to Create World-Class Agility, Reliability, and Security in Technology Organizations](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations-ebook/dp/B01M9ASFQ3/ref=dp_kinw_strp_1)
* [Top DevOps Interview Questions You Must Prepare For in 2017](https://www.edureka.co/blog/interview-questions/top-devops-interview-questions-2016/)
* [Top DevOps Tools: 50 Reliable, Secure, and Proven Tools for All Your DevOps Needs](https://stackify.com/top-devops-tools/)
