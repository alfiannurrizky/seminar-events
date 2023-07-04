import { Router } from 'express'
import SeminarController from '../../controllers/student/SeminarController'
import auth from '../../middlewares/auth'

const router: Router = Router()

router.get('/seminars', auth.isStudent, SeminarController.findSeminars)

export default router
