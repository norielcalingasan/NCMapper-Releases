# Pilot verification

Checked 2026-10-31 (Asia/Manila). This is an unsigned client pilot with explicit limits, rather than a certification of field accuracy or minimum hardware.

## Executed software checks

| Check | Observed result |
|---|---|
| `npm test` in the application working tree | **174 passed**: 14 shared, 87 backend, 59 frontend, 14 desktop; no failures/cancellations/skips |
| `npm run build` | Backend TypeScript and Angular production build passed |
| Isolated MySQL 9.4.0 acceptance | Ten checks passed: fresh schema, CRUD-only account, private save/reopen and new fields, ownership/self-review denial, independent publication, private-field stripping and portable backup/restore |
| Windows workflow | EXE launch, demo sign-in, 8 × 10 m/two-floor preset, private save, actual roof/floor/window/door 3D and browser reopen of the saved draft |
| Browser review | Separate contributor/reviewer/public workflow passed; a 7 × 9 m/two-floor synthetic design showed 63/126 m² and public version 1 after approval |
| Layout | Checked wide and 320 px views, keyboard focus, native 200% enlarged view and restoration to normal 100% scale |
| Packaging/privacy | Explicit client allowlist includes canonical notices; tests reject missing notices and exclude synthetic credential/server-data files |
| Download-verification tests | Three checks cover byte tampering, unsafe checksum paths and replacement manifests against pinned EXE metadata |
| Runtime dependency audit | `npm audit --omit=dev` reported zero vulnerabilities after updating NestJS to 12.3.2 / Multer 2.5.0 |

The application checks apply to the developer working tree; this public repository contains distribution documents and download-verification tooling. Artifact integrity and the exact packaged payload are recorded in `source-manifest.json`, `SHA256SUMS.txt` and `RELEASE.json`. Checksums establish integrity against those records, not a publisher signature.

The complete development audit still reports 15 moderate dependency entries related to the minimatch glob-pattern denial-of-service advisory in packaging tools. These packages are not in the EXE's application payload. Packaging uses a fixed reviewed file allowlist rather than remote/user-supplied glob patterns. Upstream electron-builder 26.18.0 was current when checked; the audit's proposed downgrade to an old major was not applied. This documented tooling limitation is not a claim that the entire development dependency tree is vulnerability-free.

## Development-PC baseline

Anonymous local HTTP measurements used an i5-10400/32 GiB development PC with GTX 1050 Ti. All **34,678** approved footprints were returned without truncation in **14,900,596 expanded JSON bytes**. The first observed request took about 1.76 s; three subsequent requests took about 106–109 ms before JSON parsing. Cache was not cleared, so the first observation is not a controlled cold-cache test.

Twenty requests for one neighbourhood returned 185 features in the last page, with about **68 ms p50 / 80 ms p95** response time. These are local read-request observations. They do not measure browser rendering/FPS, hosted concurrency or a 4 GB/integrated-GPU device.

## Not certified by this release

- Independent surveyed building corners, actual floor dimensions/counts, real GPS residuals and opening/exit observations.
- Representative 4 GB/integrated-GPU hardware, sustained FPS/memory and physical native location-provider behavior.
- A public hosted community service, its retention/erasure procedures and operational capacity.
- Code signing, an automatic updater or a production support commitment.

Use synthetic test records when evaluating the client. Obtain a coordinator-approved community server and appropriate field/reference checks before relying on contributed map records.
