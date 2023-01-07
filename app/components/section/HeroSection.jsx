import { marked } from "marked";
export default function HeroSection({data}) {
  return (
    <div
      id={data.title} 
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1  className="mb-5 text-5xl font-bold">{data.title}</h1>
          <pre className="mb-5 prose" dangerouslySetInnerHTML={{ __html: marked(data.content) }} />
          <button className="btn btn-info">I do nothing</button>
        </div>
      </div>
    </div>
  );
}
