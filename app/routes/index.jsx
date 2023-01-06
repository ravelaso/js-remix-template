export default function Index() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
              If you see this hero section, you have successfully installed the template.
              This is comming from prisma schema and the data is being fetched from the database.
              Make sure to edit the schema and add your own data using the seed script!
          </p>
          <button className="btn btn-primary">I do nothing</button>
        </div>
      </div>
    </div>
  );
}
