const db = require('../database/psdb.js');
//const db = require('../database/mongodb.js');

module.exports = {
  fetchAllPropertyData: (callback) => {
    db.readRelatedProperties((err, propertyData) => {
      if (err) {
        callback(err);
      }

      let compHomesData = [];
      let locHomesData = [];

      for (let i = 0; i < 10; i++) {
        let row = propertyData[i];

        compHomesData.push({
          url: row.url,
          sellDate: row.selldate,
          sellPrice: row.sellprice,
          beds: row.beds,
          baths: row.baths,
          streetAddress: row.streetaddress,
          priceSqft: row.pricesqft
        });
      }
      for (let i = 10; i < 20; i++) {
        let row = propertyData[i];

        locHomesData.push({
          url: row.url,
          sellDate: row.selldate,
          sellPrice: row.sellprice,
          beds: row.beds,
          baths: row.baths,
          streetAddress: row.streetaddress,
          saleToList: row.saletolist
        });
      }
      var data = {
        comparableHomesData: compHomesData,
        localHomesData: locHomesData,
      };  
      callback(null, data); 

    });
  },
  fetchSinglePropertyData: (id, callback) => {
    db.readSingleProperty(id, (err, singlePropertyData) => {
      if (err) {
        callback(err);
        return;
      }
      
      //Format db data to conform to front end [int => string]
      let cleanObj = {
        zestimationPrice: singlePropertyData.zestimationprice,
        thirtyDayPriceChange: singlePropertyData.thirtydaypricechange,
        oneYearForcast: singlePropertyData.oneyearforcast,
        comparableHomePrice: singlePropertyData.comparablehomeprice,
        marketAppreciationPrice: singlePropertyData.marketappreciationprice
      };
     
      var singleProperty = {
        
        singlePropertyData: [cleanObj]
      };
      callback(null, singleProperty);
    });
  },

  //
  postSinglePropertyData: (obj, callback) => {
    db.postSingleProperty(obj, (err, singlePropertyData) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, singlePropertyData);
    });
  },

  deleteSinglePropertyData: (id, callback) => {
    db.deleteSingleProperty(id, (err, response) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, response);
    });
  },
  updateSingleProperty: (id, data, callback) => {
    db.updateSingleProperty(id, data, (err, response) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, response);
    } );
  }
};
