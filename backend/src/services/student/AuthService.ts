import bcrypt from 'bcrypt'
import { PrismaClient, Student } from '@prisma/client'
import JWT from '../../utils/jwt/index'
import ResponseError from '../../utils/response'
import { UserInput, UserType } from '../../types/UserType'
const prisma = new PrismaClient()

interface IAuthService {
    login(payload: UserInput): Promise<string>
    me(id: string): Promise<UserType>
}
class AuthStudentService implements IAuthService {
    async login(payload: UserInput) {
        const student = await prisma.student.findUnique({
            where: {
                email: payload.email
            }
        })

        if (!student) {
            throw new ResponseError(401, 'user not found')
        }

        const isValid = await bcrypt.compare(payload.password, student.password)

        if (!isValid) {
            throw new ResponseError(401, 'email or password wrong')
        }

        const result: UserType = {
            id: student.id,
            username: student.username,
            email: student.email
        }

        const token = await JWT.signTokenStudent(result)

        if (!token) {
            throw new ResponseError(401, 'invalid token')
        }

        return token
    }

    async me(id: string) {
        const currentStudent = await prisma.student.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                email: true,
                username: true,
                major: true
            }
        })

        return currentStudent!
    }
}

export default new AuthStudentService()
