import Contact from '../contact & faq/Contact'
import Faq from '../contact & faq/Faq'

const CF = () => {
  return (
    <div className="flex items-center max-tablet:flex-col gap-4 w-full p-14 max-tablet:p-5 max-tablet:gap-10 max-mobile:gap-5 relative">
      <Contact/>
      <Faq/>
    </div>
  )
}

export default CF;
