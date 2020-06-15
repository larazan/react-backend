const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

// const users = require('./routes/api/users');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 3002;

// Routes
const adminRoutes = require('./routes/api/admins');
const userRoutes = require('./routes/api/users');
const brandRoutes = require('./routes/api/brands');
const categoryRoutes = require('./routes/api/categories');
const genderRoutes = require('./routes/api/genders');
const sectionRoutes = require('./routes/api/sections');
const productRoutes = require('./routes/api/products');
const infosRoutes = require('./routes/api/infos');
const cartRoutes = require('./routes/api/carts');
const orderRoutes = require('./routes/api/orders');

app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', brandRoutes);
app.use('/api', productRoutes);
app.use('/api', genderRoutes);
app.use('/api', sectionRoutes);
app.use('/api', categoryRoutes);
app.use('/api', infosRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);

//=================================
//              Admin
//=================================

// app.get('/api/admin/auth', authAdmin, (req,res)=>{
//     res.status(200).json({
//         isAdmin: req.admin.role === 0 ? false : true,
//         isAuth: true,
//         email: req.admin.email,
//         name: req.admin.name,
//         lastname: req.admin.lastname,
//         role: req.admin.role,
//         history: req.admin.history
//     })
// })

// app.post('/api/admin/register', (req,res) => {
//     const admin = new Admin(req.body);

//     admin.save((err,doc)=>{
//         if(err) return res.json({success:false, err});
//         res.status(200).json({
//             success: true
//         })
//     })
// });

// app.post('/api/admin/login', (req,res) => {
//     Admin.findOne({'email':req.body.email},(err,admin)=>{
//         if(!admin) return res.json({loginDashboardSuccess:false, message:'Auth failed, email not found'});

//         admin.compareAdminPassword(req.body.password,(err,isMatch)=>{
//             if(!isMatch) return res.json({loginDashboardSuccess:false,message:'Wrong password'});

//             admin.generateAdminToken((err,admin)=>{
//                 if(err) return res.status(400).send(err);
//                 res.cookie('w_auth_admin',admin.token).status(200).json({
//                     loginDashboardSuccess: true
//                 })
//             })
//         })
//     })
// })

// app.get('/api/admin/user-admin', (req,res) => {
//     Admin.find({}, (err, admins)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(admins);
//     })
// })

// app.get('/api/admin/logout', authAdmin, (req,res)=>{
//     Admin.findOneAndUpdate(
//         { _id:req.admin._id },
//         { token: '' },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true
//             })
//         }
//     )
// })

// app.post('/api/admin/delete', auth, (req, res) => {
//     Admin.deleteOne({ _id:req.admin._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'User admin deleted successfully. Refreshing data...'
//         })
//     })
        
// })


//=================================
//              USERS
//=================================

// app.get('/api/users/user', (req,res) => {
//     User.find({}, (err, admins)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(admins);
//     })
// })

// app.get('/api/users/auth', auth, (req,res)=>{
//     res.status(200).json({
//         isAdmin: req.user.role === 0 ? false : true,
//         isAuth: true,
//         email: req.user.email,
//         name: req.user.name,
//         lastname: req.user.lastname,
//         role: req.user.role
//     })
// })

// app.post('/api/users/register', (req,res) => {
//     const user = new User(req.body);

//     user.save((err,doc) => {
//         if(err) return res.json({success:false,err});
//         res.status(200).json({
//             success: true,
//             userdata: doc
//         })
//     })
// });

// app.post('/api/users/login', (req,res)=>{
//     User.findOne({'email':req.body.email},(err,user)=>{
//         if(!user) return res.json({loginSuccess:false,message:'Auth failed, email not found'});
        
//         user.comparePassword(req.body.password,(err,isMatch)=>{
//             if(!isMatch) return res.json({loginSuccess:false,message:'Wrong password'});

//             user.generateToken((err,user)=>{
//                 if(err) return res.status(400).send(err);
//                 res.cookie('w_auth',user.token).status(200).json({
//                     loginSuccess: true
//                 })
//             })
//         })
//     })
// })

// app.get('/api/users/logout',auth,(req,res)=>{
//     User.findOneAndUpdate(
//         { _id:req.user._id },
//         { token: '' },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true
//             })
//         }
//     )
// });

// app.post('/api/users/delete', auth, (req, res) => {
//     User.deleteOne({ _id:req.user._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'User deleted successfully. Refreshing data...'
//         })
//     })
        
// })


//=================================
//              BRAND
//=================================

// app.post('/api/product/brand', (req,res)=>{
//     const brand = new Brand(req.body);

//     brand.save((err,doc)=>{
//         if(err) return res.json({success:false,err});
//         res.status(200).json({
//             success: true,
//             brand: doc
//         })
//     })
// })

// // app.get('/api/product/brands', (req,res)=>{
// //     Brand.find({}, (err, brands)=>{
// //         if(err) return res.status(400).send(err);
// //         res.status(200).send(brands);
// //     })
// // })

// app.get('/api/product/brands', getAllBrand);

// app.post('/api/product/brand-delete', (req, res) => {
//     Brand.deleteOne({ _id:req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'Brand deleted successfully. Refreshing data...'
//         })
//     })
// })

// // app.post('/api/product/brand-update', (req, res) => {
// //     Brand.findOneAndUpdate(
// //         { _id:req.body._id },
// //         { name: req.body.name },
// //         (err,doc)=>{
// //             if(err) return res.json({success:false,err});
// //             return res.status(200).send({
// //                 success: true,
// //                 brand:doc
// //             })
// //         }
// //     )  
// // })



// // get brands without id
// app.get('/api/product/brandsid', (req,res) => {
//     Brand.find({}, {'_id':0, 'name': 1}, (err, brands)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(brands);
//     })
// })

//=================================
//              PRODUCT
//=================================

// app.post('/api/product/shop',(req,res)=>{

//     let order = req.body.order ? req.body.order : "desc";
//     let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
//     let limit = req.body.limit ? parseInt(req.body.limit) : 100; 
//     let skip = parseInt(req.body.skip);
//     let findArgs = {};

//     for(let key in req.body.filters){
//         if(req.body.filters[key].length >0 ){
//             if(key === 'price'){
//                 findArgs[key] = {
//                     $gte: req.body.filters[key][0],
//                     $lte: req.body.filters[key][1]
//                 }
//             }else{
//                 findArgs[key] = req.body.filters[key]
//             }
//         }
//     }

//     findArgs['publish'] = true;

//     Product.
//     find(findArgs).
//     populate('brand').
//     populate('gender').
//     populate('section').
//     populate('category').
//     sort([[sortBy,order]]).
//     skip(skip).
//     limit(limit).
//     exec((err,articles)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).json({
//             size: articles.length,
//             articles
//         })
//     })
// })


// // BY ARRIVAL
// // /articles?sortBy=createdAt&order=desc&limit=4

// // BY SELL
// // /articles?sortBy=sold&order=desc&limit=100
// app.get('/api/product/articles',(req,res)=>{

//     let order = req.query.order ? req.query.order : 'asc';
//     let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
//     let limit = req.query.limit ? parseInt(req.query.limit) : 100;

//     Product.
//     find().
//     populate('brand').
//     populate('gender').
//     populate('section').
//     populate('category').
//     sort([[sortBy,order]]).
//     limit(limit).
//     exec((err,articles)=>{
//         if(err) return res.status(400).send(err);
//         res.send(articles)
//     })
// })

// // /api/product/article?id=HSHSHSKSK,JSJSJSJS,SDSDHHSHDS,JSJJSDJ&type=single
// app.get('/api/product/articles_by_id',(req,res)=>{
//     let type = req.query.type;
//     let items = req.query.id;

//     if(type === "array"){
//         let ids = req.query.id.split(',');
//         items = [];
//         items = ids.map(item=>{
//             return mongoose.Types.ObjectId(item)
//         })
//     }

//     Product.
//     find({ '_id':{$in:items}}).
//     populate('brand').
//     populate('gender').
//     populate('section').
//     populate('category').
//     exec((err,docs)=>{
//         return res.status(200).send(docs)
//     })
// });

// app.post('/api/product/article', auth, admin, (req,res)=>{
//     const product = new Product(req.body);

//     product.save((err,doc)=>{
//         if(err) return res.json({success:false, err});
//         res.status(200).json({
//             success: true,
//             article: doc
//         })
//     })
// })

// app.post('/api/product/article-update', auth, (req,res) =>{
//     const product = new Product(req.body);

//     Product.findOne({ _id: req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         Product.update({ _id: req.body._id }, {$set: product}, (err, doc)=>{
//             if(err) return res.json({success:false, err});
//             return res.status(200).send({
//                 success: true,
//                 message: 'Product updated successfully. Refreshing data...'
//             })
//         })
//     })
// })

// app.post('/api/product/article-delete', (req,res) => {
//     Product.deleteOne({ _id:req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'Product deleted successfully. Refreshing data...'
//         })
//     })  
// })

// app.post('/api/product/article-softdelete', (req,res) => {
//     Product.findOneAndUpdate(
//         { _id:req.body._id },
//         { deleted:true },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true,
//                 article:doc
//             })
//         }
//     )
// })


//=================================
//              GENDER
//=================================

// app.post('/api/product/gender', auth, admin, (req,res)=>{
//     const gender = new Gender(req.body);

//     gender.save((err,doc)=>{
//         if(err) return res.json({success:false, err});
//         res.status(200).json({
//             success: true,
//             gender: doc
//         })
//     })
// })

// app.get('/api/product/genders', (req,res)=>{
//     Gender.find({}, (err,genders)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(genders)
//     })
// })

// app.post('/api/product/gender-delete', auth, (req, res) => {
//     Gender.deleteOne({ _id:req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'Gender deleted successfully. Refreshing data...'
//         })
//     })
// })

// app.post('/api/product/gender-update', (req, res) => {
//     Gender.findOneAndUpdate(
//         { _id:req.body._id },
//         { name: req.body.name },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true,
//                 gender:doc
//             })
//         }
//     )
// })

//=================================
//              SECTION
//=================================

// app.post('/api/product/section', auth, admin, (req,res)=>{
//     const section = new Section(req.body);

//     section.save((err, doc)=>{
//         if(err) return res.json({success:false, err});
//         res.status(200).json({
//             success:true,
//             section: doc
//         })
//     })
// })

// app.get('/api/product/sections', (req,res)=>{
//     Section.find({}, (err,sections)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(sections);
//     })
// })

// app.post('/api/product/section-delete', auth, (req, res) => {
//     Section.deleteOne({ _id:req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'Section deleted successfully. Refreshing data...'
//         })
//     })
// })

// app.post('/api/product/section-update', (req, res) => {
//     Section.findOneAndUpdate(
//         { _id:req.body._id },
//         { name: req.body.name },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true,
//                 section:doc
//             })
//         }
//     )
// })

//=================================
//              CATEGORY
//=================================

// app.post('/api/product/category', (req,res)=>{
//     const category = new Category(req.body);

//     category.save((err,doc)=>{
//         if(err) return res.json({success:false, err});
//         res.status(200).json({
//             success: true,
//             category: doc
//         })
//     })
// })

// app.get('/api/product/categories', (req,res)=>{
//     Category.find({}, (err,categories)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(categories);
//     })
// })

// app.post('/api/product/category-delete', auth, (req, res) => {
//     Category.deleteOne({ _id:req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'Category deleted successfully. Refreshing data...'
//         })
//     })      
// })

// app.post('/api/product/category-update', (req, res) => {
//     Category.findOneAndUpdate(
//         { _id:req.body._id },
//         { name: req.body.name },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true,
//                 category:doc
//             })
//         }
//     )
// })

//=================================
//              INFOS
//=================================

// app.post('/api/product/info', (req,res) => {
//     const infos = new Infos(req.body);

//     infos.save((err, doc) => {
//         if(err) return res.json({success:false, err});
//         res.status(200).json({
//             success: true,
//             infos: doc
//         })
//     })
// })

// app.get('/api/product/infos', (req,res) => {
//     Infos.find({}, (err,infos)=>{
//         if(err) return res.status(400).send(err);
//         res.status(200).send(infos);
//     })
// })

// app.post('/api/product/infos-update', (req,res) => {
//     const infos = new Infos(req.body);

//     Infos.findOneAndUpdate(
//         { _id:req.body._id },
//         req.body,
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true,
//                 infos:doc
//             })
//         }
//     )
// })

// app.post('/api/product/infos-delete', (req,res) => {
//     Infos.deleteOne({ _id:req.body._id }, (err,doc)=>{
//         if(err) return res.json({success:false, err});
//         return res.status(200).send({
//             success: true,
//             message: 'Infos deleted successfully. Refreshing data...'
//         })
//     })  
// })

// app.post('/api/product/infos-softdelete', (req,res) => {
//     Infos.findOneAndUpdate(
//         { _id:req.body._id },
//         { deleted:true },
//         (err,doc)=>{
//             if(err) return res.json({success:false,err});
//             return res.status(200).send({
//                 success: true,
//                 infos:doc
//             })
//         }
//     )
// })

//=================================
//              END MODEL
//=================================

app.listen(port, () => {
    console.log(`Server running at ${port}`);
    
})