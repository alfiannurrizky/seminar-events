import { NextFunction, Request, Response } from 'express'
import AuthService from '../../services/admin/AuthService'
import { LoginType } from '../../types/AuthType'

class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const payload: LoginType = req.body
            const token = await AuthService.login(payload)

            res.status(200).json({
                message: 'Logged in successfully',
                data: token
            })
        } catch (error) {
            next(error)
        }
    }
}

export default new AuthController()
