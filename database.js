const pgp = require('pg-promise')();
var db = pgp('postgres://ilwsduezrrtygv:af6d80076085e051f61b79eb8e6bafb6d4d9885c1e2a073a212cfe068a3283ac@ec2-184-72-247-70.compute-1.amazonaws.com:5432/ddjqb7dp6mhbsr?ssl=true');
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
    db.none('insert into product_table(title, price, create_at, tag)' +
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