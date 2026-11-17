import puppeteer from 'puppeteer-core';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

async function testUI() {
  console.log('Launching browser to test Contact form UI...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/#contact', { waitUntil: 'networkidle2' });
  await new Promise((r) => setTimeout(r, 1000));

  console.log('Filling contact form...');
  await page.type('#fullName', 'Aarav Sharma');
  await page.type('#businessName', 'Delhi Ventures');
  await page.type('#email', 'aarav@example.com');
  await page.type('#phone', '9873111153');
  await page.type('#description', 'We are looking to develop a bespoke business website for our brand with custom typography and fast animations.');

  console.log('Submitting form...');
  await page.click('button[type="submit"]');

  // Wait for submission response
  await new Promise((r) => setTimeout(r, 2000));

  // Check if error banner or status alert rendered
  const alertBox = await page.$('div[role="alert"]');
  if (alertBox) {
    const alertText = await page.evaluate(el => el.textContent, alertBox);
    console.log('✓ UI Error Alert rendered properly when credentials missing:');
    console.log('   Alert content:', alertText.trim());
  }

  // Take screenshot of the form state
  await page.screenshot({ path: 'public/contact-form-tested-state.png' });
  console.log('Screenshot saved to public/contact-form-tested-state.png');

  await browser.close();
  console.log('UI Test complete.');
}

testUI();
