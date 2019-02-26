---
title: Running Tiger Teams
category: Team
audiences:
  - Developers
  - Project Managers
  - Operations
  - Information Security
---

Tiger Teams are often formed when an issue in IT is impacting customers and the most likely solutions have been tried without success. A typical example would be that a critical application is running slowly, and a team is be formed with representatives from network, infrastrastructure, development, and database groups.  The group schedules a series of meetings until the issue is solved.

### Potential Shortcomings To Be Avoided ###

If not planned properly, Tiger Teams can show one or more of these shortcomings:
* The symptoms of an issue are not clearly defined up front, and sometimes are understood differently by members of the team.
* The team immediately starts trying short term fixes -- sometimes multiple at the same time. A common refrain is “Just a second...try it now.” (Think of Brent from the early chapters of _The Phoenix Project_.)
* Every meeting chases a different symptom, with no strategic direction.
* Once the initial emergency is over, everyone stops attending and the team isn’t always sure what fixed the issue.
* There is no time spent to document the lessons learned or understand the root cause.

### A More Effective Approach for Running Tiger Teams ###

Tiger Teams can be considered effective if the issue is resolved and the root causes shared widely across the organization. The following is an approach to meet that goal.

#### Before trying any additional solutions, take the following steps ####

1. Agree to a description of the symptoms (preferably from the perspective of the end user)
2. Spend time identifying possible root causes. Sources of information include:
  * Bug tracking, help desk and ticketing systems
  * Previous documentation from following these steps.
  * Collective memory of organization, Slack channels, listserv
  * Online forums, books, articles
3. Develop a list of tests to validate or invalidate the root causes. **Notice that these are tests, not solutions. It is possible that a test could be an actual fix, but the goal here is to identify the root cause.** 

      **List of Possible Tests**

    | If the root cause is | We can perform this test | Result that confirms root cause | Result that eliminates root cause| 
    | ---- | ----- | ----- | ------|
    | | | | 

4. Prioritize the list using some of the following factors:
  * Most likely to identify the root cause.
  * Quickest to perform.
  * Least expensive to perform.
  * Least impact to users to perform.
  * Biggest worry (most severe impact to organization if it’s confirmed).

5. Once the list is prioritized, go through the following cycle until the root cause is confirmed:
  * Run one test, document the results, determine if it confirms a root cause.
  * Back out the previous test (critical step).

6. Once the root cause is identified develop a list of possible solutions in this format:

      **List of Possible Solutions**

    | Because the root cause is | One possible solution is | Benefits for this solution are| Risks for this solution are| We will know this solution solves the root cause when |
    | ---- | ----- | ----- | ------| ---- |
    | | | | |

7. As a group, review this list and select the solution. In some situations, the testing may have provided a solution, and it can stay in place in production. In other cases, the group may have the authority to decide the solution. In other situations, the group may propose the solution to management for approval.

8. When the final solution is identified, finish these steps:
  * Schedule the implementation (if the test wasn’t an actual fix).
  * Implement the solution.
  * Validate the results against the solution definition.
  * Consider how it can be implemented across the enterprise for maximum benefit and prevention of future emergencies through configuration and automation (or procedures as a last result). Assign an owner to get this applied and set a date for a follow up report to the team or management.

9. Finally, document the result in this format:

    **Solutions Documentation**

    | Root cause | Symptoms observed | Potential root causes evaluated and discarded | Solution | Value to the rest of the enterprise (reusability) |
    | ---- | ----- | ----- | ------| ---- |
    | | | | |


This information becomes the basis of a knowledge store to consult in the future before the next Tiger Team is formed.







