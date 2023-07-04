import { SeminarType } from 'src/types/SeminarType'
import { prisma } from '../../database/database'
import { Seminar } from '@prisma/client'

interface ISeminar {
    findSeminar(id: string): Promise<Seminar[]>
}

class SeminarService implements ISeminar {
    async findSeminar(id: string) {
        const student = await prisma.student.findUnique({
            where: {
                id: id
            },
            include: {
                payment: true
            }
        })
        const seminars = await prisma.seminar.findMany({
            where: {
                majorId: student!.majorId
            }
        })

        return seminars
    }
}

export default new SeminarService()
