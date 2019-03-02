//MUST USE NODE V 8.15.0 + 

//To generate 10m primary records, 
//while in sdcDataGeneration folder,
//create target empty csv file relative to current directory

//run this with following command
// to avoid heap issues:
//node --max-old-space-size=8192 primaryDataGeneration.js 

//to check file length afterwards use the following command in terminal:
//wc -l <filename>

const fs = require('fs');
const faker = require('faker');
var csvWriter = require('csv-write-stream');
var moment = require('moment');

var writer = csvWriter({
  separator: ';',
  newline: '\n',
  headers: undefined,
  sendHeaders: false
});

writer.end();

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }
  return num;
};

for (let j = 0; j < 10000; j++) {
  writer = csvWriter({
    separator: ';',
    newline: '\n',
    headers: undefined,
    sendHeaders: false
  });

  //place target filename in fs.createWriteStream. If file does not exist, it will create one 
  writer.pipe(fs.createWriteStream('./sdcDataGeneration/primaryentries18.csv', {flags: 'a'}));

  for (let i = 1; i <= 1000; i++) {

    let id = i + (j * 1000);
    let photoid = i % 1000 + 1;
    let zestimationPricea = Math.floor(Math.random() * 4500000) + 500000;
    let thirtyDayPriceChangea = faker.random.number({'min': 15000, 'max': 50000});
    let oneYearForcasta = faker.random.number({'min': 500000, 'max': (500000 + 100000)});
    let comparableHomePricea = faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)});
    let marketAppreciationPricea = faker.random.number({'min': (500000 - 200000), 'max': (500000)});
    let url = `https://s3-us-west-1.amazonaws.com/homevalueimg/${photoid.toString().padStart(5, '0')}.jpg`;
    let sellDate = moment(faker.date.between( '2018-12-01', '2019-02-28')).format('M/D/YYYY');
    let sellPrice = Math.floor(Math.random() * 4500000) + 500000;
    let beds = Math.floor(Math.random() * 3) + 2;
    let baths = Math.floor(Math.random() * 3) + 1;
    let streetAddress = faker.address.streetAddress();
    let priceSqft = Math.floor(Math.random() * 1300) + 1200;
    let saleToList = Math.floor(Math.random() * 14) + 91;

    writer.write(
      {
        id: id,
        zestimationPrice: zestimationPricea,
        thirtyDayPriceChange: thirtyDayPriceChangea,
        oneYearForcast: oneYearForcasta,
        comparableHomePrice: comparableHomePricea,
        marketAppreciationPrice: marketAppreciationPricea,
        url: url,
        sellDate: sellDate,
        sellPrice: sellPrice,
        beds: beds,
        baths: baths,
        streetAddress: streetAddress,
        priceSqft: priceSqft,
        saleToList: saleToList,
      }
    );
  }
  writer.end();
}
