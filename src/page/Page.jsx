import React, { useEffect, useState } from 'react';
import '../page/Page.css';

function Page() {

  const [items,setItems]= useState([]);
  const apiGet = async()=>{
    const responce= await fetch('https://dummyjson.com/products');
    
    const data=await responce.json();
    setItems(data.products)
    };

    useEffect(()=>{
      apiGet();
    },[]);
  

  return (
    <div className='innerElement'>
      <h1>List Table</h1>

      <table className="table">
      <thead>
        <tr>
          <th scope="col">Item no</th>
          <th scope="col">Product Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item)=>{
          return(
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.price}</td>
          </tr>
        )})
      }

        
        
      </tbody>
      </table>
    </div>
  )
}

export default Page
