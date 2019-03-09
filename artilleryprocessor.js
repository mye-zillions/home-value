const faker = require('faker');
const moment = require('moment');
module.exports = {
  randomId1,
  randomId2,
  randomId3,
  randomPost
};

function randomId1(userContext, events, done) {
  const id = faker.random.number({'min': 1, 'max': 10000000});
  userContext.vars.id1 = id;

  return done();
}
function randomId2(userContext, events, done) {
  const id = faker.random.number({'min': 6000000, 'max': 10000000});
  userContext.vars.id2 = id;

  return done();
}
function randomId3(userContext, events, done) {
  const id = faker.random.number({'min': 9000000, 'max': 10000000});
  userContext.vars.id3 = id;

  return done();
}

function randomPost(userContext, events, done) {

  let zestimationPrice = (Math.floor(Math.random() * 4500000) + 500000).toLocaleString();
  let thirtyDayPriceChange = faker.random.number({'min': 15000, 'max': 50000}).toLocaleString();
  let oneYearForcast = faker.random.number({'min': 500000, 'max': (500000 + 100000)}).toLocaleString();
  let comparableHomePrice = faker.random.number({'min': (500000 - 100000), 'max': (500000 + 100000)}).toLocaleString();
  let marketAppreciationPrice = faker.random.number({'min': (500000 - 200000), 'max': (500000)}).toLocaleString();
  let url = `https://s3-us-west-1.amazonaws.com/homevalueimg/${faker.random.number({'min': 1, 'max': 1000}).toString().padStart(5, '0')}.jpg`;
  let sellDate = moment(faker.date.between( '2018-12-01', '2019-02-28')).format('M/D/YYYY').toString();
  let sellPrice = (Math.floor(Math.random() * 4500000) + 500000).toLocaleString();
  let beds = Math.floor(Math.random() * 3) + 2;
  let baths = Math.floor(Math.random() * 3) + 1;
    
  let streetAddress = faker.address.streetAddress();
  let priceSqft = (Math.floor(Math.random() * 1300) + 1200).toLocaleString();
  let saleToList = (Math.floor(Math.random() * 14) + 91).toLocaleString();


  userContext.vars.zestimationPrice = zestimationPrice;
  userContext.vars.thirtyDayPriceChange = thirtyDayPriceChange;
  userContext.vars.oneYearForcast = oneYearForcast;
  userContext.vars.comparableHomePrice = comparableHomePrice;
  userContext.vars.marketAppreciationPrice = marketAppreciationPrice;
  userContext.vars.url = url;
  userContext.vars.sellDate = sellDate;
  userContext.vars.sellPrice = sellPrice;
  userContext.vars.beds = beds;
  userContext.vars.baths = baths;
  userContext.vars.streetAddress = streetAddress;
  userContext.vars.priceSqft = priceSqft;
  userContext.vars.saleToList = saleToList;

  return done();
}