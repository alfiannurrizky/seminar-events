import { Router } from 'express'
import AuthController from '../../controllers/admin/AuthController'

const router: Router = Router()

router.post('/login', AuthController.login)

export default router
