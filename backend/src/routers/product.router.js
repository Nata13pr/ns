import {Router} from "express";
import {ProductService} from "../services/index.js";

const productRouter = new Router();

//getAll
productRouter.get('/', async (req, res) => {
    const result = await ProductService.getAll();
    res.json(result)
})

//getById
productRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
    const result = await ProductService.getById(id)
    res.json(result)
})

//createProduct
productRouter.post('/', async (req, res) => {
    const data = req.body;
    const result = await ProductService.create(data)
    res.json(result)

})

//updateById
productRouter.put('/:id', async (req, res) => {
    const {id} = req.params;
    const result = await ProductService.updateById(id, req.body)
    res.json(result)
})

//deleteById
productRouter.delete('/:id', async(req, res) => {
    const {id}=req.params;
    const result=await ProductService.deleteById(id)
    res.json(result)
})

export default productRouter;