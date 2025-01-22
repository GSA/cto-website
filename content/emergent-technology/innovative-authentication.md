---
title: Innovative Authentication
intro:

  text: The Future of Identity Management
  image: /assets/cms/emergent-technology/tumblr_mnqjhbd8t71rbkx51o1_400.gif

excerpt: The workforce and consumers want more convenient and user-friendly
  methods of authentication, without compromising security, reliability, and
  responsiveness.
resources: []
aliases:
  - /techradar/innovative-authentication/
---
## Background

The concept of innovative authentication goes beyond the use of traditional username and password methods to identify and authenticate a user. Innovative authentication  explores new and revolutionary  credentialing methods that enhance security while offering users a better experience.

## Possible Applications at GSA

At GSA there have been several efforts involving Innovative Authentication. We are seeing a move towards user-friendly innovative advancements, which promote multi-factor authentication for everyone, everywhere. Multi-factor ensures our workforce and customers all have options available for using two of the: what you have, what you know, or what you are methods to login to our applications. 

Below are some current use cases moving GSA further along the modernization path to creating more sustainable, user-friendly, and accessible options, and advancing our journey towards Zero Trust architectures. Individually, these efforts are not entirely futuristic. However, the alignment and final results will allow more robust capabilities so that the framework is in place to support many of the truly innovative next-gen authentication methods.

**Note**: These example efforts currently in work at GSA are part of its larger Zero Trust-related strategies. Therefore we are highlighting some of their key features and approaches and will defer to other official communications and publications. We will publish links to these as they come available. 

**Two GSA Use Cases:**

While authentication via CAC/PIV cards (ID badges) received a second government-wide push in 2010 with [OMB-11-11](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2011/m11-11.pdf), a decade of advancement has meant a significant increase in the number of physical tokens representing ‘things’ users must log to. While many Federal agencies have integrated and met the minimum guidelines, GSA has continued to add to its variety of methods which improve the use of CAC/PIV, particularly for the increased demand for a work from anywhere culture. 

**Use Case 1: Enterprise SSO Transformation**

In this first use case, GSA IT OCIO applications used by our workforce for daily business currently use an Enterprise SSO platform. The Enterprise SSO platform was first introduced in 2010 to support our initial cloud-native migrations for our workforce applications. The Enterprise SSO platform is used with some minor customizations, but generally, GSA leverages commercial out-of-the-box features. It provides options for configuring plug-and-play authentication options for GSA enterprise users. We use standards-based integrations, based on Security Assertion Markup Language (SAML) or OpenID Connect, for over 300 of our applications. Our approach allows us to more quickly pivot and be responsive to our mission needs, including when we expanded our work from anywhere options and when we considered accessibility for our diverse workforce. That said, the time has come to update the overall architecture, including the hardware, software, and protocols. 

Below is additional information on how GSA may expand the mechanics and steps toward more innovative approaches that will further support workforce-friendly, user-friendly, and secure options. For example, one area the team is looking to deploy is using WebAuthn for GSA enterprise users. 

The Web Authentication API (also known as [WebAuthn](https://webauthn.guide/)) is a [specification](https://w3c.github.io/webauthn/) written by the [W3C](https://www.w3.org/) and [FIDO](https://fidoalliance.org/), with the participation of Google, Mozilla, Microsoft, Yubico, and others. [WebAuthn](https://webauthn.guide/) - is used for Public Key Cryptography and Web Authentication (WebAuthn). The API allows servers to register and authenticate users using a secret (public-key cryptography) in a user-friendly option instead of a password. ([Source](https://webauthn.guide/))  What gets registered on an application is a Public Key and a randomly generated unique ID for any given application. The private key is generated and stored on a user’s device which in itself has various forms of secure, multi-factor authentication options to unlock that private key. 

There are two options now available in many devices, operating systems, and browsers developed and maintained by the industry.

**Platform vs Roaming Authentication [[source](https://developers.yubico.com/Developer_Program/WebAuthn_Starter_Kit/Platform_and_Roaming_Authenticators.html)]**  

Platform in plain terms is where the private key is securely generated and stored internally on a device such as a laptop, tablet, or phone. The end-user can unlock this private key registered with an application – or our enterprise single sign-on service – using native functionality. The unlock is based on what the end-user is most comfortable with using. It can be a fingerprint, face image, or simply a PIN value. The fingerprint or facial image is never shared or collected centrally. A user may need or want a choice based on what is most comfortable to use for their preferences. 

Roaming is essentially when a USB or other trusted device that supports the protocols is used in addition to the laptop, tablet or phone. Google Titan keys are a widely used example.

Most of these newer options have taken years to standardize and are built for newer laptops, tablets, phones, and browsers. We’re reviewing our government-furnished equipment, inventories, and strategies to identify the options available.

Our goal is for the GSA users to have a better overall experience on many of our different devices used for work. We also look to leverage the industry and academia work by using industry-standard, common options built for the scale of consumers worldwide. Password-less login capabilities are our goals. Couple this with our PIV credentials, and we can help protect our information, improve our user experiences, and be accessible for our diverse workforce needs. 

Four key items help GSA modernize, transform, and keep security relevant and integral to our culture: 

* Use of an enterprise single sign-on platform,
* A decade of using standards-based options to integrate our applications into a centralized authentication service(s),
* A focus on ensuring we use industry standards, and
* Incorporating our user and mission needs into the planning and testing.


**Use Case 2: Aligning to Users of our GSA services**

In this next use case, the teams are working with a wider net toward a fully ‘Federated’ model across the Federal and Private sector (the Public Citizens/Vendors) to standardize Authentication and Identity Management. 

The GSA IT ICAM Portfolio has led an effort to map the current login methods used by GSA Applications. The approach plans to align the Public with Login.gov, Federal (non-GSA) with Max.gov, and within GSA as mentioned in the first Use Case, Single Sign On (SSO) will use a combination of SecureAuth stack with the newer WebAuthn methodologies.

For GSA readers you can go further by viewing this internal ICAM site, [ICAM Overview](https://sites.google.com/a/gsa.gov/icam-portfolio/users/user-authentication-services?authuser=1). Authentication required.

## Adoption

The adoption of Innovative Authentication is important because it represents the intersection of security and access to any system.  Protecting data and information is key to the effective operation of any organization, whether it’s in academia, industry, or government. Below, we’ve outlined use cases for each.

**Academia**

One educational institution that has incorporated Innovative Authentication is the King Fahd University of Petroleum & Minerals (KFUPM) in Dhahran. They have implemented a multi-factor authentication (MFA) solution utilizing PINgrid and PINpass technologies, which generate a secure one-time-pattern (OTP). Instead of memorizing a word or phrase, this type of technology generates a pin grid for a pattern-based authentication approach, providing a security barrier that is easy to use and much stronger than the traditional password. As a result, staff and students were able to more easily access their accounts without the need to remember another password, all while knowing their information was safe from breach. [Source](https://www.information-age.com/education-latest-authentication-frontier-123497705/)

**Industry**

Forward-looking businesses recognize the passwordless trend and are streamlining the login process accordingly. Using a known device such as a cell phone, users can log into a platform by simply scanning a code with their phone’s camera, avoiding the need to input a password.

Some financial institutions have incorporated biometric authentication utilizing fingerprint scanners, voice recognition, or the phone’s camera to enable the user to conveniently confirm their identity via facial recognition technology for both internal banking employees and their customers.

Some retailers are exploring geolocation identification. Geolocation authentication could utilize a user’s mobile device to provide authentication services wherever and whenever they are needed. Geolocation allows a customer’s bank to access their location via their mobile device and verify that the user is in the same physical location in which the transaction is being requested. In this particular scenario, there is no need for the customer to respond to a notification. Instead, the user simply has a seamless authentication experience. [Source](https://www.forbes.com/sites/forbestechcouncil/2018/06/04/the-future-of-authentication-is-here/?sh=1c83f912432e)

**Government**

Some agencies - are already utilizing advanced technology such as biometrics. Since 2016, U.S. Customs and Border Protection has been working with airlines to use facial recognition technology as part of the pre-boarding screening process; at least five airlines now use it, largely for international flights (it’s voluntary for American citizens).

In 2017, former President Donald Trump signed an executive order requiring that the top 20 U.S. airports use biometric technology and facial recognition by 2021 for all international passengers. He also signed the National Strategy to Combat Terrorism Travel, which calls for the increased use of biometric technology and data to stop terrorists from entering the U.S. [Source](https://fedtechmagazine.com/article/2019/08/how-government-uses-biometric-authentication-technology-perfcon)

GSA’s approach to Innovative Authentication is to unify the federal sector and allow government agencies to utilize a single form of authentication. GSA’s TTS Program has developed login.gov which is currently utilized across the federal government for credentialing and authentication services. Along with that, GSA has a shared services platform called MAX.gov, which allows federal government agencies to access the host of capabilities available on the MAX.gov platform.

## Companies and Contracts

{{< usa-alert heading="Disclaimer" type="warning" slim=false icon=true >}}GSA in no way endorses or recommends any particular company. The information listed below is intended to provide some centralized resources for current companies actively developing innovative authentication. Inclusion or omission from this list merely reflects the limited resources available to the team generating this report. Many of the statements below rely on each company’s self-assertion rather than this team’s assessment of a given capability.{{< /usa-alert >}}

There are a wide variety of companies providing various types of Authentication tools, hardware, and software. Within this space, we’re looking to focus mainly on the software provided which enables the hardware to implement security controls for access to virtual and physical space.

As suggested in CSO’s article on moving beyond passwords, we’ve broken down these companies into four areas: ([Source](https://www.csoonline.com/article/3634454/consumers-are-done-with-passwords-ready-for-more-innovative-authentication.html))

1. One-time passwords (OTP)
2. Biometrics
3. Multi-Factor authentication
4. Invisible authentication

**Authentication Centric Companies**

1. **One-time passwords (OTP)**

[Thales](https://cpl.thalesgroup.com/access-management/authenticators/one-time-password-otp) provides OTP services through their SafeNet suite of products. These include both time and event-based services. Time-based OTPs change with regular frequency whereas event-based OTPs are generated at the user’s request. Thales also supports SMS, email, and push-notification-based OTPs, which they refer to as “Out of Band” authentication.

[SMS Global](https://www.smsglobal.com/us/one-time-password/) offers a host of OTP resources, including two-way SMS, MMS, toll-free numbers, and other related services. Their OTPs can be designated as long or shortcodes, depending on user needs. They also offer an SMS web platform that can be used to send on-demand generated codes to users in a customer support situation where identity verification is required.

[TypingDNA](https://www.typingdna.com/) touts itself as a better alternative to traditional 2FA OTPs owing to their user-friendliness. Users are only prompted for OTPs on three occasions: when they first enroll, if they fail authentication, or if they choose to bypass initial verification. This provides an easier user experience and can save on SMS costs. They also offer matching ‘phrases’ rather than traditional number strings.

2. **Biometrics**

Traditional security company [Kensington](https://www.kensington.com/) has recently begun offering biometric authentication solutions. Technologies like their Their VeriMark USB keys offer a low-cost way of incorporating fingerprint authentication into existing systems

[Clearme](https://www.clearme.com/) is a biometric authentication company currently operating at dozens of TSA airport checkpoints. Instead of providing identity documents, registered users can verify their identity and valid presence at airports (and other private-sector venues) using either their iris, fingerprint, or facial recognition technology. A single kiosk can identify travelers through any one, or a combination, of these unique traits. CLEAR is also [Safety Act](https://www.safetyact.gov/) certified by the Department of Homeland Security.

[Mitek Systems](https://www.miteksystems.com/blog/finger-vein-recognition-biometrics) uses finger “vein biometrics”, also called “vein matching” which analyzes a person’s blood vessel pattern visible from the surface of the skin of fingers. Users are registered by capturing images of the veins inside their hands by shining near-infrared light on their fingers. Unlike fingerprints, and to a lesser extent retinal/iris scans, this relative invisibility makes it more difficult to counterfeit. Along the same lines, the system can identify active blood flowing through the user’s veins, making counterfeiting even more difficult.

3. **Multi-Factor authentication**

[SecureAuth](https://www.secureauth.com/) is the current go-to GSA solution for MFA. SecureAuth requires users to enter their username, password, and code sent by email, Authenticate app, SMS, or direct voice dial. They also offer passwordless touch and face biometric integration, although those are not yet in use at GSA.

4. **Invisible authentication**

[Behaviosec](https://www.behaviosec.com/) is developing a system of authentication that analyzes the rhythm of a user’s typing, level of applied key pressure, swipe speed, finger positioning, and typing velocity to establish identity. As the user uses the system more and more, the learning algorithm updates their biometric profile.

WinMagic offers a product called [MagicEndpoint](https://www.winmagic.com/products/passwordless-authentication), which is a passwordless authentication company that uses users’ local gestures combined with device authentication to control system access. This solution has the benefit of requiring no extra hardware, though it can be combined with MFA verification or other traditional authentication tools.

**Contracts**

Buy.GSA.gov: This website is designed to lower frustration and make it easier for

1. Government agencies to navigate the complete acquisition process.
2. Industry to bring needed supplies and services into the federal market space.

[[About](https://buy.gsa.gov/about-us)]

Buy.gsa.gov is an official website run by the United States General Services Administration ([GSA.gov)](http://gsa.gov/). The Digital Innovation Division, a team within GSA’s Federal Acquisition Service, manages the development of the site. Visit GSA.gov’s [About Us](https://www.gsa.gov/about-us) page for more information about the agency.

**Also see:**

GSA [eLibrary](https://www.gsaelibrary.gsa.gov/ElibMain/home.do) is your one source for the latest GSA contract award information.  GSA offers unparalleled acquisition solutions to meet today’s acquisition challenges.  GSA’s key goal is to deliver excellent acquisition services that provide the best value, in terms of cost, quality, and service, for federal agencies and taxpayers. 


![GSA E-Library](/assets/cms/emergent-technology/elibrary-searchbar.jpg "The GSA eLibrary")

**Steps:**

1. Use the Search bar on the homepage and enter ‘Authentication Services’
2. 1. Other examples of keyword searches (‘Multi-Factor Authentication’ | ‘Biometric Authentication’)
3. Click the source number to view a list of categories. 
4. Click the category number (i.e. SIN) to view a list of contractors.

**Example Results:**

[ALLIANT 2](https://www.gsaelibrary.gsa.gov/ElibMain/scheduleSummary.do?scheduleNumber=ALIAN2)

The Alliant 2 GWAC is a multiple-award, indefinite-delivery, indefinite-quantity (MA/IDIQ) GWAC that will enable federal civilian agencies and the DOD to provide Information Technology (IT) services and IT services-based solutions from the most qualified businesses. FAR 8.404 does not apply to GWACs. Orders issued under GWACs use FAR 16.505 procedures.
Computer Systems Design Services - Infrastructure includes hardware, software, licensing, technical support, and warranty services from third-party sources, as well as technological refreshment and enhancements for that hardware and software…. Service Access and Delivery: These components are responsible for facilitating the end-to-end collection and distribution of data that is either entered or requested by a user. These components include all functions necessary to communicate in a client-server environment. Examples of these components include, but are not limited to: Web browsers Virtual Private Network (VPN) Remote Authentication Dial-In User Service (RADIUS) Peer-to-peer Section 508 compliance HyperText Transfer Protocol (HTTP) File Transfer Protocol (FTP) Simple Mail Transfer Protocol (SMTP).


[MAS](https://www.gsaelibrary.gsa.gov/ElibMain/scheduleSummary.do?scheduleNumber=MAS) - (Multiple Award Schedule) - Available offerings include commercial goods and services organized by 12 Large Categories, corresponding Subcategories, and SINs.

[541519ICAM](https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?scheduleNumber=MAS&specialItemNumber=541519ICAM&executeQuery=YES)

Identity, Credentialing, and Access Management (ICAM) - Managed service offerings for electronic credentials (assurance levels IAL, AAL, and FAL), identity and access management, authentication, and identity and access management professional services.

[541519PKI](https://www.gsaelibrary.gsa.gov/ElibMain/sinDetails.do?scheduleNumber=MAS&specialItemNumber=541519PKI&executeQuery=YES)

Public Key Infrastructure (PKI) Shared Service Providers (PKI SSP) Program - PKI SSPs shall provide reliable, authenticated, policy-compliant service offerings to support Federally-issued Personal Identity Verification (PIV), Personal Identity Verification Interoperability (PIV-I), and associated certificates and cryptographic key service offerings. Per 40 U.S.C. Federal and State agencies and Tribal organizations can leverage these service offerings to allow authorized personnel physical access to facilities and logical access to networks per X.509 Certificate Policy for the U.S. Federal PKI Common Policy Framework.

## **Dependencies and Risks**

To successfully implement innovative authentication methods many dependencies and risks must be identified, mitigated, and monitored.

### **Dependencies**

**Compatibility**

Authentication methods must be compatible with the tools necessary for the workforce to conduct their day-to-day activities. These tools may include computers, servers, hardware peripherals, internet browsers, operating systems, and patches/hotfixes. As these components evolve and new technologies are developed, these authentication methods must still operate properly.

**Wants and Expectations**

The workforce expects that the ease of their work experience mimics their personal lives. Nearly everyone leverages authentication technology daily in their personal lives. Bridging these experiences fosters satisfactio, and a seamless transition between environments.

**Protocol** 

A list of authentication standards with clear direction and guidance will help agencies standardize their authentication methods, thus avoiding a “mixed bag” of solutions. 

**Fail-Safe**

Fail-safes that allow for users to authenticate in many ways are required. For example, a self-service password reset option is a simple fail safe. Additionally, multiple options for a second authentication factor can assist users who may find themselves in unique circumstances, such as temporarily without a phone.

**Personas**

It is critical to identify all of your workforce’s user personas to determine the suitability of any proposed authentication method(s). understanding the user community, this reduces risk, identifies opportunities, and ensures a more robust and user-centric solution is put in place.

**Ease of Use**

Consider the ease of use at varying levels (e.g. beginner, intermediate, and advanced).  For example, a highly secure system with only a few users (e.g. a weapons system) might warrant more complicated authentication where advanced training is appropriate for effective operation, whereas, a generally accessible system to a wide swath of employees (e.g. an intranet), should be easier to use with little training.

**Support**

As with any new technology, it’s important to have readily available, adequately trained staff to support end-users. This minimizes downtime and increases user satisfaction.

**Tools**\
Use dedicated tools to scan your dependency tree for security risks. Many programming languages and utilities can spot compromised dependencies. Consider using one or more of the following tools:

* [ShiftLeft](https://www.shiftleft.io/how-it-works/)
* [Github security alerts](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/)
* [GitLab security scanning](https://docs.gitlab.com/ee/development/integrations/secure.html)
* [npm audit](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities) and [retire.js](https://retirejs.github.io/retire.js/) for Node
* [bundler audit](https://github.com/rubysec/bundler-audit) for Ruby.
* [WASP dependency-check](https://jeremylong.github.io/DependencyCheck/) for Java and .NET

**Diligence**

Treat security bulletins as required, urgent reading. Ensure your team has a process for identifying security announcements from your software vendors. Best practices may include signing up for mailing lists, joining forums, or following library developers on social media. The development community is often the first to become aware of security issues.

**Penetration Testing**

Make penetration testing (or “pen tests” for short), part of your development lifecycle. Penetration testing tools work by tools attempting to exploit known vulnerabilities. ([Source](https://www.hacksplaining.com/prevention/toxic-dependencies))

**Security Breach Planning**

Define protocols so that in the event of a break, systems containing data the affected user(s) had access to can be locked down and quickly secured. Threat assessments, impact assessments, and root cause analyses must be conducted to resolve any potential breach and prevent its occurrence.

### **Risks**

Potential risks associated with Innovative Authentication include:

* Many Innovative Authentication tools require collecting users’ biometric data or other personal information. Data can be breached and the scope of the resulting exploitation becomes worse than if the secured system had been breached through traditional means.
* New tools, processes, and particularly those involving biometrics, may face a steep user acceptance curve.
* Unlike other emerging technologies, the nature of IT security means that there’s always an adversary seeking to develop new explorations. No authentication tool should become a ‘set it and forget it’ implementation. No matter the tool, system managers must constantly assess and mitigate new threats, by either improving their current implementation or seeking out new technology.

## Laws, Legislation, Regulations 

In 2022, the White House issued a Zero Trust Strategy which will ultimately change how employees and citizens access federal systems, primarily through multi-factor authentication. Additionally, The National Institute of Standards and Technology (NIST) is also working to update PIV standards to accommodate additional types of authentication methods. [Source](https://federalnewsnetwork.com/cybersecurity/2022/01/white-house-sees-chance-to-design-new-user-experiences-through-zero-trust-strategy/)

In 2017, President Donald Trump signed an executive order requiring that the top 20 U.S. airports use biometric technology and facial recognition by 2021 for all international passengers. He also signed the National Strategy to Combat Terrorism Travel, which calls for the increased use of biometric technology and data to stop terrorists from entering the U.S. [Source](https://fedtechmagazine.com/article/2019/08/how-government-uses-biometric-authentication-technology-perfcon)

While the future of authentication is still to be determined by way of the Zero Trust Strategy, some agencies are already utilizing advanced technology such as biometrics. Since 2016, U.S. Customs and Border Protection has been working with airlines to use facial recognition technology as part of the pre-boarding screening process; at least five airlines now use it, largely for international flights. This is voluntary for American citizens.

**Cybersecurity laws and regulations in US 2022**

Several states have enacted cybersecurity laws that may affect the authentication of state and private sector systems. The consequence is an assortment of federal and state regulations that vary significantly in scope and jurisdiction for various businesses. [Source](https://www.eescorporation.com/cybersecurity-laws-and-regulations-in-us/)

**Currently Implemented Laws Crucial to Federal Cybersecurity**

1996 Health Insurance Portability and Accountability Act (HIPAA), the 1999 Gramm-Leach-Bliley Act, and the 2002 [Homeland Security Act](https://www.britannica.com/topic/Homeland-Security-Act) are the three most crucial federal cybersecurity laws in effect today. These three requirements necessitate that healthcare, financial, and government entities ensure the security of their systems and data. In any case, it’s hard to predict whether an acceptable level of protection would be successful. The Federal Information Security Management Act (FISMA) mandates that all federal agencies implement information security policies, concepts, and standards. This list excludes Internet service providers and software developers. Standards’ use of vague language makes this more challenging.  [Source](https://www.eescorporation.com/cybersecurity-laws-and-regulations-in-us/)

**OMB Memorandum 11-11 - (HSPD-12 | PIV - Smartcards)**

Continued Implementation of Homeland Security Presidential Directive (HSPD-12) - Policy for a Common Identification Standard for Federal Employees and Contractors.  The Cyberspace Policy Review, adopted by the President, and the President’s Budget for Fiscal Year 2011 highlighted the importance of identity management in protecting the nation’s infrastructure. HSPD-12 is a strategic initiative intended to enhance security, increase Government efficiency, reduce identity fraud, and protect personal privacy. HSPD-12 requires agencies to follow specific technical standards and business processes for the issuance and routine use of Federal Personal Identity Verification (PIV) smartcard credentials…to verify employees’ and contractors’ identities.

Specific benefits of the standardized credentials include:

 1. secure access to federal facilities and disaster response sites
 2. multi-factor authentication
 3. digital signature
 4. encryption capabilities

## Supporting Documentation

Below are some additional referenced public articles from various sites, newsletters, and media organizations. These have been used to source some of the content of the page as well as provide a central point of reference for just the surface level of information available online. Listing here is in no way an endorsement nor is it meant to claim credit for any of their content. We’ve tried to carefully cite all mentions of examples, charts, pictures, and other media referenced from them so that further exploration can be done by anyone interested in a deeper understanding of all of our mentioned emerging technologies.

### Some additional resources

* [OMB Memorandum M-11-11 (HSPD) 12 Policy](https://www.cac.mil/Portals/53/Documents/m-11-11.pdf)
* [CSO: Consumer Choice for Innovative Authentication](https://www.csoonline.com/article/3634454/consumers-are-done-with-passwords-ready-for-more-innovative-authentication.html)
* [FNN: White House Zero Trust Strategy](https://federalnewsnetwork.com/cybersecurity/2022/01/white-house-sees-chance-to-design-new-user-experiences-through-zero-trust-strategy/)
* [WebAuthn Guide](https://webauthn.guide/)
