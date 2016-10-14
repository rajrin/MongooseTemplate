

process.env.MLAB_URI = /**provide url**/

var user = require('./db/user')

var dat = {name:'acloudfan', age:12, gender:'F', password:'tt'}
user.save(dat, function(){})
