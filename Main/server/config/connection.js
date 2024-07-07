const mongoose = require('mongoose');
// Cloud DB
const port = process.env.PORT || 3001

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/letshang');

module.exports = mongoose.connection;
