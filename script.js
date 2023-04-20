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
await page.goto("https://baidu.com");
// 检查是否存在 input
const input = await page.$("input");
// const ss = await page.screenshot({path: "/root/liuzhen/pptr/screenshot.png"});
console.log('finish');
 
await page.close();
await browser.close();
})();
