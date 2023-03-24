import React from 'react'
import {AiOutlineEye} from "react-icons/ai"
import {Link} from "react-router-dom"
const MyOrders = () => {
    const arr = [1,2,3,4,5]
  return (
    <section className='tableClass'>
        <main>
            <table>
                <thead>
                <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
                </thead>
                <tbody>
                   {
                    arr.map((i)=>(
                        <tr key = {i}>
                            <td>{i}</td>
                            <td>{i}</td>
                            <td>{i}</td>
                            <td>{i}</td>
                            <td>{i}</td>
                            <td>
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
                        </tr>
                    ))
                   }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default MyOrders