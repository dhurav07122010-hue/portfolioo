import puppeteer from 'puppeteer-core';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testSuccessUI() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/#contact', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 1000));

  await page.type('#fullName', 'Kavita Iyer');
  await page.type('#businessName', 'Iyer Artisanal Decor');
  await page.type('#email', 'kavita@example.com');
  await page.type('#phone', '9873111153');
  await page.type('#description', 'Requesting a quote for a luxury Shopify storefront and digital brand identity.');

  await page.click('button[type="submit"]');

  await new Promise((r) => setTimeout(r, 3000));

  await page.screenshot({ path: 'public/contact-success-live-state.png' });
  console.log('Success state screenshot captured!');
  await browser.close();
}

testSuccessUI();
