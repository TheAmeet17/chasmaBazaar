import { create } from 'domain';
import Router from 'express';
import { createCar, editCar, getCar, getCarById, removeCar } from '../controller/carController';
const router = Router();


router.get('/',getCar);
router.get('/:id',getCarById);
router.post('/',createCar);
router.put('/:id',editCar);
router.delete('/:id',removeCar);


export default router;