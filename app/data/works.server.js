import { prisma } from "./database.server";

export async function getWorks() {
  return await prisma.work.findMany();
}

export async function createWork({title, content, path}) {

  return await prisma.work.create({
    data: {
      title,
      content,
      path,
    },
  });
}

export async function deleteWork(path) {
  return await prisma.work.delete({
    where: { path },
  });
}