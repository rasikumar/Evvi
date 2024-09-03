// /* eslint-disable react/prop-types */
import APIendpoints from "./APIendpoints";
import { useState } from "react";

// const BlogPage = ({ interval = 1000 }) => {
//   const [joke, setJoke] = useState("");

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       async function getApi() {
//         try {
//           const joke = await APIendpoints.get("/quotes");
//           setJoke(joke.data[0].quote);
//         } catch (error) {
//           console.log(error);
//         }
//       }

//       getApi();
//     }, interval);
//     return () => clearInterval(intervalId);
//   }, [interval]);

//   return (
//     <div>
//       Blog Page
//       <div>
//         {joke ? (
//           <div>
//             <h2>Random Joke:</h2>
//             <p>{joke}</p>
//           </div>
//         ) : (
//           "loading"
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogPage;


const BlogPage = () => {
    const [ joke, setJoke ] = useState("1")

   const jokes = async () => {
    try{
        const api = await APIendpoints.get("/quotes");
        setJoke(api.data[0].quote);
        
   } catch(error){
        console.error(error);
   }
   }

  return (
    <div>
      <button onClick={jokes}>Get A Quote from Serires</button>
      <p>{joke}</p>
    </div>
  )
}

export default BlogPage
