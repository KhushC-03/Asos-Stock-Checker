#! /usr/bin/env node

const readline = require("readline")
const { link } = require("fs")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("ASOS Link: ? ", function(link1) {
var alink = link1
    ;(async () => {
        const puppeteer = require('puppeteer')
        const browser = await puppeteer.launch({headless : false})
        const [page] = await browser.pages()
        await page.setViewport({width: 1, height: 1})
        await page.goto(alink)
        const result = await page.evaluate(() => {
            let headingfromweb = document.querySelectorAll(".colour-size-select")
            const headinglist = [...headingfromweb]
            return headinglist.map(h => h.innerText)[1]
        })
        console.log(result)
        await browser.close()
    })()
})

