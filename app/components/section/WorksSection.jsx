import WorkCards from "../cards/WorkCards";

export default function WorkSection({ data }) {
  return (
    <>
      <div
        id="Works"
        className="flex flex-row flex-wrap justify-evenly overflow-x-scroll overflow-hidden p-10"
      >
        {data.map((data) => (
          <WorkCards
            key={data.path}
            path={data.path}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </>
  );
}
