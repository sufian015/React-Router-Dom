import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>This is contact page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, placeat ipsum iure non eaque recusandae ratione fugiat? Sint iusto error qui alias. Amet quae dignissimos accusamus aliquid quos consequatur exercitationem rerum voluptatibus? Totam voluptatem non dignissimos, consectetur error at corrupti?</p>

      <button onClick={()=>{
        navigate("/")
      }}>Go To Home Page</button>
    
    </div>
  )
}

export default Contact
