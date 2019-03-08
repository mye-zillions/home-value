const { Client } = require('pg');
const credentials = require('../credentials');

const client = new Client({
  user: credentials.username,
  host: credentials.host,
  database: credentials.database,
  password: credentials.password,
  port: credentials.port
});

let currentid = 1;

client.connect()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', err.stack));

module.exports = {
  readSingleProperty: (id, cb) => {
    const text = 'SELECT zestimationPrice, thirtyDayPriceChange, oneYearForcast, comparableHomePrice, marketAppreciationPrice FROM homes2.homes WHERE id = $1;';
    const values = [id];

    currentid = id;

    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        cb(null, res.rows[0]);
      }
    }); 
  },
  readRelatedProperties: (cb) => {
    let text = 'SELECT id, url, sellDate, sellPrice, beds, baths, streetAddress, priceSqft, saleToList FROM homes2.homes where id BETWEEN $1 AND $2;';
    let values = [Number(currentid), Number(currentid) + 19];
    if (currentid > 9800000) {
      values = [Number(currentid) - 19, Number(currentid)];
    }


    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        cb(null, res.rows);
      }
    }); 
  }
};
