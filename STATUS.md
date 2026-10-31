# Current pilot status

Updated 2026-10-31.

The Windows pilot is published. Its eight uploaded assets were downloaded again; all seven entries in `SHA256SUMS.txt` and the EXE identity pinned in `RELEASE.json` verified successfully. The EXE SHA256 is `fe1f3a54ec282818cf58168a87d0194b41717142088dbf973ae517918716c301`.

The application working tree passed 174 tests and its backend/frontend builds. The public download-verification tooling passed three tests locally. Runtime dependency audit reported zero vulnerabilities; the development-tool limitations are documented in [verification](VERIFICATION.md).

The release verification workflow was triggered, but its runner did not start because of an account-level restriction. Hosted CI therefore has no passing result. The checks above were executed locally against the published download. The workflow can be dispatched after runner access is restored.

The release remains an unsigned prerelease. Actual building/GPS precision, physical minimum-device support, native location-provider behavior and hosted community-service operations remain uncertified. No public mapping-server endpoint is supplied by this download repository.
