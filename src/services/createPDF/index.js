const puppeteer = require('puppeteer');
const path = require('path');

async function main({ link_url, pdf_name }) {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(link_url, {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: `${path.join(
      __dirname,
      '..',
      '..',
      '..',
      'uploads',
      'pdf'
    )}/${pdf_name}.pdf`,
    printBackground: true,
    format: 'A4',
    landscape: true,
  });

  await browser.close();
}

module.exports = main;
