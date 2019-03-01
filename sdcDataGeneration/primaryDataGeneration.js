//To generate 10m primary records, 
//while in sdcDataGeneration folder,
//create empty file 'primaryentries.csv' in same folder 

//run this with following command
// to avoid heap issues:
//node --max-old-space-size=8192 primaryDataGeneration.js 

const fs = require('fs');
const faker = require('faker');
var csvWriter = require('csv-write-stream');

var writer = csvWriter({
  separator: ';',
  newline: '\n',
  headers: undefined,
  sendHeaders: false
});

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }
  return num;
};

for (let j = 0; j < 1000; j++) {
  writer = csvWriter({
    separator: ';',
    newline: '\n',
    headers: undefined,
    sendHeaders: false
  });

  writer.pipe(fs.createWriteStream('./primaryentries.csv', {flags: 'a'}));

  for (let i = 1; i <= 10000; i++) {

    let id = i + (j * 10000);
    let zestimationPricea = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
    let thirtyDayPriceChangea = numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}));
    let oneYearForcasta = numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}));
    let comparableHomePricea = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}));
    let marketAppreciationPricea = numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}));
    let url = `https://s3-us-west-1.amazonaws.com/homevalueimg/${i % 1000}.jpg`;
    let sellDate = faker.date.between( '2018-12-01', '2019-02-28');
    let sellPrice = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
    let beds = faker.random.number({'min': 2, 'max': 6});
    let baths = faker.random.number({'min': 2, 'max': 4});
    let streetAddress = faker.address.streetAddress();
    let priceSqft = numberWithCommas(faker.random.number({'min': 1200, 'max': 2500}));
    let saleToList = faker.random.number({'min': 91, 'max': 105});
    
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
        saleToList: saleToList
      }
    );
  }
  writer.end();
}
