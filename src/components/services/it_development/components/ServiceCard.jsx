// eslint-disable-next-line react/prop-types
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="serviceCardIT flex w-full flex-col p-10 max-mobile:px-4 max-mobile:py-6 bg-t-secondary hover:bg-t-primary gap-4 rounded-2xl transition-all">
      <div className="serviceCards w-12 h-12 flex justify-center items-center bg-white rounded-full">
        <img src={imgURL} alt="Service_card" width={28} height={28} />
      </div>
      <div>
        <h2 className="font-sans text-2xl max-tablet:text-xl max-mobile:text-base texts">{label}</h2>
        <p className="font-montserrat texts">{subtext}</p>
      </div>
    </div>
  );
}; 

export default ServiceCard;
