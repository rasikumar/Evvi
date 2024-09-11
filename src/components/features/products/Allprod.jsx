import { Helmet } from "react-helmet-async"
import Iyyan from "./iyyan/Iyyan"
const Allproduct = () => {
  return (
    <>
    <Helmet>
      <title>Features Evvisolutions</title>
      <meta
        name="description"
        content="Evvi Solutions offers a wide range of products to cater to your business needs."
      />
    </Helmet>
      <Iyyan/>
    </>
  )
}

export default Allproduct