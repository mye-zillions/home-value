const { Client } = require('pg');
const credentials.js;

const client = new Client({
  user: 'postgres',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
/*
Playing with postgres commands to create tables and schema: 


CREATE SCHEMA homeval;

CREATE TABLE homeval.homes (
  id SERIAL PRIMARY KEY, 
  zestimationPrice INT,
  thirtyDayPriceChange INT,
  oneYearForcast INT,
  comparableHomePrice INT,
  marketAppreciationPrice INT,
  url TEXT,
  sellDate DATE,
  sellPrice INT,
  beds INT,
  baths INT,
  streetAddress TEXT,
  priceSqft INT,
  saleToList INT
);


insertion script 

COPY homeval.homes(id,zestimationPrice,thirtyDayPriceChange,oneYearForcast,comparableHomePrice,marketAppreciationPrice,url,sellDate,sellPrice,beds,baths,streetAddress,priceSqft,saleToList) 
FROM '/Users/pony/SEC/home-value/sdcDataGeneration/primaryentries18.csv' DELIMITER ';' CSV;

insert single property: 
INSERT INTO homeval.homes(zestimationPrice,thirtyDayPriceChange,oneYearForcast,comparableHomePrice,marketAppreciationPrice,url,sellDate,sellPrice,beds,baths,streetAddress,priceSqft,saleToList) VALUES (12345678, 123456, 123456, 123456, 123456, 'testing 123', '3/2/2019', 123345, 1, 2, '123 test street', 1234, 12345);

*/