# Security Policy

Even though open source repositories are outside of the scope of our bug bounty program and therefore not eligible for bounty rewards, I will ensure that your finding gets passed along to the appropriate maintainers for remediation.

## Reporting Security Issues

If you believe you have found a security vulnerability in this repository, please report it to me at [yanjinli502.ghissue@gmail.com](mailto:yanjinli502.ghissue@gmail.com).

Please do not report security vulnerabilities through public GitHub issues, discussions, or pull requests.

Please include as much of the information listed below as you can to help me better understand and resolve the issue:

- The type of issue (e.g., buffer overflow, SQL injection, or cross-site scripting)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

This information will help me triage your report more quickly.

## Policy

If I verify a reported security vulnerability, our policy is:

- I will patch the current release branch, as well as the immediate prior minor release branch.

- After patching the release branches, I will immediately issue new security fix releases for each patched release branch.