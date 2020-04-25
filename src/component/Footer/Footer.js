import React from 'react';
// import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import facebook from '../../img/facebook.png';
import vk from '../../img/vk.png';
import instagram from '../../img/instagram.png';


const Footer = (props) => {
  return (
    <footer className="page-footer font-small blue-grey lighten-5" style={{backgroundColor:"#f5f5f5"}}>
      <div style={{backgroundColor:"#f5f5f5"}}>
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0"  style={{color:"#2a2a2a"}}>Get connected with us on social networks!</h6>
            </div>
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <NavLink to="/profile"  className="ml-3"> <img src={facebook} alt='facebook'/></NavLink>
              <NavLink to="/profile" className="ml-3"><img src={vk} alt='vk'/></NavLink>
              <NavLink to="/profile" className="ml-3"><img src={instagram} alt='instagram'/></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center text-md-left mt-3" >
        <div className="row mt-3 dark-grey-text">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-1">
            <h6 className="text-uppercase font-weight-bold" style={{color:"#6a6a6a"}}>EXPLORE</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width:" 80px" }}/>
           <p><NavLink to='/profile' >What We Do</NavLink></p> 
            <p><NavLink to='/profile' >Funding</NavLink></p>
            <p><NavLink to='/profile'>GoFundMe</NavLink></p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold" style={{color:"#6a6a6a"}}>ABOUT</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}} />
            <p><NavLink className="dark-grey-text" to='/profile'>About Us</NavLink> </p>
            <p><NavLink className="dark-grey-text" to='/profile'>Blog</NavLink></p>
            <p><NavLink className="dark-grey-text" to='/profile'>Trust & Safety</NavLink></p>
            <p><NavLink className="dark-grey-text" to='/profile'>Help & Support</NavLink> </p>
            <p><NavLink className="dark-grey-text" to='/profile'>Press</NavLink> </p>
            <p><NavLink className="dark-grey-text" to='/profile'>Careers</NavLink> </p>
            <p><NavLink className="dark-grey-text" to='/profile'>Contact</NavLink> </p>

          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold" style={{color:"#6a6a6a"}}>ENTREPRENEURS</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "150px" }}/>
            <p><NavLink className="dark-grey-text" to='/profile'>How it Works</NavLink></p>
            <p><NavLink className="dark-grey-text" to='/profile'>Indiegogo vs. Kickstarter</NavLink></p>
            <p> <NavLink className="dark-grey-text" to='/profile'>Education Center</NavLink></p>
            <p><NavLink className="dark-grey-text" to='/profile'>Experts Directory</NavLink></p>
            <p><NavLink className="dark-grey-text" to='/profile'>Fees</NavLink> </p>
            <p><NavLink className="dark-grey-text" to='/profile'>Enterprise</NavLink> </p>
            <p><NavLink className="dark-grey-text" to='/profile'>China</NavLink> </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold" style={{color:"#6a6a6a"}}>CONTACT</h6>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "80px"}} />
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center text-black-50 py-3">© 2020 Indiegogo, Inc.All Rights Reserved
    {/* <NavLink className="dark-grey-text" to="/profile"> Inc</NavLink> */}
      </div>
    </footer>
  )
};



export default Footer;