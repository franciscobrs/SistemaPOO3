const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const PostController = require('../controllers/postController');
const tipojogoController = require('../controllers/tipojogoController');
const horarioController = require('../controllers/horarioController');
const router = express.Router();

router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.post('/usuarios', UsuarioController.Insert);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.get('/posts', PostController.SearchAll);
router.get('/posts/:id', PostController.SearchOne);
router.post('/posts', PostController.Insert);
router.put('/posts/:id', PostController.Update);
router.delete('/posts/:id', PostController.Delete);

router.get('/horarios', horarioController.SearchAll);
router.get('/horarios/:id', horarioController.SearchOne);
router.post('/horarios', horarioController.Insert);
router.put('/horarios/:id', horarioController.Update);
router.delete('/horarios/:id', horarioController.Delete);

router.get('/tipojogos', tipojogoController.SearchAll);
router.get('/tipojogos/:id', tipojogoController.SearchOne);
router.post('/tipojogos', tipojogoController.Insert);
router.put('/tipojogos/:id', tipojogoController.Update);
router.delete('/tipojogos/:id', tipojogoController.Delete);
module.exports = router;