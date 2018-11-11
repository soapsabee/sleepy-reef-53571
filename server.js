var express = require('express');
var cors = require('cors')
var app = express();
var db = require('./database')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())
// index page
app.get('/', function (req, res) {
    res.send('Patiphan is running');
    });
// CRUD PRODUCT
app.get('/api/products', db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);
// CRUD PURCHASE
app.get('/api/purchase', db.getAllPurchase);
app.get('/api/purchase/:id', db.getPurchaseByID);
app.post('/api/purchase', db.insertPurchase);
app.put('/api/purchase/:id', db.updatePurchase);
app.delete('/api/purchase/:id', db.deletePurchase);
// CRUD USERS
app.get('/api/users/', db.getAllUser);
app.get('/api/users/:id', db.getAllUsersByID);
app.post('/api/users', db.insertUsers);
app.put('/api/users/:id', db.updateUsers);
app.delete('/api/users/:id', db.deleteUsers);

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});