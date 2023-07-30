import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { blogData } from '../data';


const Blog = () => {
     const {title}=useParams();

     const [bodyData,setBodyData]=useState("");

     useEffect(()=>{

         const blogdata= blogData.filter((blog)=>blog.title===title);
     //     console.log(blogData)
         setBodyData(blogdata[0].body)
     //     console.log(blogData[0])

     },[])



  return (
    <div>
        <h1>{title} Page</h1>
        <p>{bodyData.slice(0,500)}</p>
    </div>
  )
}

export default Blog
