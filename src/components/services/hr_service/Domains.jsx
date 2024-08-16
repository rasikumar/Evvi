import { HR_Content } from "../constant"


const Domains = () => {
  const { title, description, description1, list } = HR_Content[2]

  return (
    <div className="flex">
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="font-medium">{description}</p>
        <p className="font-medium">{description1}</p>
      </div>
      <div>
        {list.map(i => (
          <div key={i.id}>
            <h2 className="font-semibold">{i.title}</h2>
            {i.items.map(j =>(
              <div key={j.id}>
                <ul>
                  <li>
                    <img src={j.img} alt="" className="w-32"/>
                    <p>{j.content}</p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Domains
