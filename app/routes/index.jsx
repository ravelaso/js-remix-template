// required
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/data/database.server";

// components
import HeroSection from "~/components/section/HeroSection";
import NavBar from "~/components/nav/NavBar";
import WorksSection from "~/components/section/WorksSection";


export async function loader(){
  const index = await prisma.index.findUnique({where: {title: "Index"}});
  const about = await prisma.about.findUnique({where: {title: "About"}});
  const works = await prisma.work.findMany();
  return {index, about,works};
}

export default function Index() {
  const { index } = useLoaderData();
  const { about } = useLoaderData();
  const { works } = useLoaderData();
  return (
    <>
    <NavBar />
    <HeroSection data={index} />
    <HeroSection data={about} />
    <WorksSection data={works} />
    </>
  );
}
