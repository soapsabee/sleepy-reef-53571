const pgp = require('pg-promise')();
var db = pgp(process.env.getSoap);
// Add queries here


function getAllProducts(req, res) {
    db.any('select * from product_table')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getProductByID(req, res) {
    db.any(`select * from product_table where id = ${req.params.id}`)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertProduct(req, res) {
    db.any('insert into product_table(title, price, create_at, tag)' +
        'values(${title}, ${price}, ${create_at}, ${tag})',req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {

    db.none('update product_table set title = ${title},price = ${price} , create_at = ${create_at} , tag = ${tag}  where id = ' +req.params.id ,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}

function deleteProduct(req, res) {

    db.none('delete from product_table where id =' +req.params.id ,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}

module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct

};