const { Pool, Client } = require('pg');
const credentials = require('../credentials');


const pool = new Pool({
  user: credentials.username,
  host: credentials.host,
  database: credentials.database,
  password: credentials.password,
  port: credentials.port
}
);
// const client = new Client({
//   user: credentials.username,
//   host: credentials.host,
//   database: credentials.database,
//   password: credentials.password,
//   port: credentials.port
// });

let currentid = 1;

pool.connect()
//client.connect()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', err.stack));

module.exports = {
  postSingleProperty: (obj, cb) => {

    const text = 'INSERT INTO homes2.homes (zestimationprice,thirtydaypricechange,oneyearforcast,comparablehomeprice,marketappreciationprice,url,selldate,sellprice,beds,baths,streetaddress,pricesqft,saletolist) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)';
    const values = [obj.zestimationPrice, obj.thirtyDayPriceChange, obj.oneYearForcast, obj.comparableHomePrice, obj.marketAppreciationPrice, obj.url, obj.sellDate, obj.sellPrice, obj.beds, obj.baths, obj.streetAddress, obj.priceSqft, obj.saleToList];
    // pool.query(text, values, (err, res) => {
    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        cb(null, res);
      }
    });
  },
  readSingleProperty: (id, cb) => {
    const text = 'SELECT zestimationPrice, thirtyDayPriceChange, oneYearForcast, comparableHomePrice, marketAppreciationPrice FROM homes2.homes WHERE id = $1;';
    const values = [id];

    currentid = id;
    pool.query(text, values, (err, res) => {
    //client.query(text, values, (err, res) => {
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

    pool.query(text, values, (err, res) => {
    //client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        cb(null, res.rows);
      }
    }); 
  },

  deleteSingleProperty: (id, cb) => {
    let text = 'DELETE FROM homes2.homes where id = $1';
    let values = [id];
    pool.query(text, values, (err, res) => {
      // client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        cb (null, res);
      }
    });
  },
  updateSingleProperty: (id, data, cb) => {
    let text = 'UPDATE FROM homes2.homes where id = $1';
    let values = [id];
    pool.query(text, values, (err, res) => {
    //client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        cb (null, res);
      }
    });
  }


};
