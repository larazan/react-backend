const { Order } = require('../models/order');

exports.getAllOrder = (req,res) => {
    Order.find({}, (err,purchases)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(purchases);
    })
}

exports.addOrder = (req,res) => {
    const order = new Order(req.body);

    order.save((err,doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true,
            order: doc
        })
    })
}

exports.updateOrder = (req,res) => {
    Order.findOneAndUpdate(
        { _id:req.body._id },
        { name: req.body.name },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                order:doc
            })
        }
    )
}

exports.deleteOrder = (req,res) => {
    Order.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Order deleted successfully. Refreshing data...'
        })
    })
}