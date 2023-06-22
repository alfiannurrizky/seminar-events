import { NextFunction, Request, Response } from 'express'
import MajorService from '../../services/admin/MajorService'
import logger from '../../utils/logger'

class MajorController {
    async create(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body
        const major = await MajorService.create({ name })

        logger.info('create major')

        return res
            .status(201)
            .json({ message: 'success created major', data: major })
    }
}

export default new MajorController()
