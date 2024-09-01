// eslint-disable-next-line react/prop-types
function ProductCard({ imgURL, name, price }) {
  return (
    <div className="relative flex flex-col w-fit justify-center group">
      <img
        src={imgURL}
        className="w-[18rem] max-tablet:w-[15rem] flex items-center justify-center mr-4 group-hover:opacity-10 transition-opacity duration-300 ease-in-out rounded-xl"
        alt={name}
      />
      <h3 className="w-fit text-base px-2 text-center m-auto font-medium text-t-primary mt-2">{name}</h3>

      {/* Overlay Content */}
      <div className="absolute inset-0 bottom-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <p className="text-t-primary text-sm text-center p-2 font-medium leading-snug">{price}</p>
      </div>
    </div>
  );
} 

export default ProductCard;
