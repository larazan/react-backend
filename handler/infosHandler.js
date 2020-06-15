const { Infos } = require('../models/infos');


exports.getAllInfos = (req,res) => {
    Infos.find({}, (err,infos)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(infos);
    })
}

exports.addInfos = (req,res) => {
    const infos = new Infos(req.body);

    infos.save((err, doc) => {
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true,
            infos: doc
        })
    })
}

exports.updateInfos = (req,res) => {
    const infos = new Infos(req.body);

    Infos.findOneAndUpdate(
        { _id:req.body._id },
        req.body,
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                infos:doc
            })
        }
    )
}

exports.deleteInfos = (req,res) => {
    Infos.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Infos deleted successfully. Refreshing data...'
        })
    })  
}

exports.softDeleteInfos = (req,res) => {
    Infos.findOneAndUpdate(
        { _id:req.body._id },
        { deleted:true },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                infos:doc
            })
        }
    )
}