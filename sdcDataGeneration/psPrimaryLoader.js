const { Client } = require('pg');
const client = new Client();

/*
Playing with postgres commands to create tables and schema: 


CREATE SCHEMA homeval;

CREATE TABLE homeval.sample (
  id SERIAL PRIMARY KEY, 
  zestimationPrice INT,
  thirtyDayPriceChange INT,
  oneYearForcast INT,
  comparableHomePrice INT,
  marketAppreciationPrice INT,
  url TEXT,
  sellDate TIMESTAMP WITH TIME ZONE,
  sellPrice INT,
  beds INT,
  baths INT,
  streetAddress TEXT,
  priceSqft INT,
  saleToList INT
);


insertion script 

COPY homeval.sample(id,zestimationPrice,thirtyDayPriceChange,oneYearForcast,comparableHomePrice,marketAppreciationPrice,url,sellDate,sellPrice,beds,baths,streetAddress,priceSqft,saleToList) 
FROM '/Users/pony/SEC/home-value/sdcDataGeneration/testload.csv' DELIMITER ';' CSV;
*/