const { Admin } = require('../models/admin');

exports.authAd = (req,res) => {
    res.status(200).json({
        isAdmin: req.admin.role === 0 ? false : true,
        isAuth: true,
        email: req.admin.email,
        name: req.admin.name,
        lastname: req.admin.lastname,
        role: req.admin.role,
        history: req.admin.history
    })
}

exports.registerAdmin = (req,res) => {
    const admin = new Admin(req.body);

    admin.save((err,doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true
        })
    })
}

exports.loginAdmin = (req,res) => {
    Admin.findOne({'email':req.body.email},(err,admin)=>{
        if(!admin) return res.json({loginDashboardSuccess:false, message:'Auth failed, email not found'});

        admin.compareAdminPassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({loginDashboardSuccess:false,message:'Wrong password'});

            admin.generateAdminToken((err,admin)=>{
                if(err) return res.status(400).send(err);
                res.cookie('w_auth_admin',admin.token).status(200).json({
                    loginDashboardSuccess: true
                })
            })
        })
    })
}

exports.getAllAdmin = (req,res) => {
    Admin.find({}, (err, admins)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(admins);
    })
}

exports.deleteAdmin = (req,res) => {
    Admin.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'User admin deleted successfully. Refreshing data...'
        })
    })
}

exports.logoutAdmin = (req,res) => {
    Admin.findOneAndUpdate(
        { _id:req.admin._id },
        { token: '' },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true
            })
        }
    )
}