const { Client } = require('pg');
const credentials = require('../credentials');

const client = new Client({
  user: credentials.username,
  host: credentials.host,
  database: credentials.database,
  password: credentials.password,
  port: credentials.port
});

client.connect()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', err.stack));

module.exports = {
  readSingleProperty: (id, cb) => {
    const text = 'SELECT zestimationPrice, thirtyDayPriceChange, oneYearForcast, comparableHomePrice, marketAppreciationPrice FROM homeval.homes WHERE id = $1;';
    const values = [id];


    client.query(text, values, (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(res.rows[0]);
        cb(null, res.rows[0]);
      }
    }); 
  }
};

