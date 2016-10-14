

process.env.MLAB_URI = 'mongodb://*:*@ds035766.mlab.com:35766/acmetravel';

var user = require('./db/user')

var dat = {name:'acloudfan', age:12, gender:'F', password:'tt'}
user.save(dat, function(){})
