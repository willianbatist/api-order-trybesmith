import express from 'express';
import ProductsController from './controllers/product.controller';

const app = express();
const productsController = new ProductsController();

app.use(express.json());

app.get('/products', productsController.getAll);

app.post('/products', productsController.create);

export default app;
