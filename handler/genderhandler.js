const { Gender } = require('../models/gender');

exports.getAllGender = (req,res) => {
    Gender.find({}, (err,genders)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(genders)
    })
}

exports.addGender = (req,res) => {
    const gender = new Gender(req.body);

    gender.save((err,doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true,
            gender: doc
        })
    })
}

exports.updateGender = (req,res) => {
    Gender.findOneAndUpdate(
        { _id:req.body._id },
        { name: req.body.name },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                gender:doc
            })
        }
    )
}

exports.deleteGender = (req,res) => {
    Gender.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Gender deleted successfully. Refreshing data...'
        })
    })
}