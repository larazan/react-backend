
const { Brand } = require('../models/brand');

exports.getAllBrand = (req,res)=>{
    Brand.find({}, (err, brands)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(brands);
    })
};

exports.addBrand = (req,res)=>{
    const brand = new Brand(req.body);

    brand.save((err,doc)=>{
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            brand: doc
        })
    })
};

exports.updateBrand = (req, res) => {
    Brand.findOneAndUpdate(
        { _id:req.body._id },
        { name: req.body.name },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                brand:doc
            })
        }
    )  
};

exports.deleteBrand = (req, res) => {
    Brand.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Brand deleted successfully. Refreshing data...'
        })
    })
};