// API Routes


const express = require('express')
const router = express.Router()
const Controller =require('../controller/controller')
const AuthController = require('../controller/auth-collection')
const cors = require('cors')


router.get('/',Controller.showIndex) 

router.post('/add-products', Controller.addProducts)

router.get('/get-products',cors(), Controller.showProducts)

router.get('/get-category/:id', Controller.getCategoryItems)

router.put('/update-category/:id', Controller.updateCategory)

router.delete('/delete-category/:id' ,Controller.deleteCategory)

// login authentication

router.post('/register', AuthController.signUp)

router.post('/login', AuthController.signIn)

module.exports = router