// Downloads every static asset from the Figma frame (AR-DS, node 432:30)
// into /public/assets. Runs automatically before every build (prebuild) and
// skips files that already exist, so committed assets are never overwritten.
// Run manually with:  npm run assets
//
// The Figma asset links below are temporary (they expire ~7 days after
// 16 Oct 2026). If they have expired, re-export the files from Figma with the
// same names (see the "file" column) and drop them into /public/assets.

import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const P =
  "https://www.figma.com/api/mcp/asset/f3aeae34-8cfa-4732-9fc9-225cb9deb701";

const assets = [
  // Mockup photos
  ["22261.png", "laptop.png"],
  // Brand + rail
  ["a8456.svg", "logo.svg"],
  ["29167.svg", "slots-icon.svg"],
  // Service chip icons
  ["dd08e.svg", "icons/uiux.svg"],
  ["10076.svg", "icons/brand-a.svg"],
  ["70589.svg", "icons/brand-b.svg"],
  ["62847.svg", "icons/pitch-body.svg"],
  ["47ed0.svg", "icons/pitch-line.svg"],
  ["bb992.svg", "icons/pitch-l-top.svg"],
  ["93481.svg", "icons/pitch-l-bottom.svg"],
  ["e7c78.svg", "icons/pitch-r-top.svg"],
  ["e8b3b.svg", "icons/pitch-r-bottom.svg"],
  ["b3625.svg", "icons/web.svg"],
  ["698c9.svg", "icons/ux-audit.svg"],
  ["b16ba.svg", "icons/consultancy.svg"],
];

const outDir = path.join(process.cwd(), "public", "assets");
let ok = 0;

for (const [remote, file] of assets) {
  const dest = path.join(outDir, file);
  try {
    await access(dest);
    console.log(`• ${file} (already present)`);
    ok++;
    continue;
  } catch {}
  try {
    const res = await fetch(`${P}/${remote}`);
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
