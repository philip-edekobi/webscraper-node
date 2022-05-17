const puppeteer = require('puppeteer');

const searchPage = async (selector, url) => {
    try{
        const browser = await puppeteer.launch({
            args: ['--no-sandbox']
        });

        const page = await browser.newPage();
        await page.goto(url);

        let elements = await page.$$eval(selector, (nodes) => nodes.map(node => node.textContent));

        await browser.close()
        return elements;
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    searchPage
}