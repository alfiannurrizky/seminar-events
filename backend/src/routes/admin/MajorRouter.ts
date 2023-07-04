import { Router } from 'express'
import MajorController from '../../controllers/admin/MajorController'
import auth from '../../middlewares/auth'

const router: Router = Router()

router.post('/majors', auth.isAdmin, MajorController.create)
router.get('/majors', auth.isAdmin, MajorController.getMajors)

export default router
