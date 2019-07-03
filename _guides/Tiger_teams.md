---
title: Running Tiger Teams
category: Team
audiences:
  - Developers
  - Project Managers
  - Operations
  - Information Security
---

Tiger Teams are cross-functional teams pulled together for a period of time to address a critical issue. They are often formed when an IT issue is impacting customers and the most likely solutions have already been tried without success. A typical example would be that a critical application is running slowly, and a team is formed with representatives from the network, infrastructure, development, and database groups.  The team schedules a series of meetings to work through an issue until a root cause is determined and a solution is implemented.

### Potential Risks To Be Avoided ###

If not planned properly, Tiger Teams can fall prey to some of these risks:
* The symptoms of an issue are not clearly defined up front, and sometimes are understood differently by members of the team.
* The team immediately starts trying short term fixes -- sometimes multiple fixes at the same time. A common refrain is “Just a second...try it now.” (Think of Brent from the early chapters of _The Phoenix Project_.)
* Every meeting chases a different symptom, with no strategic direction.
* Once the initial emergency is over, everyone stops attending meetings and the team isn’t always sure what fixed the issue.
* There is no time spent to document the lessons learned or understand the root cause.
* Scope creep can occur: discussion wanders to other topics beyond the original purpose.

### A More Effective Approach ###

Tiger Teams can be considered effective if the primary issue is resolved and the root causes are shared widely across the organization. The following is an approach to meet those ends. (Remember this assumes that the most likely solutions have already been tried without success.)

1. Take time to observe the symptoms and their impacts. Agree to a consensus on the current condition (preferably from the perspective of the end user).

    **List of Symptoms**

    | Symptom | Observed when | Impact of the symptom| 
    | ---- | ----- | -----|
    | | |

2. Identify possible root causes. Sources of information include:
  * Previous documentation from using this process
  * Bug tracking, help desk, and ticketing systems
  * Collective memory of organization, Slack channels, and email listservs
  * Online forums, books, articles
3. Develop a list of tests to validate or invalidate the root causes. **Realize that these are tests, not solutions. It is possible that a test could be an actual fix, but the goal here is to identify the root cause.** 

      **List of Possible Tests**

    | If the root cause is | We can perform this test | Environment this can be tested in | Result that confirms root cause | Result that eliminates root cause| 
    | ---- | ----- | ----- | ------| ------|
    | | | | |

4. **Decide which tests to perform.** Prioritize the list using some of the following factors:
  * Most likely to identify the root cause
  * Quickest to perform
  * Least expensive to perform
  * Least impact to users to perform
  * Can be performed in environment most closely matching production
  * Biggest worry (most severe impact to the organization if it’s confirmed)

5. **Begin testing.** Once the list is prioritized, go through the following cycle until the root cause is confirmed:
  * Run one test.
  * Document the results of the test.
  * Determine if test results confirm a root cause.
  * If the root cause is not identified, back the changes out of the system and continue to the next item.

6. Once the root cause is identified, develop a list of possible solutions:

      **List of Possible Solutions**

    | Because the root cause is | One possible solution is | Benefits  | Risks  | Monetary cost  | We will know this solution solves the root cause when | Period of time needed to validate |
    | ---- | ----- | ----- |----- | ------| ---- | ---- |
    | | | | | | |

7. As a group, review this list and agree to the solution. If a solution is left in place from the testing, it still needs agreement from the team that this is the correct solution. 

8. When the solution is identified, finish the process with these steps (following change management policies):
  * Allocate funding (if required).
  * Perform appropriate backups and document rollback plan.
  * Schedule the implementation.
  * Implement the solution.
  * Validate the results against the solution definition. This may include observation for a period of time identified in step 6.
  * Consider how it can be implemented across the enterprise for maximum benefit and prevention of future emergencies through configuration and automation (or procedures as a last result). Assign an owner to get this applied and set a date for a follow up report to the team or management.

9. Finally, document the result:

    **Solutions Documentation**

    | Root cause | Symptoms observed | Potential root causes evaluated and discarded | Solution | Value to the rest of the enterprise (reusability) |
    | ---- | ----- | ----- | ------| ---- |
    | | | | |


This information becomes the basis of a knowledge store to consult in the future before the next Tiger Team is formed.

### Related Methodologies

This process is consistent with the [Improvement Kata](http://www.methodsandtools.com/archive/toyotakata.php), and its use of the Plan-Do-Check-Act (PDCA) cycle. 
 
### Future Improvements

This guide is a start, but there is plenty of room for improvement, including:
 * Sharing standardized templates for root cause analysis and other analysis in this process.
 * Providing a searchable repository for the outcomes of this process. 





