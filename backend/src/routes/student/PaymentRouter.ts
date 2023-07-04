import { Router } from 'express'
import PaymentController from '../../controllers/student/PaymentController'
import auth from '../../middlewares/auth'

const router: Router = Router()

router.get('/payments', auth.isStudent, PaymentController.getPayments)

export default router
