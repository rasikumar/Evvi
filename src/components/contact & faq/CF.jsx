import { Link } from "react-router-dom";
import { About_Full } from "../../constant";

const content = About_Full[3];

const Cf = () => {
  return (
    <div className="flex flex-col items-center max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-10 max-mobile:gap-5 relative">
        <h2 className="text-5xl font-medium max-tablet:text-3xl">{content.header}</h2>
        <p className="max-tablet:text-sm">{content.paragraph}</p>
        <p className="max-tablet:text-sm">Connect with us today, and let&apos;s create something great!</p>
        <Link to={content.url} className="btn-primary">{content.btn}</Link>
    </div>
  )
}

export default Cf;
