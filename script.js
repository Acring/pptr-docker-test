const puppeteer = require('puppeteer');

(async () => {
 
const browser = await puppeteer.launch({
    headless: true,
    args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
    ]
});
 
const page = await browser.newPage();
await page.goto("https://example.com");
const ss = await page.screenshot({path: "/root/liuzhen/pptr/screenshot.png"});
 
await page.close();
await browser.close();
})();