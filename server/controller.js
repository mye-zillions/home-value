const model = require('./model.js');

module.exports = {
  handleAllPropertyData: (req, res) => {
    model.fetchAllPropertyData((err, data) => {
      if (err) {
        console.log('error GET request from the controller');
        return;
      }
      res.send(data);
    });
  },
  handleSinglePropertyData: (req, res) => {
    var propertyId = req.params.propertyId;
    model.fetchSinglePropertyData(propertyId, (err, data) => {
      if (err) {
        console.log('error fetching propertyData');
      }
      res.send(data);
    });
  },
  postSinglePropertyData: (req, res) => {
    model.postSinglePropertyData(req.body, (err, data) => {
      if (err) {
        console.log('error posting new propertyData');
      }
      res.status(201).end();
    });
  },
  deleteSinglePropertyData: (req, res) => {
    var propertyId = req.params.propertyId;
    model.deleteSinglePropertyData(propertyId, (err, data) => {
      if (err) {
        console.log('error deleting property data');
      }
      res.status(200).end();
    });
  },
  updateSingleProperty: (req, res) => {
    var propertyId = req.params.propertyId;
    model.updateSingleProperty(propertyId, req.body, (err, data) => {
      if (err) {
        console.log('error updating property data');
      }
      res.status(200).end();
    });
  }
};
