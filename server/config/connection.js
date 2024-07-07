const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
const client = new MongoClient(mongoURI)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/letshang');

export function geDB(dbName = process.env.DB_NAME){
    return Client.db(dbName)
}

module.exports = mongoose.connection;
