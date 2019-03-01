const fs = require('fs');
const faker = require('faker');
var csvWriter = require('csv-write-stream');

var writer = csvWriter({
  separator: ';',
  newline: '\n',
  headers: undefined,
  sendHeaders: false
});

//1 ---------
writer.pipe(fs.createWriteStream('./sdcDataGeneration/primaryentries.csv'));
// Preping dummyData
//goal: 10m primary records to file
var propertyData = [];

var numberWithCommas = (num) => {
  num = num.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(num)) {
    num = num.replace(pattern, '$1,$2');
  }
  return num;
};

// Can create up to 2,000,000 items without running out of heap 
for (let i = 1; i <= 1000000; i++) {

  let zestimationPricea = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
  let thirtyDayPriceChangea = numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}));
  let oneYearForcasta = numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}));
  let comparableHomePricea = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}));
  let marketAppreciationPricea = numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}));

  writer.write(
    {
      id: i,
      zestimationPrice: zestimationPricea,
      thirtyDayPriceChange: thirtyDayPriceChangea,
      oneYearForcast: oneYearForcasta,
      comparableHomePrice: comparableHomePricea,
      marketAppreciationPrice: marketAppreciationPricea
    }
  );
  
}

writer.end();

//2---------

for (let j = 2; j <= 10; j++) {
  
  let startMil = j * 1000000;
  let endMil = (j + 1) * 1000000;

  writer = csvWriter({
    separator: ';',
    newline: '\n',
    headers: undefined,
    sendHeaders: false
  });
  writer.pipe(fs.createWriteStream('./sdcDataGeneration/primaryentries.csv', {flags: 'a'}));


  for (let i = startMil; i <= endMil; i++) {

    let zestimationPricea = numberWithCommas(faker.random.number({'min': 500000, 'max': 5000000}));
    let thirtyDayPriceChangea = numberWithCommas(faker.random.number({'min': 15000, 'max': 50000}));
    let oneYearForcasta = numberWithCommas(faker.random.number({'min': 500000, 'max': (500000 + 100000)}));
    let comparableHomePricea = numberWithCommas(faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}));
    let marketAppreciationPricea = numberWithCommas(faker.random.number({'min': (500000 - 200000), 'max': (500000)}));

    writer.write(
      {
        id: i,
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
//----3
