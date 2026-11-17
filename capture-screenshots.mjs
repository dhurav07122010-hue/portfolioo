import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = path.resolve('public/work');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const SITES = [
  {
    name: 'Saffron & Smoke',
    url: 'https://saffron-smoke-mocha.vercel.app',
    outputFile: path.join(outputDir, 'saffron-smoke-homepage.png'),
  },
  {
    name: 'Virgo Visor',
    url: 'https://www.virgovisor.com',
    outputFile: path.join(outputDir, 'virgo-visor-homepage.png'),
  },
  {
    name: 'Paradise Public School',
    url: 'https://paradisepublicschool.com',
    outputFile: path.join(outputDir, 'paradise-public-school-homepage.png'),
  },
];

async function capture() {
  console.log('Launching installed Microsoft Edge browser...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security', '--disable-features=IsolateOrigins,site-per-process'],
  });

  for (const site of SITES) {
    console.log(`\nNavigating to ${site.name}: ${site.url}`);
    const page = await browser.newPage();
    // Desktop viewport 1440x900 as requested
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

    try {
      await page.goto(site.url, {
        waitUntil: 'networkidle2',
        timeout: 60000,
      });

      // Allow 4 seconds for web fonts, entrance animations, and full hero imagery to settle
      await new Promise((r) => setTimeout(r, 4000));

      // Capture first viewport 1440x900
      await page.screenshot({
        path: site.outputFile,
        clip: { x: 0, y: 0, width: 1440, height: 900 },
      });

      const stats = fs.statSync(site.outputFile);
      console.log(`✓ Successfully captured: ${site.outputFile} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error capturing ${site.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\nAll 3 real screenshots captured.');
}

capture();
