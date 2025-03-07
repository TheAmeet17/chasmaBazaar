import Router from 'express';
import { registerUser,loginUser,getAllGlasses,purchaseGlasses,getPurchasedGlasses } from '../controller/userController';
import { validateUser } from '../validators/validateUser';
import { get } from 'http';
const router=Router();


router.post('/signup',validateUser,registerUser);
router.post('/login',loginUser);
router.get('/Glasses',getAllGlasses);   //get all cars
router.post('/purchase/:Glassesid',purchaseGlasses); 
router.get('/purchased-Glasses',getPurchasedGlasses); 


export default router;