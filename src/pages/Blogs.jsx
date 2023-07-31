import React, { useState } from 'react'

import { blogData } from '../data'
import { Link } from 'react-router-dom'



const Blogs = () => {

  const [blogs,setBlogs]=useState(blogData)
  // console.log(blogs)

  const truncateString=(str,num)=>{
    if(str.length > num){
      return str.slice(0,num)+"..."
    }else{
      return str;
    }
  }
  
  


  return (
    <div>

       <h2>Blog-Page</h2>

       <section>

        {blogs.map((blog)=>{
          // console.log(blog)

          const {id,title,body}=blog;
          
          return <article key={id}>
                <h3>{title}</h3>
                <p>{truncateString(body,100)}</p>
                <Link to={title} state={{id,title,body}}>Learn more</Link>

          </article>
        })}


       </section>


    </div>
    
  )
}

export default Blogs
