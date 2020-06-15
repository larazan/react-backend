const { Section } = require('../models/section');


exports.getAllSection = (req,res) => {
    Section.find({}, (err,sections)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(sections);
    })
}

exports.addSection = (req,res) => {
    const section = new Section(req.body);

    section.save((err, doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success:true,
            section: doc
        })
    })
}

exports.updateSection = (req,res) => {
    Section.findOneAndUpdate(
        { _id:req.body._id },
        { name: req.body.name },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                section:doc
            })
        }
    )
}

exports.deleteSection = (req,res) => {
    Section.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Section deleted successfully. Refreshing data...'
        })
    })
}