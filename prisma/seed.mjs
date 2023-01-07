import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "admin@admin.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash("12341234", 12);

  const user = await prisma.user.create({
    data: {
      email:email,password:hashedPassword
    },
  });
  const work1 = await prisma.work.create({
    data: {
      title: "work1",
      path: "work-1",
      content: "work 1 content",
      
    },
  });
  const work2 = await prisma.work.create({
    data: {
      title: "work2",
      path: "work-2",
      content: "work 2 content",
      
    },
  });
  const work3 = await prisma.work.create({
    data: {
      title: "work3",
      content: "work 3 content",
      path: "work-3",
    },
  });
  const index = await prisma.index.create({
    data: {
      title: "Index",
      content: `### This is the index page
## Nothing to see here :)`.trim(),
    },
  });
  const about = await prisma.about.create({
    data: {
      title: "About",
      content: `### This is the about page
## Nothing to see here :)`.trim(),
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