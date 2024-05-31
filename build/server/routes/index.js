"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
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
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});
