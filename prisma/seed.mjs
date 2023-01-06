import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "admin@admin.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });
  // Will hass the password: 1234abc (use your own)
  const hashedPassword = await bcrypt.hash("1234abc", 12);

  const user = await prisma.user.create({
    data: {
      email:email,password:hashedPassword
    },
  });
  // Seeding the index page
  const index = await prisma.index.create({
    data: {
      title: "Index",
      content: `If you see this hero section, you have successfully installed the template.
This is comming from prisma schema and the data is being fetched from the database.
Make sure to edit the schema and add your own data using the seed script!`.trim(),
    },
  });
  
console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
