import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(root, '_site');
const production = !process.env.CONTEXT || process.env.CONTEXT === 'production';
const raw = process.env.SITE_URL || (production
  ? process.env.URL || process.env.DEPLOY_PRIME_URL
  : process.env.DEPLOY_PRIME_URL || process.env.URL);
if (!raw) throw new Error('Public URL missing. Set SITE_URL, or build using Netlify Git integration.');
const base = new URL(raw);
if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash) {
  throw new Error('Public site URL must be an HTTPS address, without credentials, query or fragment.');
}
if (!base.pathname.endsWith('/')) base.pathname += '/';
const image = new URL('share-r21.jpg', base).href;
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
let html = await readFile(path.join(root,'index.html'),'utf8');
for (const [old, replacement] of [
  ['<meta property="og:url" content="./"/>', `<meta property="og:url" content="${escape(base.href)}"/>`],
  ['<meta property="og:image" content="./share-r21.jpg"/>', `<meta property="og:image" content="${escape(image)}"/>`],
  ['<meta name="twitter:image" content="./share-r21.jpg"/>', `<meta name="twitter:image" content="${escape(image)}"/>`],
]) {
  if (!html.includes(old)) throw new Error(`Missing source metadata: ${old}`);
  html = html.replace(old,replacement);
}
await mkdir(target,{recursive:true});
await writeFile(path.join(target,'index.html'),html,'utf8');
await copyFile(path.join(root,'share-r21.jpg'),path.join(target,'share-r21.jpg'));
console.log(`Share metadata ready: ${base.href}\nImage: ${image}\nPublish directory: _site`);
