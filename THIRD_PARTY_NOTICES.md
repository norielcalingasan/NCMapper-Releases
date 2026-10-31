# Third-party software, mapping data and branding

The root MIT license covers NCMapper's own software and documentation. It does not replace third-party software/data licenses, grant rights in resident evidence, or grant trademark rights.

## Windows runtime

The portable client includes Electron 45.1.0 and its Chromium/Node.js runtime. The extracted distribution contains `LICENSE.electron.txt` (Electron's license, renamed by the packager) and `LICENSES.chromium.html`; both must be preserved. NCMapper's own `LICENSE` and this notice are bundled inside `resources/app.asar`. Additional dependency notices remain governed by their respective licenses.

- [Electron license](https://github.com/electron/electron/blob/main/LICENSE)
- Chromium and other runtime notices are in the extracted runtime's `LICENSES.chromium.html` file.

Angular, Three.js, MapLibre, NestJS, SQLite, MySQL client libraries and other dependencies retain their own licenses. Installed versions and integrity are recorded by the application's lockfile; the downloadable client loads the separately hosted frontend rather than embedding the backend or city database.

## Mapping sources

The Windows download contains no city database, resident contribution, house photograph, device fix or service credential. Connecting to a separately configured community server can load geographic data and reference tiles under that server's recorded provenance and permissions.

- OpenStreetMap-derived records: © OpenStreetMap contributors, [ODbL and attribution](https://www.openstreetmap.org/copyright). Preserve applicable database-license obligations and source metadata when reusing exports.
- Reference vector tiles: [OpenFreeMap attribution](https://openfreemap.org/) includes OpenFreeMap, © OpenMapTiles and © OpenStreetMap contributors. Displaying reference tiles does not grant rights to unrelated imagery or screenshots.
- The inspected Olongapo boundary records geoBoundaries / NAMRIA / PSA / OCHA attribution, simplified 2020 geometry and original CC BY 3.0 IGO licensing. Preserve the exact source/license metadata associated with each imported boundary; see [geoBoundaries](https://www.geoboundaries.org/).

Contributor observations, private evidence and newly collected datasets need their own permission and data-sharing terms. The software MIT license does not automatically relicense them. A public mapping-service launch remains subject to its documented privacy and data-rights review.

NCMapper names and logos identify this application; no permission to imply endorsement by its contributors or mapping providers is granted by these notices.
