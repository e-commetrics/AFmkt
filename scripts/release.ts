/**
 * Builds the site and saves an upload-ready archive of /out.
 *
 *   bun run release   →   release/afmarketing-site.zip
 *
 * The archive holds the contents of /out (not the folder itself), including
 * the hidden .htaccess file. Requires the `zip` command (macOS/Linux).
 */
import { spawnSync } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const zipFile = path.join(ROOT, "release/afmarketing-site.zip");

const run = (cmd: string[], cwd = ROOT) => {
  const r = spawnSync(cmd[0], cmd.slice(1), { cwd, stdio: "inherit" });
  if (r.status !== 0) throw new Error(`${cmd.join(" ")} failed`);
};

run(["bun", "run", "build"]);
await mkdir(path.dirname(zipFile), { recursive: true });
await rm(zipFile, { force: true });
run(["zip", "-rq", "-X", zipFile, "."], path.join(ROOT, "out"));
console.log(`✓ ${path.relative(ROOT, zipFile)}`);
