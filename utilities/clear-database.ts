import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const clearDatabase = async () =>{
    await prisma.card.deleteMany({});
    await prisma.face.deleteMany({});
}

export default clearDatabase