import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import './Subtotal.css'

function Checkout() {
      return (
        <div className="checkout">
            <div className="checkout_left">   
             <div>
                 <h2 className="checkouttitle">Your shopping basket is empty.</h2>
                 <p>You have no items in your basket.  Add One.</p>
             </div>
            </div>
            <div className="checkout__right">
                 <Subtotal/>
            </div>
        </div>
      )
}

export default Checkout