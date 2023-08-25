import React from 'react';
import {Archive} from 'react-bootstrap-icons';
import { useCart, useDispatchCart } from '../components/ContextReducer';

const Cart = () => {
  let data = useCart();
  const dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 text-center fs-3 text-white'>The Cart is Empty!</div>
      </div>
    )
  }
  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem('userEmail');
    const response = await fetch('https://go-food-liard.vercel.app/api/orderData',{
      method:'POST',
      headers:
      {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        order_data:data,
        email:userEmail,
        order_date:new Date().toDateString(),
      })
    })
    if(response.status===200){
      dispatch({type:"DROP"});
    }
  }

  let totalPrice = data.reduce((total, food)=> total+food.price, 0)
  return (
     <div >
      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md text-white' >
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col' className='text-success'>#</th>
              <th scope='col' className='text-success'>Name</th>
              <th scope='col' className='text-success'>Quantity</th>
              <th scope='col' className='text-success'>Option</th>
              <th scope='col' className='text-success'>Amount</th>
              <th scope='col' className='text-success'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><Archive onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}> Check Out </button>
        </div>
      </div>


      </div>
    
  )
}

export default Cart;
