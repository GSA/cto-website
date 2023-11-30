---
sidebar_position: 6
---

# Enhance security

GSA websites must:

- Use a secure connection (HTTPS) to deliver services.
- Enable HTTP Strict Transport Security, or HSTS, to instruct compliant browsers to assume HTTPS.
- Ensure the domain is preloaded by all major browsers to ensure the HSTS policy is in effect.
- Disable RC4 and 3DES ciphers and SSLv2 and SSLv3 protocols.
- Have a domain-level DMARC policy of `reject` to provide the strongest protection against spoofed email.
