const ProductsModel = require('../model/product_model')

exports.showIndex =(req,res) =>{
    res.send("running node api")
}

exports.addProducts = (req,res) =>{
    const post = new ProductsModel({
        id:req.body.id,
        title:req.body.title,
        routeName:req.body.routeName,
        items:req.body.items
    })

    post.save()
    .then(data => {res.send(data)})
    .catch(err => {res.send(err)})
}


    exports.showProducts = (req,res) =>{
        ProductsModel.find()
        .then(result =>{res.send(result)})
        .catch(err =>{res.status(400).send(err)})
    }

    exports.getCategoryItems = (req,res) => {
        ProductsModel.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    }


    exports.updateCategory = (req,res) =>{
        ProductsModel.findById(req.params.id , (err,catagory)=>{
            if(err)
            res.send(err)
            catagory.title = req.body.title ? req.body.title : catagory.title
            catagory.routeName = req.body.routeName ? req.body.title : catagory.routeName

            catagory.save((err) => {
                if(err)
                res.send(err)
                res.json({
                    message: 'catagory updated successfully',
                    data: catagory
                })
            })
        })
    }


    exports.deleteCategory = (req,res) =>{
        ProductsModel.deleteOne({

            
            _id:req.params.id
        }, (err) =>{
            if(err)
            res.semd(err)

            res.json({
                status : "Success",
                message : `successfully deleted the catagory with Id: ${req.params.id}`
            })
        })
    }