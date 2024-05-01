---
layout: single-toc
title: Database Transformation Lessons Learned
description: This case study will highlight the lessons learned from the GSA Application Modernization Integrating Flexible Architecture project.
category: Database
aliases:
  - /playbooks/databaselessonslearned/
---

## Introduction

The intent of this case study is to share the challenges that surfaced and the steps we took to mitigate and/or resolve those challenges. We hope to save teams' valuable time during their database migration journeys!


## Context

Database migration is not easy and GSA fully understands the challenges and complexities that accompany such an effort. For this reason, we hope this document will help teams **proactively identify and mitigate challenges**. GSA recently completed a 6 month pilot for migrating databases from proprietary software to open source software. A high level description of the project can he found on the Technology Modernization Fund (TMF) website under <a href="https://tmf.cio.gov/projects/#application-modernization-integrating-flexible-architectures">Application Modernization Integrating Flexible Architecture</a>. GSA conducted an end of phase retrospective with all team members and represents the basis for the information shared throughout this document.


## Team Construct

GSA IT did not assemble a dedicated team for planning, project management and implementation. Instead, GSA IT employed a matrix team structure with representation from 3 primary GSA IT business lines (which also represented the development teams), budgeting, enterprise and cloud infrastructure, database and middleware, security, privacy, enterprise architecture and the office of the chief technology officer (OCTO) - a total of about 20 team members.


## Implementation

* Tools
  * AWS Schema Conversion Tool (SCT)
  * AWS Data Migration Services (DMS)
* Technology
  * AWS RDS
  * PostgreSQL Database


## Pilot Phase Outcome

GSA IT **developed a repeatable database migration service** that will be used to facilitate future database migrations of any database engine type. We also developed an API that decouples a database from the application. The API will be leveraged to further decouple databases that fall within that GSA portfolio.


## Product Management and Communication

Team members from the office of the OCTO facilitated product management activities, coordination and overall monitoring and status reporting to GSA IT leadership, the TMF PMO office, and OMB. The Pilot Phase meeting cadence consisted of 1 weekly 30 minute stand up on Mondays with the overall team and 1 bi-weekly 45/60 minute session with each of the development teams.

* The **30 Minute weekly stand ups** were helpful for sharing information and statuses across the team. It provided a consistent and recurring means for each team to interact directly with other teams to coordinate tasks, clear blockers, and further define requirements and dependencies.
* The **bi-weekly 45/60 minute sessions** provided each of the development teams the opportunity to meet with team members providing core-IT services from security, enterprise infrastructure, enterprise architecture, database and middleware, privacy, and cloud services. Each of the support staff had an opportunity to clarify requirements and dependencies to ensure tasks were well understood.
* In addition, the team operated on a two week sprint cycle (scrum) and consolidated activities on a master Trello board to tracking tasks.


## Budget and Contract Support

Dedicated budget support was essential for tracking budget execution activities and contracting actions. GSA IT did not execute a new contract for database transformation, much of the technical and support related work were already in scope throughout several GSA IT contracts with multi-year renewals remaining on the contract. By leveraging existing contracts, GSA IT was able to begin work shortly after the TMF Board awarded the initial disbursement of funds.


## Collaboration

GSA migrated to Google Suite (G-Suite) several years ago, so  the team primarily used G-Suite tools for content creation and consolidation, instant messaging, group chats, email and video calls.

**Note:** Although the Google Hangouts application does support history retention within an established group, the team sparsely used the tool and relied on communicating through email and status updates applied directly to the Trello board. In the next phase of the project we are exploring using Slack to help drive better collaboration across teams.


## Challenges

* GSA performed heterogeneous database migrations for all three pilot phase systems and experienced a few initial challenges with data migration and validation across database engine for special characters and delimiters.
* We performed both a cloud-to-cloud database migration and an on-prem-to-cloud-to-on-prem (two of the applications were not ready for full migration to the cloud). The databases that were migrated back to on-prem required colocation with the applications for performance considerations. The benefit of this approach, the database is already cloud-ready and can easily migrate to the cloud if and when the application moves as well (and not to mention it also helps to reduce cost).
* We also noticed a skills gap in cloud and open source database technology experience. We were able to overcome the gap by augmenting the team with experienced staff that helped train and familiarize team members with the technology stack.
* Although data encryption was not in-scope for any of the pilot phase databases, we started to look at possible solutions for file and field level data encryption given the additional GSA databases with PCI/PII data that are within scope of the overall project. We are exploring a SQL Proxy Cluster solution for encrypt/decrypt. GSA will provide an update of the solution once finalized and working in production.


## Recommendations

* Ensure your security personnel are included in all relevant conversations to ensure all security compliance requirements and documentation are drafted, updated and finalized within the timelines required to fulfill specific security tasks - have those conversations frequently and often! ATO reviews can take weeks/months, ensure there is enough lead time for a full and proper review by security.
* When possible, use existing contract vehicles. This will save your team months of valuable time and will allow you to begin work quickly.
* Consider **standardizing sprint schedules and task boards** for tracking deliverables and dependencies across all teams.


## Next steps

* GSA has started the next phase of the project and targeting a total of eight databases. GSA will continue to post updates of our progress.
* Thank you for reviewing this post, stay tuned!

Please contact the GSA OCTO with any questions at [cto@gsa.gov](mailto:cto@gsa.gov).
