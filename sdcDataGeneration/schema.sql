CREATE SCHEMA IF NOT EXISTS homeval;

DROP TABLE IF EXISTS homeval.homes;

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


COPY homeval.homes(id,zestimationPrice,thirtyDayPriceChange,oneYearForcast,comparableHomePrice,marketAppreciationPrice,url,sellDate,sellPrice,beds,baths,streetAddress,priceSqft,saleToList) 
FROM '/Users/pony/SEC/home-value/sdcDataGeneration/primaryentries18.csv' DELIMITER ';' CSV;