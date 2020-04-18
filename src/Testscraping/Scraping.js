const puppeteer = require('puppeteer');

// //let object = {}
// // var object = new Object();
// var object = {}

// async function scrapeProduct(url){
async function scrapeProduct (){
    url = 'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases'
    let object = {}
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
//something is removed here.

    const[el] = await page.$x('//*[@id="node-10813"]/div[2]/div/div/div[2]/table/tbody');
    const txt = await el.getProperty('innerText');
    const sourcetable = await txt.jsonValue();
    let value = sourcetable.split("\n")
    value.forEach(element => {
        let aItem = element.trim().split("\t")
        object[""+aItem[0]] = {"Number of Cases":aItem[1]}
    });
    
    browser.close();

console.log(object)
}

scrapeProduct()

// scrapeProduct('https://www.amazon.com/AmazonBasics-Classic-Computer-Desk-Shelves/dp/B07PYT7NZ9/ref=sr_1_1?dchild=1&keywords=desk&qid=1586268445&sr=8-1')
// scrapeProduct('https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases')

// //the above is a function call to scrapeProduct function.