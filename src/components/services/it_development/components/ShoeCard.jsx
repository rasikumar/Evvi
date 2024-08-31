/* eslint-disable react/prop-types */


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
            ? "border-none rounded-xl p-1 bg-t-secondary "
            : "border-none"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover rounded-xl '>
          <video src={imgURL.thumbnail} autoPlay muted loop className="object-cover rounded-xl transition delay-100"></video>
        </div>
      </div>
    );
  };
  
  export default ShoeCard;
  