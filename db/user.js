/**
 * All database operations are in this file
 */
var model = require('../models/user')
var settings = require('../db/settings')

exports.save = function(data, callback) {
    settings.db.on('error', console.error.bind(console, 'connection error:'));
    settings.db.once('open',function(){
        //console.log('conn sucessful')
        new model.user(data).save(function(err, us){
            console.log(err)
            console.log(us)
        });
    })
}


