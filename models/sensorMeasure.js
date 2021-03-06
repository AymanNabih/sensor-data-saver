var mongoose = require('mongoose');
var config = require('../config');
var Schema = mongoose.Schema;

module.exports = mongoose.model('SensorMeasure', new Schema({
  sensor: {type: String, index: true},
  parameters: [
    {
      type: { type: String },
      value: String
    }
  ],
  timestamp: {type: Date, default: Date.now}
}, {
  capped: config.maxMeasuresDbStorage
}));