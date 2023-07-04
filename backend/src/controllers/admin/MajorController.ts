import { NextFunction, Request, Response } from 'express'
import MajorService from '../../services/admin/MajorService'
import logger from '../../utils/logger'

class MajorController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body
            const major = await MajorService.create({ name })

            logger.info('create major')

            return res
                .status(201)
                .json({ message: 'success created major', data: major })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async getMajors(req: Request, res: Response, next: NextFunction) {
        try {
            const majors = await MajorService.getMajors()

            logger.info('get all majors')

            return res
                .status(200)
                .json({ message: 'succes get majors', data: majors })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default new MajorController()
