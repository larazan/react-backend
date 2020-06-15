const { Admin } = require('./../models/admin');

let authAdmin = (req,res,next) => {
    let token = req.cookies.w_auth_admin;

    Admin.findAdminByToken(token,(err,admin)=>{
        if(err) throw err;
        if(!admin) return res.json({
            isAuth: false,
            error: true
        });

        req.token = token;
        req.admin = admin;
        next();
    })
}

module.exports = { authAdmin }