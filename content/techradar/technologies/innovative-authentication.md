---
title: Innovative Authentication
intro:
  text: The Future of Identity Management
  image: /assets/cms/techradar/tumblr_mnqjhbd8t71rbkx51o1_400.gif
excerpt: The workforce and consumers want more convenient and user-friendly
  methods of authentication, without compromising security, reliability, and
  responsiveness.
layout: technologies-single
---
# Background

Innovative authentication goes beyond the traditional username and password methods. Instead, we will explore new and innovative ways of credentialing and user management.



# Possible Applications at GSA

Currently at GSA there have been several efforts involving Innovative Authentication. The concept goes well beyond the days of simple username and password. Both the near and long-term future of Innovative Authentication methods and technologies. We are seeing a move towards user-friendly innovative advancements, which promotes multi-factor authentication for everyone, everywhere. Multi-factor ensures our workforce and customers all have options available for using two of the: what you have, what you know or what you are methods to login to our applications. 

 Below are some current use cases moving GSA further along the modernization path to create more sustainable, user friendly and accessible options, and advance our journey towards Zero Trust architectures. Individually, these efforts are not entirely futuristic. However, the alignment and final results will allow more robust capabilities so that the framework is in place to support many of the truly innovative next-gen authentication methods.

**Note**: These example efforts currently in work at GSA are part of its larger Zero Trust related strategies. Therefore we are highlighting some of their key features and approaches and will defer to other official communications and publications. We will publish links to these as they come available. 



**Two GSA Use Cases**

While authentication via CAC/PIV cards (ID badges) received a second government-wide push in 2010 with [OMB-11-11](https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2011/m11-11.pdf), a decade of advancement has meant a significant increase in the number of physical tokens representing ‘things’ users must log to. While many Federal agencies have integrated and met the minimum guidelines, GSA has continued to add to its variety of methods which improve on use of CAC/PIV, particularly with respect to the increased demand for a work from anywhere culture. 



**Use Case 1: Enterprise SSO Transformation**

In this first use case, GSA IT OCIO applications used by our workforce for daily business currently use an Enterprise SSO platform. The Enterprise SSO platform was first introduced in 2010 to support our initial cloud native migrations for our workforce applications. The Enterprise SSO platform is used with some minor customizations, but generally GSA leverages commercial out-of-the-box features. It provides options for configuring plug-and-play authentication options for GSA enterprise users. We use standards based integrations, based on Security Assertion Markup Language (SAML) or OpenID Connect, for over 300 of our applications. Our approach allows us to more quickly pivot and be responsive to our mission needs, including when we expanded our work from anywhere options and when we considered accessibility for our diverse workforce. That said, the time has come to update the overall architecture, including the hardware, software, and protocols. 

Below is additional information around how GSA may expand the mechanics and steps toward more innovative approaches that will further support workforce friendly, user friendly, and secure options. For example, one area the team is looking to deploy is using WebAuthn for GSA enterprise users. 

The Web Authentication API (also known as [WebAuthn](https://webauthn.guide/)) is a [specification](https://w3c.github.io/webauthn/) written by the [W3C](https://www.w3.org/) and [FIDO](https://fidoalliance.org/), with the participation of Google, Mozilla, Microsoft, Yubico, and others. [WebAuthn](https://webauthn.guide/) which is used for Public Key Cryptography and Web Authentication (WebAuthn). The API allows servers to register and authenticate users using a secret (public key cryptography) in a user-friendly option instead of a password. ([Source](https://webauthn.guide/))  What gets registered on an application is a Public Key and a randomly generated unique ID for any given application. The private key is generated and stored on a user’s device which in itself has the various forms of secure, multi-factor authentication options to unlock that private key. 

There are two options now available in many devices, operating systems, and browsers developed and maintained by industry.



**Platform vs Roaming Authentication [[source](https://developers.yubico.com/Developer_Program/WebAuthn_Starter_Kit/Platform_and_Roaming_Authenticators.html)]**  

Platform in plain terms is where the private key is securely generated and stored internally to the device such as a laptop, tablet or phone. The end user can unlock this private key registered with an application – or our enterprise single sign on service – using native functionality. The unlock is based on what the end user is most comfortable with using. It can be a fingerprint, face image, or simply a PIN value. The fingerprint or facial image is never shared or collected centrally. A user may need or want a choice based on what is most comfortable to use for their preferences. 

Roaming is essentially when a USB or other trusted device that supports the protocols is used in addition to the laptop, tablet or phone. Google Titan keys are a widely used example.

Most of these newer options have taken years to standardize and are built for newer laptops, tablets, phones and browsers. We’re reviewing our government furnished equipment, inventories and strategies to identify the options available.

Our goal is for the GSA users to have a better overall experience on many of our different devices used for work. We also look to leverage the industry and academia work by using industry standard, common options built for the scale of consumers worldwide. Password-less login capabilities are our goals. Couple this with our PIV credentials, and we can help protect our information, improve our user experiences, and be accessible for our diverse workforce needs. 

Four key items help GSA modernize, transform, and keep security relevant and integral to our culture: 

* Use of an enterprise single sign-on platform, 
* A decade of using standards based options to integrate our applications to a centralized authentication service(s), 
* A focus on ensuring we use industry standards, and 
* Incorporating our user and mission needs into the planning and testing. 



**Use Case 2: Aligning to Users of our GSA services**

In this next use case, the teams are working with a wider net toward a fully ‘Federated’ model across the Federal and Private sector (the Public Citizens/Vendors) to standardize Authentication and Identity Management. 

The GSA IT ICAM Portfolio has led an effort to map the current login methods used by GSA Applications. The approach plans to align the Public with Login.gov, Federal (non-GSA) with Max.gov, and within GSA as mentioned in the first Use Case, Single Sign On (SSO) will use a combination of Old/Current SecureAuth stack with the newer WebAuthn methodologies.

For GSA readers you can go further by viewing this internal ICAM site, [ICAM Overview](https://sites.google.com/a/gsa.gov/icam-portfolio/users/user-authentication-services?authuser=1). Authentication required.



# Adoption

The adoption of Innovative Authentication is important because it represents the intersection of security and access to any system.  Protecting data and information is key to the effective operation of any organization, whether it’s in academia, industry, or government. Below, we’ve outlined uses cases for each.

**Academia**

One educational institution that has incorporated Innovative Authentication is the King Fahd University of Petroleum & Minerals (KFUPM) in Dhahran. They have implemented a multi-factor authentication (MFA) solution utilizing PINgrid and PINpass technologies, which generate a secure one-time-pattern (OTP). Instead of memorizing a word or phrase, this type of technology generates a pin grid for a pattern-based authentication approach, providing a security barrier that is easy to use and much stronger than the traditional password. As a result, staff and students were able to more easily access their accounts without the need to remember another password, all while knowing their information was safe from breach. [Source](https://www.information-age.com/education-latest-authentication-frontier-123497705/)



**Industry**

Forward-looking businesses recognize the passwordless trend and are streamlining the login process accordingly. Using a known device such as a cell phone, users can log into a platform by simply scanning a code with their phone’s camera, avoiding the need to input a password.

Some financial institutions have incorporated biometric authentication utilizing fingerprint scanners, voice recognition, or the phone’s camera to enable the user to conveniently confirm their identity via facial recognition technology for both internal banking employees and their customers.

Some retailers are exploring geolocation identification. Geolocation authentication could utilize a user’s mobile device to provide authentication services wherever and whenever they are needed. Geolocation allows a customer’s bank to access their location via their mobile device and verify that the user is in the same physical location in which the transaction is being requested. In this particular scenario, there is no need for the customer to respond to a notification. Instead the user simply has a seamless authentication experience. [Source](https://www.forbes.com/sites/forbestechcouncil/2018/06/04/the-future-of-authentication-is-here/?sh=1c83f912432e)



**Government**

There are some agencies that are already utilizing advanced technology such as biometrics. Since 2016, U.S. Customs and Border Protection has been working with airlines to use facial recognition technology as part of the pre-boarding screening process; at least five airlines now use it, largely for international flights (it’s voluntary for American citizens).

In 2017, former President Donald Trump signed an executive order requiring that the top 20 U.S. airports use biometric technology and facial recognition by 2021 for all international passengers. He also signed the National Strategy to Combat Terrorism Travel, which calls for the increased use of biometric technology and data to stop terrorists from entering the U.S. [Source](https://fedtechmagazine.com/article/2019/08/how-government-uses-biometric-authentication-technology-perfcon)

GSA’s approach to Innovative Authentication is to unify the federal sector and allow government agencies to utilize a single form of authentication. GSA’s TTS Program has developed login.gov which is currently utilized across the federal government for credentialing and authentication services. Along with that, GSA has a shared services platform called MAX.gov, which allows federal government agencies to access the host of capabilities available on the MAX.gov platform.