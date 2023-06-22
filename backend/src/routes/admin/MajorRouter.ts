import { Router } from 'express'
import MajorController from '../../controllers/admin/MajorController'
import auth from '../../middlewares/auth'

const router: Router = Router()

router.post('/majors', auth.isAdmin, MajorController.create)

export default router
