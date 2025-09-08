import React from 'react'

const Cms = () => {
  return (
    <div className="container" style={{marginTop:"100px",marginBottom:"20px"}}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="card mb-3 shadow p-4 mb-5 bg-body-tertiary rounded-4" style={{maxWidth: "500px",height:"300px"}}>
          <div className="row g-0">
            <div className="col-md-6">
              <img src="https://tse4.mm.bing.net/th?id=OIP.oCFE7mmj1dyHYum_Ls3SEQHaGb&pid=Api&P=0&h=180" className="img-fluid rounded-start w-100 " style={{height:"250px"}}  alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">CMS</h5>
                <p className="card-text">
                   Content Management System for managing website and internal content
                </p>
                <p className="card-text">
                 <a href="#" className='btn btn-primary'>Visit</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cms