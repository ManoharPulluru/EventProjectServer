const mongoose = require('mongoose');

const vendorCreateModel = mongoose.Schema(
    {
      eventName: String,
      placeOfEvent: String,
      proposalType: String,
      eventType: String,
      budget: String,
      from: String,
      to: String,
      description: String,
      images: String,
      foodPreferences: String,
      events: String
    }
);

module.exports = mongoose.model('vendorCreateEvents', vendorCreateModel);
