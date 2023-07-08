import { NextFunction, Request, Response } from 'express'
import AuthService from '../../services/admin/AuthService'
import { LoginType } from '../../types/AuthType'
import logger from '../../utils/logger'

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const payload: LoginType = req.body
            const token = await AuthService.login(payload)

            logger.info('login admin')

            res.status(200).json({
                success: true,
                message: 'Logged in successfully',
                data: {
                    tokenType: 'Bearer',
                    token: token
                }
            })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default new AuthController()
