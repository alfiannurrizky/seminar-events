import { NextFunction, Request, Response } from 'express'
import SeminarService from '../../services/admin/SeminarService'
import logger from '../../utils/logger'

class SeminarController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const seminar = await SeminarService.create({
                majorId: req.body.majorId,
                name: req.body.name,
                image: req.file!.path,
                date: req.body.date
            })

            logger.info('success create seminar')

            return res
                .status(201)
                .json({ message: 'success created seminar', data: seminar })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async findSeminars(req: Request, res: Response, next: NextFunction) {
        const seminars = await SeminarService.findSeminars()

        logger.info('find seminars admin')

        return res
            .status(201)
            .json({ message: 'list data seminars', data: seminars })
    }
}

export default new SeminarController()
