import { NextFunction, Request, Response } from 'express'
import AuthService from '../../services/student/AuthService'
import { LoginType } from '../../types/AuthType'
import logger from '../../utils/logger'

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const payload: LoginType = req.body
            const token = await AuthService.login(payload)

            logger.info('login student')

            res.status(200).json({
                message: 'Logged in successfully',
                token: token
            })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }

    async me(req: Request, res: Response, next: NextFunction) {
        try {
            const student = await AuthService.me(req.student.id)

            logger.info('get current student')

            res.status(200).json({
                success: true,
                message: 'detail user',
                data: student
            })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default new AuthController()
