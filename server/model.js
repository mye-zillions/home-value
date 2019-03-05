const db = require('../database/psdb.js');
//const db = require('../database/mongodb.js');
module.exports = {
  fetchAllPropertyData: (callback) => {
    db.readAllProperties((err, propertyData) => {
      if (err) {
        callback(err);
      }
      db.readAllComparableHomes((err, comparableHomesData) => {
        if (err) {
          callback(err);
          return;
        }
        db.readAllLocalHomes((err, localHomesData) => {
          if (err) {
            callback(err);
            return; 
          }
          var data = {
            propertyData: propertyData, 
            comparableHomesData: comparableHomesData,
            localHomesData: localHomesData,
          };  
          console.log('weve fetched all of the data');
          callback(null, data); 
        });
      });
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
        zestimationPrice: singlePropertyData.zestimationprice.toLocaleString(),
        thirtyDayPriceChange: singlePropertyData.thirtydaypricechange.toLocaleString(),
        oneYearForcast: singlePropertyData.oneyearforcast.toLocaleString(),
        comparableHomePrice: singlePropertyData.comparablehomeprice.toLocaleString(),
        marketAppreciationPrice: singlePropertyData.marketappreciationprice.toLocaleString()
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
// module.exports = {
//   fetchAllPropertyData: (callback) => {
//     db.readAllProperties((err, propertyData) => {
//       if (err) {
//         callback(err);
//       }
//       db.readAllComparableHomes((err, comparableHomesData) => {
//         if (err) {
//           callback(err);
//           return;
//         }
//         db.readAllLocalHomes((err, localHomesData) => {
//           if (err) {
//             callback(err);
//             return; 
//           }
//           var data = {
//             propertyData: propertyData, 
//             comparableHomesData: comparableHomesData,
//             localHomesData: localHomesData,
//           };  
//           console.log('weve fetched all of the data');
//           callback(null, data); 
//         });
//       });
//     });
//   },
//   fetchSinglePropertyData: (id, callback) => {
//     db.readSingleProperty(id, (err, singlePropertyData) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       // Grab the results of the query and clean
//       var singleProperty = {
//         singlePropertyData: singlePropertyData
//       };
//       callback(null, singleProperty);
//     });
//   },
//   postSinglePropertyData: (obj, callback) => {
//     db.postSingleProperty(obj, (err, singlePropertyData) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null, singlePropertyData);
//     });
//   },

//   deleteSinglePropertyData: (id, callback) => {
//     db.deleteSingleProperty(id, (err, response) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null, response);
//     });
//   },
//   updateSingleProperty: (id, data, callback) => {
//     db.updateSingleProperty(id, data, (err, response) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null, response);
//     } );
//   }
// };