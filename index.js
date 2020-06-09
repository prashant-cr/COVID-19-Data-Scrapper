
const request = require('request');
const cheerio = require('cheerio');
const siteUrl = "https://www.worldometers.info/coronavirus/";
const fs = require('fs');
const writeStream = fs.createWriteStream('data.csv');

// Write Headers
writeStream.write(`Id|Country|Total Cases|New Cases|Total Deaths|New Deaths \n`);

request(siteUrl, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const tableItem = $('#main_table_countries_today tbody tr')

    tableItem.each((i, el) => {
      if (i>=8 && i<=221){
      const Id = $(el).find('td').eq(0).text()
      const Country = $(el).find('td').eq(1).text()
      const TotaCases = $(el).find('td').eq(2).text()
      const NewCases = $(el).find('td').eq(3).text()
      const NewDeaths = $(el).find('td').eq(4).text()

      writeStream.write(`${Id}| ${Country}| ${TotaCases}| ${NewCases}| ${NewDeaths} \n`);
      }
    })
    console.log('Scraping Done...');
  }
});