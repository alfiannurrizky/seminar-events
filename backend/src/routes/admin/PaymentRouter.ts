import { Router } from 'express'
import PaymentController from '../../controllers/admin/PaymentController'
import auth from '../../middlewares/auth'

const router: Router = Router()

router.post('/payments', auth.isAdmin, PaymentController.create)

export default router
