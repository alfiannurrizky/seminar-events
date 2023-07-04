import { Router } from 'express'
import AuthController from '../../controllers/student/AuthController'
import CertificateController from '../../controllers/student/CertificateController'
import auth from '../../middlewares/auth'

const router: Router = Router()

router.post('/login', AuthController.login)
router.get('/profile', auth.isStudent, AuthController.me)
router.get('/certificates/:id', auth.isStudent, CertificateController.pdfBuild)

export default router
