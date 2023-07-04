import { NextFunction, Request, Response } from 'express'
import SeminarService from '../../services/student/SeminarService'
import logger from '../../utils/logger'

class SeminarStudentController {
    async findSeminars(req: Request, res: Response, next: NextFunction) {
        try {
            const seminars = await SeminarService.findSeminar(req.student.id)

            logger.info('get seminars student')

            return res
                .status(201)
                .json({ message: 'list data seminars', data: seminars })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default new SeminarStudentController()
