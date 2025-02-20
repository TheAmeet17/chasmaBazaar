import { create } from 'domain';
import Router from 'express';
import { createGlasses, editGlasses, getGlasses, getGlassesById, removeGlasses } from '../controller/glassController';
const router = Router();


router.get('/',getGlasses);
router.get('/:id',getGlassesById);
router.post('/',createGlasses);
router.put('/:id',editGlasses);
router.delete('/:id',removeGlasses);


export default router;