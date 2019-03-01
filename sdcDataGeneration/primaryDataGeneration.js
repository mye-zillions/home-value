//To generate 10m primary records, 
//while in sdcDataGeneration folder,
//run file with following command
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

writer.pipe(fs.createWriteStream('./primaryentries.csv'));

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }
  return num;
};

for (let i = 0; i < 10001; i++) {

  let zestimationPricea = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
  let thirtyDayPriceChangea = numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}));
  let oneYearForcasta = numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}));
  let comparableHomePricea = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}));
  let marketAppreciationPricea = numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}));
  

  writer.write(
    {
      zestimationPrice: zestimationPricea,
      thirtyDayPriceChange: thirtyDayPriceChangea,
      oneYearForcast: oneYearForcasta,
      comparableHomePrice: comparableHomePricea,
      marketAppreciationPrice: marketAppreciationPricea
    }
  );
}

writer.end();

for (let j = 0; j < 1000; j++) {
  writer = csvWriter({
    separator: ';',
    newline: '\n',
    headers: undefined,
    sendHeaders: false
  });

  writer.pipe(fs.createWriteStream('./primaryentries.csv', {flags: 'a'}));

  for (let i = 0; i < 10000; i++) {

    let zestimationPricea = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
    let thirtyDayPriceChangea = numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}));
    let oneYearForcasta = numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}));
    let comparableHomePricea = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}));
    let marketAppreciationPricea = numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}));

    writer.write(
      {
        zestimationPrice: zestimationPricea,
        thirtyDayPriceChange: thirtyDayPriceChangea,
        oneYearForcast: oneYearForcasta,
        comparableHomePrice: comparableHomePricea,
        marketAppreciationPrice: marketAppreciationPricea
      }
    );
    
  }

  writer.end();
}
