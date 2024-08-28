import { offer } from "../assets/images";

function SpecialOffer() {
  return (
    <section className="flex justify-between items-center max-tablet:flex-col gap-10 w-full max-mobile:px-7 px-16 py-5 mb-10">
      <div className="w-[50%] max-tablet:w-full">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div className="flex flex-col w-[50%] max-tablet:w-full">
        <h2 className="text-4xl font-sans max-tablet:text-2xl max-mobile:text-lg font-bold">
          <span className="">Exclusive </span>
          Offer
        </h2>
        <p className="mt-4 max-mobile:text-sm">
      Get 20% off on our digital transformation packages for a limited time. Elevate your business and seize this opportunity to enhance your digital presence.
        </p>
        {/* <p className="mt-6 max-mobile:text-sm">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p> */}
        <button className="btn-primary w-[35%] max-mobile:w-[40%] mt-4">Claim Your Offer</button>
      </div>
    </section>
  );
}

export default SpecialOffer;
