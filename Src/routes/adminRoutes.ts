import Router from 'express';
import { registerAdmin,loginAdmin ,addGlasses,updateGlasses,deleteGlasses} from '../controller/adminController';

const router = Router();
router.post('/signup',registerAdmin);
router.post('/login',loginAdmin);
router.post('/glasses',addGlasses);   //get all glassess
router.put('glasses/:id',updateGlasses)
router.delete('glasses/:id',deleteGlasses)


export default router;