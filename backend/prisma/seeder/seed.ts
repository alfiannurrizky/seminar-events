import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const student = await prisma.student.createMany({
        data: [
            {
                majorId: '7c17d8bd-2963-4167-9c39-94997596e973',
                username: 'alfian',
                email: 'alfi@email.com',
                password: await bcrypt.hash('password', 10)
            },
            {
                majorId: '68a6bc86-8aaa-4da1-9c7f-37e5528de3c2',
                username: 'indah',
                email: 'indah@email.com',
                password: await bcrypt.hash('password', 10)
            },
            {
                majorId: 'c5c0766f-aa3d-433d-9f02-2022916329ce',
                username: 'ayu',
                email: 'ayu@email.com',
                password: await bcrypt.hash('password', 10)
            }
        ]
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
