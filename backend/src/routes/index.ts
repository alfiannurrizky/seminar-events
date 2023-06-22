import { Router } from 'express'
import AuthRouter from './admin/main'
import MajorRouter from '../routes/admin/MajorRouter'

const router: Router = Router()

router.use('/api/admin', AuthRouter)
router.use('/api/admin', MajorRouter)

export default router
