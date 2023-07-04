import { NextFunction, Request, Response } from 'express'
import CertificateService from '../../services/student/CertificateService'

class CertificateController {
    pdfBuild(req: Request, res: Response, next: NextFunction) {
        const stream = res.writeHead(200, {
            'Content-type': 'application/pdf',
            'Content-Disposition': 'attachment;filename=sertifikat.pdf'
        })

        const generatePdf = CertificateService.pdfBuild(
            (chunk: any) => stream.write(chunk),
            () => stream.end(),
            req.student.username,
            req.params.id
        )
    }
}

export default new CertificateController()
