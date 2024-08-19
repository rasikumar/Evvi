

// eslint-disable-next-line react/prop-types
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      // eslint-disable-next-line react/prop-types
      if (bigShoeImg !== imgURL.bigShoe) {
        // eslint-disable-next-line react/prop-types
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          // eslint-disable-next-line react/prop-types
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-20 sm:h-20 rounded-xl max-sm:p-4'>
          <img
            // eslint-disable-next-line react/prop-types
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  