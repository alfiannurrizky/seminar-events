import { Router } from 'express'
import SeminarController from '../../controllers/admin/SeminarController'
import auth from '../../middlewares/auth'
import fileUpload from '../../middlewares/multer'

const router: Router = Router()

router.post(
    '/seminars',
    auth.isAdmin,
    fileUpload.single('image'),
    SeminarController.create
)

router.get('/seminars', auth.isAdmin, SeminarController.findSeminars)

export default router
