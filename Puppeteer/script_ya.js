const puppeteer = require('puppeteer');

async function resultsOfSearch(){
 const browser = await puppeteer.launch({headless: false, slowMo: 100});
 const page = await browser.newPage();
 const url = 'https://ya.ru';
 await page.goto(url);

 const input = await page.$('#text');
 await input.type('Автоматизация тестирования');

 const buttonSearch = await page.$('.search3__button');
 await buttonSearch.click();

 await page.waitForNavigation();

 const result = await page.$('.serp-item');

 if(result == null) {
 console.log('Результаты поиска не найдены'); 
} else {
console.log('Результаты поиска отобразились');
}

await browser.close();
}

resultsOfSearch();
