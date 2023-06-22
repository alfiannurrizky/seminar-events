import { NextFunction, Request, Response } from 'express'
import JWT from '../../utils/jwt/index'

class Auth {
    async isAdmin(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        if (!req.headers.authorization) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' })
            return
        }

        const payload = await JWT.verifyToken(token)

        if (!payload) {
            res.status(401).json({ message: 'Unauthenticated' })
            return
        }

        req.user = payload.payload
        next()
    }
}

export default new Auth()
