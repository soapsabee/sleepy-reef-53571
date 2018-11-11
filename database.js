const pgp = require('pg-promise')();
var db = pgp(process.env.Soap055);


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


function getAllPurchase(req, res) {
    db.any(`select * from purchase `)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase'
                        
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getPurchaseByID(req, res) {
    db.any(`select * from purchase where id = ${req.params.id}`)
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

function insertPurchase(req, res) {
    db.any('insert into purchase(tag, buy_at, sale)' +
        'values(${tag}, ${buy_at}, ${sale})',req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchase(req, res) {

    db.none('update purchase set tag = ${tag},buy_at = ${buy_at} , sale = ${sale} where id = ' +req.params.id ,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}

function deletePurchase(req, res) {

    db.none('delete from product_table where id =' +req.params.id ,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}

function getAllUser(req, res) {
    db.any(`select * from users `)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase'
                        
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getAllUsersByID(req, res) {
    db.any(`select * from users where id = ${req.params.id}`)
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

function insertUsers(req, res) {
    db.any('insert into users(email, password, create_at)' +
        'values(${email}, ${password}, ${create_at})',req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateUsers(req, res) {

    db.none('update users set email = ${email},password = ${password} , create_at = ${create_at} where id = ' +req.params.id ,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}
function deleteUsers(req, res) {

    db.none('delete from users where id =' +req.params.id ,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted one purchase'
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
    deleteProduct,
    getAllPurchase,
    getPurchaseByID,
    insertPurchase,
    updatePurchase,
    deletePurchase,
    getAllUser,
    getAllUsersByID,
    insertUsers,
    updateUsers,
    deleteUsers

};