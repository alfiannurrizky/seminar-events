import { Request, Response } from 'express'
import PaymentService from '../../services/student/PaymentService'

class PaymentController {
    public async getPayments(req: Request, res: Response) {
        const payments = await PaymentService.getAllPayments(req.student.id)

        return res.status(200).json({
            success: true,
            message: 'list data paymnets',
            data: payments
        })
    }
}

export default new PaymentController()
