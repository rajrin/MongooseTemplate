/**
 * All database settings done in this file
 */
var mongoose = require('mongoose')

// This environment property is used for getting the URI for MongoDB
var uri = process.env.MLAB_URI

// Connect
mongoose.connect(uri);

// export the mongoose & db
exports.mongoose = mongoose;
exports.db = mongoose.connection;
