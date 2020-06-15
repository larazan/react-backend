const { Cart } = require('../models/cart');

exports.getAllCart = (req,res) => {
    Cart.find({}, (err,baskets)=>{
        if(err) return res.status(400).send(err);
        res.status(200).send(baskets);
    })
}

exports.addCart = (req,res) => {
    const cart = new Cart(req.body);

    cart.save((err,doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true,
            cart: doc
        })
    })
}

exports.updateCart = (req,res) => {
    Cart.findOneAndUpdate(
        { _id:req.body._id },
        { name: req.body.name },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                cart:doc
            })
        }
    )
}

exports.deleteCart = (req,res) => {
    Cart.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Cart deleted successfully. Refreshing data...'
        })
    })
}