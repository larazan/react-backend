const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_I = 10;
require('dotenv').config();

const adminSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    name:{
        type: String,
        required: true,
        maxlength: 100
    },
    history:{
        type: Array,
        default: []
    },
    role:{
        type: Number,
        default: 1
    },
    token:{
        type: String
    }
});

adminSchema.pre('save',function(next){
    var admin = this;

    if(admin.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);
    
            bcrypt.hash(admin.password,salt,function(err,hash){
                if(err) return next(err);
                admin.password = hash;
                next();
            });
        })
    } else{
        next()
    }
})

adminSchema.methods.compareAdminPassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch)
    })
}


adminSchema.methods.generateAdminToken = function(cb){
    var admin = this;
    var token = jwt.sign(admin._id.toHexString(),process.env.PRIVILEGE)

    admin.token = token;
    admin.save(function(err,admin){
        if(err) return cb(err);
        cb(null,admin);
    })
}

adminSchema.statics.findAdminByToken = function(token,cb){
    var admin = this;

    jwt.verify(token,process.env.PRIVILEGE,function(err,decode){
        admin.findOne({"_id":decode,"token":token},function(err,admin){
            if(err) return cb(err);
            cb(null,admin);
        })
    })
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = { Admin };