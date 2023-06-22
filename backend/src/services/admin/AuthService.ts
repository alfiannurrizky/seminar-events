import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import JWT from '../../utils/jwt/index'
import { UserInput, UserType } from '../../types/UserType'
import ResponseError from '../../utils/response'
const prisma = new PrismaClient()

interface IAuthService {
    login(payload: UserInput): Promise<string>
}
class AuthService implements IAuthService {
    async login(payload: UserInput) {
        const user = await prisma.user.findUnique({
            where: {
                email: payload.email
            }
        })

        if (!user) {
            throw new ResponseError(401, 'user not found')
        }

        const isValid = await bcrypt.compare(payload.password, user.password)

        if (!isValid) {
            throw new ResponseError(401, 'email or password wrong')
        }

        const result: UserType = {
            id: user.id,
            username: user.username,
            email: user.email
        }

        const token = await JWT.signToken(result)

        if (!token) {
            throw new ResponseError(401, 'invalid token')
        }

        return token
    }
}

export default new AuthService()
