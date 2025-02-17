import Router from 'express';
import { registerUser,loginUser,getAllCars,purchaseCars,getPurchasedCars } from '../controller/userController';
import { get } from 'http';
const router=Router();


router.post('/signup',registerUser);
router.post('/login',loginUser);
router.get('/cars',getAllCars);   //get all cars
router.post('/purchase/:carid',purchaseCars); 
router.get('purchased-cars',getPurchasedCars); 


export default router;