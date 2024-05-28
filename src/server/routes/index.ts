import { Router } from "express";
import { StatusCodes } from 'http-status-codes';

const router = Router();


router.get('/', (_, res) => {
      return res.send("Hello word!");
});

router.post('/teste', (req, res) => {
    console.log(req.body);


/*router.post('/teste/:id', (req, res) => {
console.log(req.params.id);

 router.post('/teste', (req, res) => {
    console.log(req.query.teste);
    
   exemplo:http://localhost:3333/teste?teste=olá 
    irá aparecer >olá<*/

    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});




export {router};