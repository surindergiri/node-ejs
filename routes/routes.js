var express     = require('express')
var router      = express.Router()
var asyncMiddleware = require('../middleware/async')


/**
 * Google Authenticator
 */
var googleAuth  = require( '../controller/googleauth' )
router.post( '/generate_key', asyncMiddleware( googleAuth.generate_key) )
router.post( '/verify', asyncMiddleware( googleAuth.verify) )

/**
 * About page
 */

 router.get("/home",(req,res) => {
    res.render('home')
})
router.get("/about",(req,res) => {
    res.render('about',{active:"about"})
})
router.get("/products",(req,res) => {
    res.render('products')
})
router.get("/store",(req,res) => {
    res.render('store')
})

module.exports = router