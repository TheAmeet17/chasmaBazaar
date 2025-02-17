import Router from 'express';
import { registerAdmin,loginAdmin ,addCar,updateCar,deleteCar} from '../controller/adminController';

const router = Router();
router.post('/signup',registerAdmin);
router.post('/login',loginAdmin);
router.post('/car',addCar);   //get all cars
router.put('car/:id',updateCar)
router.delete('car/:id',deleteCar)


export default router;