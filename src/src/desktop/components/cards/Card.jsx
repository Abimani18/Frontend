import React from 'react'
import './Card.css'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
const Card = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center " style={{marginTop:"100px"}}>
        <div className='card  p-3 bg-danger'>
        <div className=" d-flex justify-content-center ms-5 align-tems-center">
          <img src="https://tse1.mm.bing.net/th/id/OIP.Q9lzrDNKsteXbhTBHHltJwHaHa?pid=Api&P=0&h=180" className='ms-5' style={{height:"40px",width:"40px"}}/>
        </div>
        <div className="card-body text-white mt-5">
          <p className='mt-5'>Your Partner in <br /> AI-Driven <br /> Transformation</p>
          <div className="btn btn-dark">Get Started</div>
        </div>
    </div>
         <div className='cards'>
           <button className='btn btn-dark h-50 w-50 p-3 bg-dark text-white mt-3 d-flex justify-content-center align-items-center' >
             <FaArrowUpRightFromSquare/>
           </button>
         </div>
    </div>
  )
}

export default Card