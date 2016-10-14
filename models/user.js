/**
 * http://mongoosejs.com/docs/guide.html
 */
var settings = require('../db/settings')


// Validation for password
var checkPassword = function(pass){
    return true;
}

// Schema for user
var userSchema = settings.mongoose.Schema(
    {
        name: {type:String, required:true},
        age: {type:String, min:10, max:120},
        gender: {type:String, enum:['M','F','T']},
        password: {
            type:String, 
            validate: {
                validator: checkPassword,
                message: '{VALUE} not good' 
            }
        }
    }
);

exports.user = settings.mongoose.model('user', userSchema)
