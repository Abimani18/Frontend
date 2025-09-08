import React from "react";
import HomeLandingData from "../../../../../data/homeData/homeLandingData";
import "./HomeLanding.css";
import { connect } from 'react-redux';
import {updateData} from '../../../../../redux/action/dataAction'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const HomeLanding = ({ data, updateData })  => {
  console.log(data)
  const {
    title,
    spanText,
    paragraph,
    buttonText,
    imageUrl,
    imageAlt,
    demoLink,
  } = HomeLandingData;

  return (
    // <div classNameName="HomeLanding-main">
    //   <div classNameName="HomeLanding-col">
    //     <div classNameName="HomeLanding-image-container">
    //       <img src={imageUrl} alt={imageAlt} />
    //     </div>
    //   </div>
    //   <div classNameName="HomeLanding-col">
    //     <div classNameName="HomeLanding-text-container ">
    //       <h1>{title}</h1> <span>{spanText}</span> <br />
    //       <br />
    //       <p classNameName="HomeLanding-praragraph">{paragraph}</p>
    //       <br />
    //       <div classNameName="HomeLanding-button-container">
    //         <a classNameName="HomeLanding-button" href={demoLink}>
    //           {buttonText}
    //         </a>
    //         <br />
    //         <br />
    //       </div>
    //       <div classNameName="HomeLanding-card-container ">
    //         {HomeLandingData.technologies.map((tech, index) => (
    //           <div key={index} classNameName="HomeLanding-card">
    //             <h2 classNameName="fs-5">{tech.techTitle}</h2>
    //             <p classNameName="fs-6">{tech.techDescription}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="container landing-container ">
    //   <div className="row landing-row d-flex justify-content-evenly align-items-center">
    //     <div className="col-md-4">
    //       <div className="card  text-white mt-4  d-flex justify-content-center align-items-center ms-5 mt-5 rounded">
    //         <img src="https://tse1.mm.bing.net/th/id/OIP.GCy_6SInUjrt32PquGcWNgHaEz?pid=Api&P=0&h=180" className="card-img w-100" alt="..." style={{height:"350px"}}/>
    //         <div className="card-img-overlay d-flex justifi-content-center align-items-center ms-5">
    //           {/* <h5 className="card-title text-center ms-5">Card title</h5> */}
    //         </div>
    //       </div>
    //       <div className="d-flex justify-content-evenly align-items-center btn btn-outline-primary ms-4 mt-3 p-2 rounded-4 w-100">
    //          <a>Get Started</a>
    //            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    //       </div>
    //     </div>
    //     <div className="col-md-4 d-flex flex-direction-column justify-content-center align-items-center flex-wrap">
    //        <p className="d-flex justify-content-center w-100 mb-0">Customer Review</p>
    //         <div className="icon-container mt-3 mb-5">
    //              <img src="https://tse1.mm.bing.net/th/id/OIP.hIuJO0PIE2kRkLgyTLis5AHaFj?pid=Api&P=0&h=180" className="rounded-circle" style={{width:"30px",height:"30px"}}/>
    //              <img src="https://tse2.mm.bing.net/th/id/OIP.FAoKcNkInL_Tl4DgUgAnEQHaFK?pid=Api&P=0&h=180" className="rounded-circle" style={{width:"30px",height:"30px"}}/>
    //              <img src="https://tse4.mm.bing.net/th/id/OIP.4FLGjWD7kEK8CNrRHP4iAAHaE7?pid=Api&P=0&h=180" className="rounded-circle" style={{width:"30px",height:"30px"}}/>
    //              <img src="https://tse1.mm.bing.net/th/id/OIP.j8PD7EReqVYh8wEu9ES9CAHaHa?pid=Api&P=0&h=180" className="rounded-circle" style={{width:"30px",height:"30px"}}/>
    //              {/* <p className="rounded-circle bg-primary d-flex align-items-center justify-content-center "  style={{width:"30px",height:"30px"}}>+</p> */}
    //         </div>
    //         <p className="d-flex justify-content-center align-items-center  mb-3"> Writing emails, articles, blog posts Real-time multilingual support Fixing grammar and style Siri, Alexa, Google Assistant – respond to commands, set reminders, etc.</p>
    //         <div className="d-flex justify-content-center gap-3 align-items-center btn btn-outline-primary ms-4 mt-5  rounded-4 w-50">
    //          <a>Try Demo Now</a>
    //          <FaArrowRight size={20} style={{backgroundColor:"white"}} className="p-1 rounded-circle text-primary"/>
    //       </div>
    //     </div>
    //      <div className="col-md-4 img-two">
    //         <img src="/mikky.png" className="card-img rounded-4 w-100" alt="..." style={{height:"400px"}} />
    //     </div>
    //   </div>
    // </div>
  <div className="container-fluid landing-container" style={{marginLeft:"-50px"}}>
  <div className="row align-items-center text-center">
    
    {/* Column 1 */}
    <div className="col-md-4 d-flex flex-column align-items-center">
      <div className="ms-5 text-white mt-4 rounded-4 overflow-hidden">
        <img
          src="/logoMobile.png"
          className="card-img "
          alt="..."
          style={{ height: "350px",width:"250px" }}
        />
      </div>
      {/* <button className=" btn-outline-green mt-3 ms-5 p-2 rounded-4 w-75 d-flex justify-content-center align-items-center gap-2">
        Get Started
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button> */}
    </div>

    {/* Column 2 */}
    <div className="col-md-4 d-flex flex-column align-items-center">
      <p className="mb-0">Customer Review</p>
      <div className="icon-container mt-3 mb-4 d-flex  rounded-pill p-1 w-auto" style={{backgroundColor:"gray"}}>
        {[
          "https://tse1.mm.bing.net/th/id/OIP.hIuJO0PIE2kRkLgyTLis5AHaFj?pid=Api&P=0&h=180",
          "https://tse2.mm.bing.net/th/id/OIP.FAoKcNkInL_Tl4DgUgAnEQHaFK?pid=Api&P=0&h=180",
          "https://tse4.mm.bing.net/th/id/OIP.4FLGjWD7kEK8CNrRHP4iAAHaE7?pid=Api&P=0&h=180",
          "https://tse1.mm.bing.net/th/id/OIP.j8PD7EReqVYh8wEu9ES9CAHaHa?pid=Api&P=0&h=180",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            className="rounded-circle"
            style={{ width: "30px", height: "30px", objectFit: "cover" }}
          />
        ))}
      </div>
      <p className="mb-3 px-3">
        Writing emails, articles, blog posts. Real-time multilingual support.
        Fixing grammar and style. Siri, Alexa, Google Assistant – respond to
        commands, set reminders, etc.
      </p>
      {/* <div className="demo-button w-100">
         <button className="btn-outline-green w-100 shadow-lg">
        Try Demo Now
        <FaArrowUpRightFromSquare size={20}  />
      </button>
      </div> */}
       <button className="discover-btn">
      <span className="btn-text">DISCOVER</span>
      <span className="btn-icon">
        <BsArrowUpRightCircleFill size={30}/>
      </span>
    </button>
    </div>

    {/* Column 3 */}
    <div className="col-md-4 ">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
         {/* <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://tse2.mm.bing.net/th/id/OIP.Ks6AoH9D0qTZuhlMBypSjAHaHa?pid=Api&P=0&h=180" className="d-block   carosel-image rounded-5" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tse4.mm.bing.net/th/id/OIP.BXWCgzXZU6_Q_Kb5i_HKMgHaEK?pid=Api&P=0&h=180" className="d-block  carosel-image rounded-5" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://tse4.mm.bing.net/th/id/OIP.q4nPctlpbz_bg1opHpqsIgHaEK?pid=Api&P=0&h=180" className="d-block  carosel-image rounded-5" alt="..."/>
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
    </div>

  </div>
</div>


  );
};




const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  updateData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeLanding);
