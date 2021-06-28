import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
    await prisma.city.create({
        data: {
            city_name: 'Osaka',
            Attraction: {
                create: {
                    attraction_name: 'Okonomiyaki',
                    Resource: {
                        create: {
                            resource_name: 'https://youtu.be/6Oajl8PCWKQ'
                        }
                    }
                }
            }
        }
    })
}

seed()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })