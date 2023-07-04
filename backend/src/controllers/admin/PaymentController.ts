import { NextFunction, Request, Response } from 'express'
import PaymentService from '../../services/admin/PaymentService'
import logger from '../../utils/logger'

class PaymentController {
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const payment = await PaymentService.create({
                userId: req.user.id,
                studentId: req.body.studentId,
                seminarId: req.body.seminarId,
                totalPaid: parseInt(req.body.totalPaid),
                status: 'belum lunas',
                totalReturn: 0
            })

            await PaymentService.process(payment, payment.id)

            logger.info('Success process payment ')

            return res.status(200).json({
                success: true,
                message: 'success',
                data: payment
            })
        } catch (error) {
            logger.error(error)
            next(error)
        }
    }
}

export default new PaymentController()
