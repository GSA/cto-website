---
title: AIOps
subtitle: Automate IT Operations with AI and ML
excerpt: AIOps platforms utilize big data, modern machine learning and other
  advanced analytics technologies to directly and indirectly enhance IT
  operations (monitoring, automation and service desk) functions with proactive,
  personal and dynamic insight. AIOps platforms enable the concurrent use of
  multiple data sources, data collection methods, analytical (real-time and
  deep) technologies, and presentation technologies.
image: /assets/cms/medialibrary/artificial-intelligence.gif
resources:
  - title: H.R.133 - Consolidated Appropriations Act, 2021
    url: https://www.congress.gov/bill/116th-congress/house-bill/133
  - title: H.R.6395 - William M. (Mac) Thornberry National Defense Authorization Act
      for Fiscal Year 2021
    url: https://www.congress.gov/bill/116th-congress/house-bill/6395
---
## Possible Applications

AI (artificial intelligence) has been around for a while now in terms of ‘IT Years’ and has become very popular in some areas and still quite nuanced in others. Its benefits have shown quite promising results and our analysis at and for GSA so far show’s a varying level of implementation, interest and scaling/expansion potential that we’re working to leverage across the Enterprise where possible.

 Within the realm of AI / ML / RPA, one of the key focus areas is within the Operations space coined as AIOps. This area covers the use of these NPE’s (Non-Person-Entities) to perform generally repetitive tasks across platforms, systems and applications with little to no manual oversight necessary. The intent of our deeper dive into the realm of AIOps specifically is to help identify existing and possible use cases, expose potential synergies / cost savings / and/or cost savings across GSA.

### Use Cases: Currently Implemented at GSA

#### Use Case: PBS-ITS - AI Monitoring

Technology / Vendor: Dynatrace

Currently setup to monitor various PBS Applications such as: ACRE, EASi, GREX, PBS Portal, and REXUS.

##### Primary Use Case

Dynatrace is currently monitoring and helping optimize application performance. It does so by generating an Apdex (Application Performance Index) score for each application. Apdex is an open standard used for measuring application performance and offers a consistent way to "measure what matters" across applications.

![An example bar graph showing Apdex scores. The bar graph displays what percent of page load time is tolerable versus frustrating.]({{ site.baseurl }}/assets/cms/medialibrary/apdex.png "Example Graph")

##### Already realizing benefits!

Using this data, development teams are better able to identify and correct aspects of the application that negatively impact performance. In addition to diagnosing underlying issues, data from Dynatrace is able to capture and report page views, action duration, and page load times.

##### Secondary Use Case (Performance Degradation Discovery and Analysis) 

The AppOps team uses Dynatrace to ascertain the cause of performance degradation and outages. Traditionally the root-cause of outages are discovered and reported by the development team. 

However, Dynatrace empowers the AppOps team to conduct its own analysis. The team is able to review the sequence of events that culminate in the degradation or outage. For example, Dynatrace will display that, in a specific period of time, connections to the database started responding slowly. Or, there was a marked increase in calls to an external system. Or, that multiple applications were experiencing a degradation in performance even though only one application had the outage. This independent analysis, combined with analysis from the development team, enables management to better understand its outages and quickly make tactical or remediation decisions.

##### Room for Improvement

Like most AIOps related technology, Dynatrace offers an abundance of information. The volume  currently collected makes it difficult to quickly and clearly identify issues. The teams are working with Dynatrace to better digest the information being collected and planning for more robust dashboards that better align with their needs. Over time the trends from such reporting may also provide a more predictive approach where some issues may be avoided altogether or greatly reduced in impact.

### Use Cases: Planned at GSA

#### Use Case: GSA IT - Infrastructure Team - RPA with AI-Driven Dashboard and Analytics

Building on existing RPA implementations, within the next 2-3 months an AI based operational use case is being launched within GSA IT. The team is using a highly configurable, open-architecture AI Platform for RPA / Machine Learning built for rapid deployments that delivers an individual user experience. Combined with AI-driven, real-time visualizations that continuously monitor all forms of enterprise data using analytics to ensure optimal performance and SLA adherence while providing actionable intelligence for operations and leadership. The platform will also provide enhanced situational awareness of AI and automation deployments across all GSA internal and external customers enabling capacity planning for zero net budget portfolio.

#### Use Case: GSA IT - Infrastructure Team - Digital Experience Monitoring with Intelligent Infrastructure

In the coming year, the GSA IT team is working on automated monitoring of employee endpoints. This provides organizations an improved understanding of user experience. Data generated by laptops and desktops can be analyzed to help predict failure and initiate automated actions such as ticket creation, auto-remediation, self-healing actions and self-help recommendations that users can implement without having to call for support. Through integration with AI/ML platforms, we can analyze hardware performance statistics and provide recommendations for equipment replacement and resource requirements to both improve the customer experience and reduce costs associated with help desk and hardware replacements. 

### Potential for exploring further at GSA

#### Help Desk Ticket Automation

Organizations often have a help desk that receives support tickets and routes them to the appropriate point of contact for resolution. Prioritization, categorization, and routing tickets can be a time-consuming activity. Additionally, a ticket may have to be routed multiple times before the correct point of contact is identified.

There are a number of AIOps solutions on the market that target this use case. An AIOps tool typically uses machine learning (ML) to identify the subject, urgency, and sentiment of incoming tickets. It can then automatically triage the ticket by assigning a corresponding priority and route it to the appropriate team.

AIOps can benefit an organization by eliminating help desk bottlenecks, resulting in faster issue resolution and less downtime.

#### Log File Analysis

System and application logging provides a wealth of data about what is happening in an environment; however, it can be challenging to analyze for performance bottlenecks or security issues. IT operations teams often filter log events via patterns such as regular expressions to bring important information to the surface. AIOps, however, can take this a step further by identifying events of interest without having to be pre-programmed with specific patterns. Additionally, by providing new observability into a complete system and individual application events, AIOps can help identify new risks and/or potential enhancements.

## Adoption

### Academia

AIOps is currently being explored in academia focusing on how AIOps can be applied to IT operations, DevOps, and CI/CD (continuous integration and continuous deployment) pipelines. Research has shown that if AIOps is implemented and maintained efficiently, it can significantly reduce the amount of overhead needed to maintain and develop IT products. Since traditional IT operations are costly and labor intensive, AIOps has the potential to help organizations make better decisions more efficiently at lower costs.

#### Recommended reading

* [A Systems Approach to Effective AIOps Implementation](https://dspace.mit.edu/bitstream/handle/1721.1/139422/hua-huay-sm-sdm-2021-thesis.pdf?sequence=1&isAllowed=y) by Yunke Hua, MIT

![Graph showing a decrease in human operational workload over time as AIOps is implemented. This is implemented via: Event data normalization and enrichment; change and incident correlation; pattern-based event grouping; tools integration; and automation.]({{ site.baseurl }}/assets/cms/medialibrary/aiops-vs-human-operational-workload.png "Source: Datanami")

### Industry

With so much private sector interest in AIOps’ potential to lower costs, manage risks proactively, and create opportunities for more informed decision making where human intervention is required, AIOps has gathered the attention of large vendors across a variety of applications. Current, well developed industry use cases include:

* **Real-time Anomaly Detection**: Utilizing AI in order to detect threats in real-time and quickly implementing solutions in order to minimize impact on service availability.
* **Alert Management**: Learning from historical data and determining high-value incidents to identify true critical issues that will require immediate attention. Incorporating this will allow for better prioritization and improved incident response.
* **Root Cause Analysis**: Enabling early detection and improved diagnostics of primary causes of an IT incident.
* **Automated Incident Management**: Automating and resolving incidents in real-time, thus providing a seamless, uninterrupted user experience.

Additional and potential future industry use cases include:

* Self-healing, self-correction and auto-remediation
* Early anomaly, fault and failure (AFF) detection and analysis
* Self-adaptive time-series based models for prognostics and forecasting
* AFF identification, localization, and isolation
* Root cause analysis
* Adaptive fault tolerance policies
* Forecasting of hardware and process quality
* Decision support
* Planning under uncertainty
* Predictive and prescriptive maintenance
* Maintenance scheduling and on-demand maintenance planning
* Fault tolerant system control
* Reliability and quality assurance
* Autonomic process optimization
* Energy efficient cloud operation
* Autonomous service provisioning
* Explainable AI
* Visual analytics and interactive machine learning
* Active and life-long learning
* Information and communication models for AIOps systems
* Platforms: Time-series DBs, Streaming, Data Lakes
* AI platforms for AIOps
* Decentralized ID management and CA system/technologies
* Design of experiment (DoE) for different use-cases, testbeds, evaluation scenarios

![Diagram indicating how events, metrics, traces, topology, incidents, dependencies and changes feed into an AIOps platform, and the platform in turn produces analyses and automation from the data.]({{ site.baseurl }}/assets/cms/medialibrary/gartner-aiops-cycle.png "Source: Gartner")

### Government

The Federal government leverages big data, advanced analytics, and machine learning to improve their IT operations and monitoring. AIOps will allow the government agencies to achieve their digital transformation goals by utilizing artificial intelligence to facilitate certain government operations. With intelligent apps, workers will be able to perform duties they find overwhelming and time consuming, including help desk troubleshooting, system administration, and various administrative functions thus saving costs, minimizing backlogs, and reducing on-going overhead. From a security perspective, facial recognition could also stop fraudulent and criminal acts. Overall AIOps will engender faster responses, continuous monitoring, and improved threat detection.

Additionally, machine learning / deep learning, computer vision, speech recognition, and robotics are used in many Government Services with positive results. An example of where AIOps can take these tools to the next level is with natural language processing. [Intel describes it thusly](https://www.intel.com/content/www/us/en/government/artificial-intelligence.html): “Natural language processing automatically extracts relevant information from intelligence sources and makes connections, enabling analysts to find actionable insights. Failure rate predictions help ensure military equipment is well maintained and ready to deploy when needed. Cyber anomaly detection can revolutionize cybersecurity strategies in government systems. The possibilities are endless and yet only beginning to take shape.” Government IT support desks stand to benefit from this in particular as frequency and complexity of employee-IT interactions increases. Natural language processing will help automate responses, reduce ticket times, and increase accuracy over time.

![A diagram indicating the various types of AI adoption across government. They are: chatbots or conversational agents; machine learning supported data mining; biometrics; computer vision and automated image recognition; GeoAI; machine translation; and deep learning.]({{ site.baseurl }}/assets/cms/medialibrary/gartner-federal-aiops-adoption.png "Source: Gartner")

#### Currently Used AI Use Cases across the Federal Government

* **The Defense Department (DoD)** uses AI tools to help plan force deployments during crises, recognize objects in video data, and perform predictive maintenance on Bradley Fighting Vehicles, among other things. It is also building an AI capability to check and verify security clearance applications against multiple data sources to speed up the process. 
* **The General Services Administration (GSA)** has deployed 10 robotic process automation (RPA) bots and plans to deploy dozens more. One bot, for example, identifies invoices coming due for payment and alerts those responsible to ensure compliance with the Prompt Payment Act requiring that vendors are paid within 30 days. Another bot extracts key data from its leases to ensure they are reconciled with data in other systems.
* **The National Aeronautics and Space Administration’s (NASA)** Shared Services Center has four bots running nine different processes, including distributing funds, procurement, documenting images, scanning files, and creating folders to establish grants packages. 
* **The Health and Human Services Department (HHS)** is employing AI to identify opportunities to consolidate contract vehicles.

####  Potential Use Cases within the Federal Government

* **The Department of Agriculture (USDA)** is looking to employ chatbots or AI to augment the human workforce at its call centers. 
* **The Veterans Affairs Department (VA)** is exploring ways in which AI can improve the customer experience and service delivery for its veteran constituents.
* **The National Institute of Standards and Technology (NIST)** is looking at having AI assist it with research and discovery into various domains of science and technology. 
* **The Patent and Trademark Office (USPTO)** is examining whether AI can help it route patent applications more efficiently to the correct examiners as well as to help examiners search for “prior art,” which is evidence that a purported invention is already known. ([Source](https://www.accenture.com/_acnmedia/pdf-104/accenture-psc-federal-ai-adoption.pdf))

#### Other Areas GSA is starting to use and look for more value from AIOps

* The use of Algorithms and Training  
* Facial Recognition or Classification with images
* AI/ML Operations in Energy consumption
* Neural Language Processing with Controlled-Unclassified-Information (CUI) documents

## Companies and Contracts

### What GSA contracts can provide this technology and/or service?

GSA [eLibrary](https://www.gsaelibrary.gsa.gov/ElibMain/home.do) is your one source for the latest GSA contract award information.  GSA offers unparalleled acquisition solutions to meet today’s acquisition challenges.  GSA’s key goal is to deliver excellent acquisition services that provide best value, in terms of cost, quality and service, for federal agencies and taxpayers.

![Screenshot of the GSA eLibrary page]({{ site.baseurl }}/assets/cms/medialibrary/elibrary-searchbar.jpg "The GSA eLibrary")

Steps:

1. Use the Search bar on the homepage and enter ‘Artificial Intelligence’.
2. Click the source number to view a list of categories. 
3. Click the category number (i.e. SIN) to view a list of contractors.

Current contracts (as if 2/8/22) include:

* The Source [8ASTARS3](https://www.gsaelibrary.gsa.gov/ElibMain/scheduleSummary.do?scheduleNumber=8ASTARS3) is 8(a) Streamlined Technology Acquisition Resource for Services (STARS) III - 8(a) STARS III is a multiple award, indefinite-delivery, indefinite-quantity (MA/IDIQ) GWAC set aside exclusively for SBA certified 8(a) firms per Federal Acquisition Regulation (FAR) 19.8. 8(a) STARS III provides Federal agencies with customized IT services and IT services-based solutions*, both commercial and non-commercial, as defined in the Clinger-Cohen Act and FAR 2.101. 

  * The category [STARS3 ET](https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?scheduleNumber=8ASTARS3&specialItemNumber=STARS3+ET&executeQuery=YES) 8(a) Streamlined Technology Acquisition Resource for Services (STARS) III - Emerging Technology-Focused IT Services - This scope sub-area provides for IT services-based solutions which involve emerging technology (ET) innovation to securely accelerate transformation and advance mission outcomes. A task order requirement can fit in this sub-area if it includes IT services-based solutions with ET as the focus.
  * Note that Governmentwide Acquisition Contracts or GWACs are task order or delivery order contracts for information technology established by one agency for governmentwide use. Each GWAC is operated by an Executive Agent designated by the Office of Management and Budget pursuant to Section 5112(e) of the Clinger-Cohen Act, 40 U.S.C. 1412.
* [MAS](https://www.gsaelibrary.gsa.gov/ElibMain/scheduleSummary.do?scheduleNumber=MAS) - Multiple Award Schedule - Available offerings include commercial goods and services organized by 12 Large Categories, corresponding Subcategories, and SINs.  Under category 

  * [561422](https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?scheduleNumber=MAS&specialItemNumber=561422&executeQuery=YES), Automated Contact Center Solutions (ACCS) - 561422 Automated Contact Center Solution (ACCS) is defined as any offering utilized to establish and maintain contact center capabilities for an agency. The offering may consist of one or more of the following: products, equipment, software, labor and/or services. Permissible offerings under this SIN may include any technologies or services required to deliver and support an ACCS for an agency, including but not limited to: Artificial Intelligence (AI), Chat Bots, Robotic Process Automation, Interactive Voice Response (IVR), Voice/Speech Recognition, Text-to-Speech, Voicemail, Callback, Web Callback, Email Delivery, Hosted Online Ordering, Hosted Email Web Form, Hosted FAQ Service, etc. NOTE: Subject to Cooperative Purchasing.

### Companies - Introduction

*DISCLAIMER: GSA in no way endorses or recommends any particular company. The information listed below is intended to provide some centralized resources of current companies actively developing AIOps applications. Inclusion or omission from this list merely reflects the limited resources available to the team generating this report. Many of the statements below rely on each company’s self-assertions rather than this team’s assessment of a given capability.*

Most AIOps offerings represent the maturation of application performance management (APM) systems to include artificial intelligence (AI). The term AIOps was coined by Gartner in 2017 and is defined by them as follows:

> “AIOps platforms utilize big data, modern machine learning and other advanced analytics technologies to directly and indirectly enhance IT operations (monitoring, automation and service desk) functions with proactive, personal and dynamic insight. AIOps platforms enable the concurrent use of multiple data sources, data collection methods, analytical (real-time and deep) technologies, and presentation technologies.”

During 2021, the AIOps total market valuation grew from approximately $2B in 2020, to $3B, with expected growth to $10B over the next four to five years. Overall, the adoption of AIOps across all sectors is relatively immature and this should be considered a growth technology. Companies with AIOps offerings are mostly established AI or data monitoring players who are adding an AI layer to current offerings, or establishing new lines of business. That said, there are some emerging players AIOps as their sole focus.

#### Some Example Companies

![New Relic logo]({{ site.baseurl }}/assets/cms/medialibrary/newrelic.png)

New Relic - One of the newer, but larger vendors. They feature a large array of integrations applicable to GSA, including JIRA and ServiceNow. New Relic emphasizes on-prem and hybrid applications in their marketing materials.

![Datadog logo]({{ site.baseurl }}/assets/cms/medialibrary/datadog.png)

Datadog - Datadog is one of the larger, more mature vendors that focuses on cloud monitoring and security. Datadog is currently FedRAMP moderate. Currently, Datadog’s AIOps is layered on their existing products. They also tout their ability to customize workflows and automated remedies to IT problems.

![Dynatrace logo]({{ site.baseurl }}/assets/cms/medialibrary/dynatrace.png)

Dynatrace - Dynatrace’s AIOps offering stands alone from other Dynatrace products. They also offer integrations with a number of current GSA tools. Dynatrace emphasizes that their AI Platform, “Davis” heavily focuses on actual customer impact, for example not initiating remedies or alerting when detected anomalies impact few or no customers. Finally, Dynatrace self-distinguishes themselves as superior at adapting to an organization’s evolving IT environment by scanning for new elements to the IT environment.

![Appdynamics logo]({{ site.baseurl }}/assets/cms/medialibrary/appdynamics.png)

Appdynamics - Now a part of Cisco, Appdynamics began as a traditional APM company and became a leader in that space; however, their AIOps product is relatively immature as of this writing. For example, they identify automated business-impact decision making as a future state, whereas other vendors currently have features addressing this need. That said, being under Cisco’s umbrella may allow Appdynamics to catch up quickly.

![Devo logo]({{ site.baseurl }}/assets/cms/medialibrary/devo.png)

Devo - Devo began as the only cloud-native APM company and is now centered on AIOps for both service and security operations. They are one of the few vendors who measure and deliver performance beyond traditional IT metrics by focusing on end-user experience. Third party evaluators also cite their unique ability to address changing data formats.

## White House Priorities

### AIOps Technology for COVID-19 

President Biden expressed his intent to move to quickly to contain the COVID-19 crisis by expanding testing, safely reopening schools and businesses, and taking science-driven steps to address the communities — especially communities of color — who have been hardest hit by this virus. Accordingly, the President launched a national vaccination program to inoculate the U.S. population efficiently and equitably. Following the pandemic, experts agree the workplace (and thus the IT landscape) are forever changed. The following resources explain potential applications for AIOps in that context:

[Why You Need AIOps in a Post-COVID World](https://sciencelogic.com/blog/why-you-need-aiops-in-a-post-covid-world)

* ScienceLogic explains that the increase in remote work during the pandemic dramatically increased incident reporting 3-5 fold. If remote work is here to stay, AIOps can lighten this increased IT workload.

[How AIOps is proactively helping organizations stay relevant](https://www.ey.com/en_hr/consulting/how-aiops-is-proactively-helping-organizations-stay-relevant)

* EY discusses how the pandemic accelerated many organization’s digital transformation plans. This naturally increases the availability of data and thus the need to analyze it. AIOps can assist organizations in this endeavor.

### Customer Service Executive Order

On December 13, 2021 President Biden issued an [executive order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/12/13/executive-order-on-transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government/) mandating the government be accountable “for designing and delivering services with a focus on the actual experience of the people whom it is meant to serve.” Further, the order identifies that, “Every interaction between the Federal Government and the public, whether it involves renewing a passport or calling for a status update on a farm loan application, should be seen as an opportunity for the Government to save an individual’s time (and thus reduce “time taxes”).” AIOps presents an opportunity for government agencies to reduce that ‘tax’ and smooth operations where the value chain possesses an IT component.

In the examples cited above, citizens expect a high degree of speed and reliability in service delivery. This is in part due to the perceived relative maturity of the customer experience (CX) in the private sector. The federal government can leverage AIOps tools to improve the CX in both of these areas. AIOps is specifically geared towards improving metrics that otherwise unaddressed led to customer frustration. Internally, these metrics include mean-time-to-detection (MTTD), mean-time-to-resolution (MTTR), service availability, and user reported versus automatically detected issues. Further, as noted in our AIOps [vendor overview](#companies-and-contracts), an increasing number of tools are attempting to measure business outcomes in addition to traditional IT metrics. These might include time and cost savings not just for the business or agency, but rather for the customer. In this way, AIOps is one path agencies can use to meet the objectives of this Executive Order.

### Cybersecurity

Similarly, the current Administration has placed an emphasis on cybersecurity through a series of [policies](https://www.whitehouse.gov/omb/briefing-room/2021/09/07/office-of-management-and-budget-releases-draft-federal-strategy-for-moving-the-u-s-government-towards-a-zero-trust-architecture/), [memorandums](https://www.whitehouse.gov/briefing-room/statements-releases/2022/01/19/fact-sheet-president-biden-signs-national-security-memorandum-to-improve-the-cybersecurity-of-national-security-department-of-defense-and-intelligence-community-systems/), and [orders](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/). AIOps holds a lot of promise to meet these objectives.

One of the reasons AIOps is likely to be more effective than individuals is that the tools have visibility into the entire organization’s IT infrastructure, rather than the limited view an individual or siloed security organization might have. Further, the sheer magnitude of logs and data generated by traditional cybersecurity monitoring tools makes it nearly impossible to analyze the data for threats in real time. A critical AIOps innovation is the speed at which this happens. As more data is generated, the faster the response occurs. That stands in direct contrast to a team of security analysts, who are likely to be slowed by an increase in the amount of data needing to be analyzed.

Additionally, the President’s Cybersecurity National Security Memorandum to Improve Cybersecurity specifically cites the objective of improving “the visibility of cybersecurity incidents that occur on \[systems].” Here, AIOps can be of benefit too. In addition to alerting, many AIOps tools allow security leaders to create customized service dashboards. This provides visibility across the IT organization as the current vulnerabilities, ongoing threats, and past remediations. For example, one vendor touts their dashboard’s ability to “correlate threats with application logs and telemetry from more than 500 turn-key integrations.” In a complex IT environment such as a large federal agency leveraging hundreds of applications and even more integration points, visualizing the threat landscape is an effective means of ensuring administrators fully grasp the situation at hand in instances where human intervention is required.

## Dependencies and Risks

### Dependencies

* In order to successfully implement AIOps there are a number of dependencies that must be accounted for before utilizing this technology. One of the biggest dependencies is the availability of data and the quality of that data. Without good data, artificial intelligence (AI) cannot be achieved; therefore, it is critical for businesses to first focus first on data cleansing and normalization prior to AIOps implementation. It is also important to ensure that enough data collection is taking place and that all elements needed for artificial intelligence are being captured. Lastly, it is important that those systems capturing that data are able to integrate seamlessly with AIOps, otherwise that data will not be optimally leveraged. Some legacy systems have strict data sharing properties that will prevent data from being accessed in real-time. If this is the case, migrating to a more modern system (while adhering to security requirements) will allow for applications to share data back and forth thus supporting the AIOps model.
* One additional dependency and prerequisite is the development of policies around AI. These policy should explicitly indicate what is allowed and restricted. Policies may include an ‘AI Security Policy’ and an ‘AI Privacy Policy.’ To supplement the policies, which are often times very difficult to comprehend, organizations should consider creating an easy to read ‘Playbook’ and/or an AI Centers of Excellence. These will ultimately drive user adoption and ensure offices utilizing AI have the necessary guidance to incorporate the technology, while adhering to agreed-upon policies.
* For offices to explore AI it is important to instantiate the necessary sandbox environments that will allow professionals to safely build AIOps solutions. These sandboxes enable AI professionals to develop and test their AI workflows without interrupting production environments. Exploring small scale pilots and proof of concepts are great low dollar investments that determine AIOps feasibility, which will require properly configured sandbox environments.
* A major dependency is the availability of data and AI scientists, either staffed in-house or contracted. If the required skill-set is not readily available within the organization, additional costs will be incurred through training or hiring contractors possessing the required AI skillset. It is important to account for these costs up front and determine the return of investment prior to moving forward with all AIOps initiatives. 

### Risks

* When implementing any new technology into an organization, there are always inherent risks. The first risk is introducing unrealistic expectations. Organizations fall victim thinking AI can solve all their problems, which is usually not the case. It is important to set tangible goals incrementally and scale small pilot projects to ensure that the data being captured is sound and that the AI models utilizing that data are operating and producing the expected results. Organizations may discover that AIOps is more of a “nice to have” rather than a “must have”. By setting clear measurable goals at the on-set, organizations are able to determine if their pursuit towards AIOps is justifiable.
* Organizations must take into account their current infrastructure to ensure they are compatible with their AIOps efforts. Some legacy systems make it difficult to integrate with AIOps or make it difficult to integrate without breaking the current functionality.
* Algorithm-related risks are incurred when automation is used within a predetermined algorithm. If the AI algorithms in place are not robust, biased, or limited, AIOps could perform automated tasks that would produce undesirable results. Privacy and security risks are also a concern, and as stated above, must be addressed by appropriate policy and a determination of what level risk is acceptable. This will vary by organization.
* Ongoing maintenance is one additional recurring risk that must always be assessed. Systems constantly change and are updated. AIOps that have been incorporated, must ensure these system changes do not negatively impact the current operational model or end users.
* When seeking contractor and/or vendor support, it is critical that the contract prevents vendor lock-in and addresses the risks of data ownership. Organizations, particularly government customers, frequently fall victim to an “endless” contractual commitment with a particular vendor, which prevents the organization from seeking services and technology elsewhere. Additionally, when contractors have developed custom solutions, organizations are surprised to discover that the contractor actually owns all the code. Ultimately, it is absolutely critical to establish well written agreements that clearly addresses and mitigates these risks by incorporating the necessary contracting and technical experts throughout the contract development lifecycle.

## Governance

![Photo of the United States Capitol]({{ site.baseurl }}/assets/cms/medialibrary/1024px-capitol_building_full_view.jpg "US Capitol building. Source: Wikimedia Commons")

Laws/Legislation, Regulations and Policy Related to AIOps

### Legislation

There are two recent laws relevant to AI:

* [H.R.133 - Consolidated Appropriations Act, 2021](https://www.congress.gov/bill/116th-congress/house-bill/133)
* [H.R.6395 - William M. (Mac) Thornberry National Defense Authorization Act for Fiscal Year 2021](https://www.congress.gov/bill/116th-congress/house-bill/6395)

#### H.R. 133 - Consolidated Appropriations Act, 2021

Noted Text from the bill:

“DIVISION U - HOMELAND SECURITY AND GOVERNMENTAL AFFAIRS PROVISIONS

This division establishes provisions related to homeland security and governmental affairs, including requirements regarding artificial intelligence (AI), synthetic opioid exposure, and countering unmanned aircraft systems.

Specifically, the division establishes the AI Center of Excellence to facilitate and coordinate federal government adoption of AI technologies. The Office of Management and Budget must issue guidance for agency use of AI, and the Office of Personnel Management must establish or update an occupational series to include AI positions. “

#### H.R.6395 - William M. (Mac) Thornberry National Defense Authorization Act for Fiscal Year 2021

Noted Text from the bill:

The National Defense Authorization Act for FY2021 (P.L. 116-283) included provisions addressing various defense- and security-related AI activities, as well as the expansive National Artificial Intelligence Initiative Act of 2020 (Division E).