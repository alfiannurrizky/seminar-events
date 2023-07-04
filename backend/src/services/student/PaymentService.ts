import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class PaymentService {
    public async getAllPayments(id: string) {
        const student = await prisma.student.findUnique({
            where: {
                id: id
            }
        })

        const payments = await prisma.payment.findMany({
            where: {
                studentId: student?.id
            },
            include: {
                seminar: true
            }
        })

        return payments
    }
}

export default new PaymentService()
