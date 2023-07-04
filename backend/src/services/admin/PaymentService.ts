import { PaymentType } from '../../types/PaymentTypes'
import { prisma } from '../../database/database'

interface IPayment {
    create(payload: PaymentType): Promise<PaymentType>
    process(payload: PaymentType, id: string): Promise<void>
}

class PaymentService implements IPayment {
    async create(payload: PaymentType) {
        const payment = await prisma.payment.create({
            data: payload
        })

        return payment
    }

    async process(payload: PaymentType, id: string) {
        const priceSeminar = 100000

        if (payload.totalPaid < priceSeminar) {
            payload.status = 'belum lunas'
        }

        if (payload.totalPaid > priceSeminar) {
            payload.totalReturn = payload.totalPaid - priceSeminar
            payload.status = 'lunas'
        }

        if (payload.totalPaid == priceSeminar) {
            payload.status = 'lunas'
        }

        await prisma.payment.update({
            where: { id: id },
            data: {
                totalReturn: payload.totalReturn,
                status: payload.status
            }
        })
    }
}

export default new PaymentService()
