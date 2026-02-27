import React, { useState } from 'react'

export default function Demo9() {

    const [product,setProduct] = useState("")
    const [productlist,setProductList] =useState([]) //empty list

    const handleChange=(e)=>{

        setProduct(e.target.value)
        /*
        e means event (any name can be given for an event)
        e.target means specific input field
        e,target.value means value inputed in the input field
        */
    }

    const addProduct= ()=>{

        if(product.length==0){
            alert("Enter Product Name")
        }
        else {
         setProductList([...productlist,product])
        }
        
    }

  return (

    <div>
      <h2><u>Dynamic Table</u></h2>
        <h3><u>Product List Demo</u></h3>
        Product Name
        <input type="text" onChange={handleChange} />
        <button onClick={addProduct} >Add</button>

        <br/>

        <table border={1} bgcolor="lightgrey">
            <tr>
                <th> SL.NO</th>
                <th>Product Names</th>
            </tr>
            {
              productlist.map( (value,index)=> (

                <tr key={index}>

                  <td>{index+1}</td>
                  <td> {value} </td>

                </tr>

              ))            

            }
        </table>
            <hr color='black'></hr>
    </div>
  )
}