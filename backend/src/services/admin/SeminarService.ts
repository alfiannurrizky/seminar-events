import { SeminarType } from 'src/types/SeminarType'
import { prisma } from '../../database/database'
import { Seminar } from '@prisma/client'

interface ISeminar {
    create(payload: SeminarType): Promise<SeminarType>
    findSeminars(): Promise<Seminar[]>
}

class SeminarService implements ISeminar {
    async create(payload: SeminarType) {
        const seminar = await prisma.seminar.create({
            data: payload
        })

        return seminar
    }
    async findSeminars() {
        const seminars = await prisma.seminar.findMany()

        return seminars
    }
}

export default new SeminarService()
