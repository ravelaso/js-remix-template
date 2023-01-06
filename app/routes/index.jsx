import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/data/database.server";
export async function loader(){
  return await prisma.index.findUnique({where: {title: "Index"}});
}
export default function Index() {
  const data = useLoaderData();
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
          <p className="mb-5" dangerouslySetInnerHTML={{ __html: data.content }} />
          <button className="btn btn-info">I do nothing</button>
        </div>
      </div>
    </div>
  );
}
