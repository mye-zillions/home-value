CREATE SCHEMA IF NOT EXISTS homes2;

DROP TABLE IF EXISTS homes2.homes;

CREATE TABLE homes2.homes (
  id SERIAL PRIMARY KEY, 
  zestimationPrice TEXT,
  thirtyDayPriceChange TEXT,
  oneYearForcast TEXT,
  comparableHomePrice TEXT,
  marketAppreciationPrice TEXT,
  url TEXT,
  sellDate TEXT,
  sellPrice TEXT,
  beds INT,
  baths INT,
  streetAddress TEXT,
  priceSqft TEXT,
  saleToList TEXT
);

COPY homes2.homes(id,zestimationPrice,thirtyDayPriceChange,oneYearForcast,comparableHomePrice,marketAppreciationPrice,url,sellDate,sellPrice,beds,baths,streetAddress,priceSqft,saleToList) 
FROM '/Users/pony/SEC/home-value/sdcDataGeneration/primaryentries19.csv' DELIMITER ';' CSV;
