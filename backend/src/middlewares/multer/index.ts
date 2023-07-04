import multer from 'multer'
import ResponseError from '../../utils/response'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const fileUpload = multer({
    storage: storage,

    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg'
        ) {
            cb(null, true)
        } else {
            cb(null, false)

            return cb(new ResponseError(415, 'file extension not allowed!'))
        }
    }
})

export default fileUpload
