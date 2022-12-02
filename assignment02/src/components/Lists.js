import { useState, useEffect } from "react";
import './Lists.css'

const Lists= ()=>{
    const [universities,setUniversities]=useState([])

  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=INdia")
    .then(res=> res.json()
    .then(data=>setUniversities(data)))
  }, [])
  
  return (
    <div className="lists">
    <h1>Universities in India</h1>
    {universities &&
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Domain</th>
      <th scope="col">Name</th>
      <th scope="col">State</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
  {universities.map(university=>{return(
    <tr>
      <th scope="row">{university.domains}</th>
      <td>{university.name}</td>
      <td>{university["state-province"]}</td>
      <td>{university.web_pages}</td>
    </tr>
  )})}
   
   
  </tbody>
</table>
    }
  </div> 
  )  
}

export default Lists