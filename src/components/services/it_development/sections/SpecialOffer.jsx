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
        Looking to Outsource Your IT Needs ?
        </h2>
        <p className="mt-4 max-mobile:text-sm">
        Partner with us to handle your web design, app development, and cloud support needs efficiently. Outsource your IT requirements to our expert team and focus on what you do best while we take care of the technology.
        </p>
        <p className="mt-6 max-mobile:text-sm">
        Get in touch today to explore how we can support your next project and drive your business forward.
        </p>
        <button className="btn-primary w-[25%] max-mobile:w-[40%] mt-4">Contact Us</button>
      </div>
    </section>
  );
}

export default SpecialOffer;
