import React, { useState } from 'react';

export default function Demo9() {
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState([]); // empty list

  const handleChange = (e) => {
    setProduct(e.target.value);
  };

  const addProduct = () => {
    if (product.trim().length === 0) {
      alert("Enter Product Name");
      return;
    }

    setProductList([...productList, product]);
    setProduct(""); // clear input after adding
  };

  const deleteProduct = (indexToDelete) => {
    setProductList(productList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2><u>Dynamic Table</u></h2>
      <h3><u>Product List Demo</u></h3>

      Product Name:
      <input
        type="text"
        value={product}       // controlled input
        onChange={handleChange}
      />
      <button onClick={addProduct}>Add</button>

      <br />

      <table border={1} bgcolor="lightgrey">
        <thead>
          <tr>
            <th>SL.NO</th>
            <th>Product Names</th>
            <th>Action</th> {/* column for delete button */}
          </tr>
        </thead>
        <tbody>
          {productList.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value}</td>
              <td>
                <button onClick={() => deleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr color="black" />
    </div>
  );
}