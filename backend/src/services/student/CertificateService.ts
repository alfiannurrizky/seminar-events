import PDFDocument from 'pdfkit'
import { prisma } from '../../database/database'
import { UserType } from '../../types/UserType'

interface ICertificate {
    pdfBuild(
        dataCallback: any,
        endCallback: any,
        username: string,
        id: string
    ): Promise<any>
}

class CertificateService implements ICertificate {
    async pdfBuild(
        dataCallback: any,
        endCallback: any,
        username: string,
        id: string
    ): Promise<any> {
        const payment = await prisma.payment.findUnique({
            where: {
                id: id
            },
            include: {
                seminar: true
            }
        })

        const doc = new PDFDocument()
        doc.on('data', dataCallback)
        doc.on('end', endCallback)
        doc.fillColor('green')
        doc.fontSize(25).text(
            `Halo ${username} Selamat Anda Mendapatkan Sertifikat Dari Seminar "${payment?.seminar.name}" `
        )
        doc.end()
    }
}

export default new CertificateService()
