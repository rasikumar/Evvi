import { Link } from "react-router-dom";
import { About_Full } from "../../constant";

const content = About_Full[3];


const Join = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-mobile:px-10 py-10 px-24 items-center m-auto">
        <h1 className="text-5xl font-medium max-tablet:text-3xl">{content.header}</h1>
        <p className="max-tablet:text-sm">{content.paragraph}</p>
        <Link to={content.url} className="btn-primary">{content.btn}</Link>
    </div>
  )
}

export default Join