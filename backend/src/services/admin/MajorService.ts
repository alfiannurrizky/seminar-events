import { Major, PrismaClient } from '@prisma/client'
import { MajorType } from 'src/types/MajorType'
const prisma = new PrismaClient()

interface IMajor {
    create(payload: MajorType): Promise<MajorType>
    getMajors(): Promise<Major[]>
}
class MajorService implements IMajor {
    async create(payload: MajorType) {
        const major = await prisma.major.create({
            data: {
                name: payload.name
            }
        })

        return major
    }

    async getMajors() {
        const majors = await prisma.major.findMany()

        return majors
    }
}

export default new MajorService()
