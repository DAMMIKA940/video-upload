const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = new Schema ({
  name: String,
  videoPath: String
})
module.exports = mongoose.model('Upload', uploadSchema,'uploads');


