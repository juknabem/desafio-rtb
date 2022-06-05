import http from 'http';
import getData from './ordersController.js';

const orders = getData();

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(orders))
}).listen(8080);