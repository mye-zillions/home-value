const db = require('../database/psdb.js');
//const db = require('../database/mongodb.js');

module.exports = {
  //handle get request for related properties [20]
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
  //handle get request for single property
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

  //handle post request
  postSinglePropertyData: (obj, callback) => {
    db.postSingleProperty(obj, (err, singlePropertyData) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, singlePropertyData);
    });
  },
  //handle delete request
  deleteSinglePropertyData: (id, callback) => {
    db.deleteSingleProperty(id, (err, response) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, response);
    });
  },
  //handle put request
  updateSingleProperty: (id, obj, callback) => {
    db.updateSingleProperty(id, data, (err, response) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, response);
    } );
  }
};
