const puppeteer = require('puppeteer')
const path = require('path')
const uuid = require('uuid')
const uniqueId = uuid.v4()

async function main(pathURL ,id) {
    const browser = await puppeteer.launch({
        //headless: false
    })
    
    const page = await browser.newPage()

    await page.goto(pathURL, {
        waitUntil: 'networkidle2'
    })
    await page.pdf({
        path: `${path.join(__dirname)}/${id}.pdf`,
        printBackground: true,
        format: 'A4',
        landscape: true,
    })

    await browser.close()
}

main('https://www.google.com', uniqueId)