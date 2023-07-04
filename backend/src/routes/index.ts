import { Router } from 'express'
import AuthRouter from './admin/main'
import AuthStudentRouter from './student/main'
import MajorRouter from '../routes/admin/MajorRouter'
import SeminarRouter from '../routes/admin/SeminarRouter'
import SeminarStudentRouter from './student/SeminarRouter'
import PaymentRouter from '../routes/admin/PaymentRouter'
import PaymentStudentRouter from '../routes/student/PaymentRouter'
import multer from 'multer'

const router: Router = Router()

router.use('/api/admin', SeminarRouter)

router.use(multer().none())
router.use('/api/admin', AuthRouter)
router.use('/api/student/', AuthStudentRouter)
router.use('/api/student/', SeminarStudentRouter)
router.use('/api/student/', PaymentStudentRouter)
router.use('/api/admin', MajorRouter)
router.use('/api/admin', PaymentRouter)

export default router
