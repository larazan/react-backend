const { Category } = require('../models/category');

exports.getAllCategory = (req,res) => {
    Category.find({}, (err,categories)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(categories);
    })
}

exports.addCategory = (req,res) => {
    const category = new Category(req.body);

    category.save((err,doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true,
            category: doc
        })
    })
}

exports.updateCategory = (req,res) => {
    Category.findOneAndUpdate(
        { _id:req.body._id },
        { name: req.body.name },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                category:doc
            })
        }
    )
}

exports.deleteCategory = (req,res) => {
    Category.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Category deleted successfully. Refreshing data...'
        })
    })
}