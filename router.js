import { Router } from 'express'
import CarController from './controllers/car.js'
import TypeController from './controllers/type.js'


export const router = new Router()

router.get('/cars', CarController.getAll)
router.get('/cars/:id', CarController.getOne)
router.post('/cars', CarController.create)
router.put('/cars/:id', CarController.update)
router.delete('/cars/:id', CarController.delete)

router.get('/types', TypeController.getAll)
router.get('/types/:id', TypeController.getOne)
router.post('/types', TypeController.create)
router.put('/types/:id', TypeController.update)
router.delete('/types/:id', TypeController.delete)
