import React from 'react'
import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

function Breadcrum(props) {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME 👉 SHOP 👉 {product.category} 👉 {product.name}
        {/* HOME<img style={{width:"2px",height:'2px'}} src={arrow_icon} alt=''/> SHOP<img style={{width:"2px",height:'2px'}} src={arrow_icon} alt=''/> {product.category}<img style={{width:"2px",height:'2px'}} src={arrow_icon} alt=''/>{product.name} */}
    </div>
  )
}

export default Breadcrum