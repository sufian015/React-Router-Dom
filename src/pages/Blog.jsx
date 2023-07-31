import React  from 'react'
import { useParams,useLocation } from 'react-router-dom'

import { blogData } from '../data';


const Blog = () => {
     const {title}=useParams();

     const location=useLocation();
     console.log(location)

    //  const [bodyData,setBodyData]=useState("");

    //  useEffect(()=>{

    //      const blogdata= blogData.filter((blog)=>blog.title===title);
    //  //     console.log(blogData)
    //      setBodyData(blogdata[0].body)
    //  //     console.log(blogData[0])

    //  },[])



  return (
    <div>
        <h1>{title} Page</h1>
        <p>{location.state.body.slice(0,500)}</p>
    </div>
  )
}

export default Blog
