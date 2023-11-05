
//Node.js script to create radar screen captures to be served to ROKU
//September 24, 2023
//==========================================================================================================

const puppeteer = require('puppeteer');

takeScreenshot()
    .then(() => {
        console.log("Screenshot taken");
    })
    .catch((err) => {
        console.log("Error occured!");
        console.dir(err);
    });

async function takeScreenshot() {
    
    //Gather the supplied arguments in an array
    var strArgs = process.argv

    console.log(strArgs[0])

    //Initiate the headless browser and puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set viewport width and height
    await page.setViewport({ width: 1280, height: 1024 });
    
    //Load the webpage in the headless browser
    //await page.goto("https://www.stevepalmieri.com/ROKU_Radar_V01.html?Lat=26.1234&Lon=-81.1234&Zoom=" + strArgs[2] + "&Colors=4&StationNumber=86368", {waitUntil: 'networkidle2'});
    await page.goto("https://www.stevepalmieri.com/ROKU_Radar_V01.html?Lat=26.1234&Lon=-81.1234&Zoom=7&Colors=4&StationNumber=86368", {waitUntil: 'networkidle2'});

    //Take the screenshot
    const buffer = await page.screenshot({
		path: './screenshot1.png'
    });

    await page.close();
    await browser.close();
}