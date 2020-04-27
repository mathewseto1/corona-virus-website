const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const cheerio = require('cheerio');
// const getUrls = require('getUrls');
// const fetch = require('node-fetch');





const cors = require('cors')({origin:true})
const puppeteer = require('puppeteer');

var object = {}

const scrapeProduct = async () =>{
    url = 'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases'
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
//something is removed here.

    // const[el] = await page.$x('//*[@id="node-10813"]/div[2]/div/div/div[3]/table/tbody');
    const[el] = await page.$x('//*[@id="node-10813"]/div[2]/div/div/div[2]/table/tbody')
    const txt = await el.getProperty('innerText');
    const sourcetable = await txt.jsonValue();
    let value = sourcetable.split("\n")
    value.forEach(element => {
        let aItem = element.trim().split("\t")
        object[""+aItem[0]] = {"Number_of_Cases":aItem[1]}
    });
    
    browser.close();


return object
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    cors (request, response, async () =>{
        const test = await scrapeProduct();
        response.send([test])
    })


    });
