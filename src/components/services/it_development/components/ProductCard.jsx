import { star } from "../assets/icons";

// eslint-disable-next-line react/prop-types
function ProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-col w-fit  justify-center">
      <img src={imgURL} className="w-[18rem] max-tablet:w-[15rem] flex items-center justify-center mr-4" />
      <div className="flex">
        <img
          src={star}
          className="mt-3"
          alt="rating icon"
          width={24}
          height={24}
        />
        <p className="mt-5 p-1 w-fit"> 4.5</p>
      </div>
      <h3 className="w-fit">{name}</h3>
      <p className="w-fit">{price}</p>
    </div>
  );
}

export default ProductCard;
