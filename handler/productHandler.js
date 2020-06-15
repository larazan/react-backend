const { Product } = require('../models/product');

exports.getAllProduct = (req,res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";

    Product.
    find().
    populate('brand').
    populate('gender').
    populate('section').
    populate('category').
    sort([[sortBy,order]]).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        res.send(articles)
    })
}

exports.getProduct = (req,res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product.
    find().
    populate('brand').
    populate('gender').
    populate('section').
    populate('category').
    sort([[sortBy,order]]).
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        res.send(articles)
    })
}

exports.searchProduct = (req,res) => {
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100; 
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    for(let key in req.body.filters){
        if(req.body.filters[key].length >0 ){
            if(key === 'price'){
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                }
            }else{
                findArgs[key] = req.body.filters[key]
            }
        }
    }

    findArgs['publish'] = true;

    Product.
    find(findArgs).
    populate('brand').
    populate('gender').
    populate('section').
    populate('category').
    sort([[sortBy,order]]).
    skip(skip).
    limit(limit).
    exec((err,articles)=>{
        if(err) return res.status(400).send(err);
        res.status(200).json({
            size: articles.length,
            articles
        })
    })
}

exports.addProduct = (req,res) => {
    const product = new Product(req.body);

    product.save((err,doc)=>{
        if(err) return res.json({success:false, err});
        res.status(200).json({
            success: true,
            article: doc
        })
    })
}

exports.updateProduct = (req,res) => {
    const product = new Product(req.body);

    Product.findOne({ _id: req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        Product.update({ _id: req.body._id }, {$set: product}, (err, doc)=>{
            if(err) return res.json({success:false, err});
            return res.status(200).send({
                success: true,
                message: 'Product updated successfully. Refreshing data...'
            })
        })
    })
}

exports.productById = (req,res) => {
    let type = req.query.type;
    let items = req.query.id;

    if(type === "array"){
        let ids = req.query.id.split(',');
        items = [];
        items = ids.map(item=>{
            return mongoose.Types.ObjectId(item)
        })
    }

    Product.
    find({ '_id':{$in:items}}).
    populate('brand').
    populate('gender').
    populate('section').
    populate('category').
    exec((err,docs)=>{
        return res.status(200).send(docs)
    })
}

exports.deleteProduct = (req,res) => {
    Product.deleteOne({ _id:req.body._id }, (err,doc)=>{
        if(err) return res.json({success:false, err});
        return res.status(200).send({
            success: true,
            message: 'Product deleted successfully. Refreshing data...'
        })
    }) 
}

exports.softDelete = (req,res) => {
    Product.findOneAndUpdate(
        { _id:req.body._id },
        { deleted:true },
        (err,doc)=>{
            if(err) return res.json({success:false,err});
            return res.status(200).send({
                success: true,
                article:doc
            })
        }
    )
}