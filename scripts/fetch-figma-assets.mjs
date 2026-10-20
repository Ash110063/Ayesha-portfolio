// Downloads every static asset from the Figma frame (AR-DS, node 432:30)
// into /public/assets. Runs automatically before every build (prebuild) and
// skips files that already exist, so committed assets are never overwritten.
// Run manually with:  npm run assets
//
// The Figma asset links below are temporary (they expire ~7 days after
// each export date). If they have expired, re-export the files from Figma with the
// same names (see the "file" column) and drop them into /public/assets.

import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Figma export links expire ~7 days after export.
const NEW = // exported 18 Oct 2026
  "https://www.figma.com/api/mcp/asset/ff4039c0-2544-4981-a1d8-3e1e057fa18e";

const assets = [
  // All current assets are committed in public/assets (laptop.png, logo.svg,
  // slots-icon.svg, icons/uiux.svg, icons/arrow.svg), so nothing is fetched.
  // Add [NEW, "<figma asset file>", "<local name>"] rows here for new layers.
];

const outDir = path.join(process.cwd(), "public", "assets");
let ok = 0;

for (const [base, remote, file] of assets) {
  const dest = path.join(outDir, file);
  try {
    await access(dest);
    console.log(`• ${file} (already present)`);
    ok++;
    continue;
  } catch {}
  try {
    const res = await fetch(`${base}/${remote}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`✓ ${file}`);
    ok++;
  } catch (err) {
    console.error(`✗ ${file} — ${err.message}`);
  }
}

console.log(`\n${ok}/${assets.length} assets saved to public/assets`);
if (ok < assets.length) {
  console.log(
    "Some links may have expired — export those layers from Figma using the names above."
  );
}
