export default function WorkCards({path,title,content}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl items-center">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-center">{content}</p>
        <div className="card-actions ">
          <button className="btn btn-primary ">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
