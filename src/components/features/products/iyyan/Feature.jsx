import { IyyanContent } from "../constant/constant"


const Feature = () => {

  const { heading, subheading } = IyyanContent [1];
  const { list } = IyyanContent [1];

  return (
    <div>
      <h1>{heading}</h1>
      <h1>{subheading}</h1>
      <h1>{list}</h1>
    </div>
  )
}

export default Feature