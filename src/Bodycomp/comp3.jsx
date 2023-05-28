import React from 'react';
import './comp3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from "../images/img2.png";
import img1 from"../images/img1.png";
import img0 from"../images/img0.png";
import icon1 from"../images/Icon1.png";
import icon2 from"../images/Icon2.png";
import icon3 from"../images/Icon3.png";
const comp3 = () => {
    return (
    <div className="Comp3" >
        <div class="flex-container" className="container" id="flex">
            <br/>
            <div class="flex-child" className="first-row" id="hc0">
                <p className="subh">Features</p>
            </div>
            <div className='second-row'>
                <p className="hd">Laundry App Features</p>
            </div>
            <div class="flex-child" className="first-column" id="ic0">
                <div>
                    <img src={img0}  alt="phone app, Hello user"></img>
                </div>
            </div>
            <div class="flex-child" className="third-row" id="bc0">
                <dl>
                <dt className="ftN"><img src={icon1} alt=''></img>Feature Name</dt>
                    <dd className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                <dt className="ftN"><img src={icon2} alt=''></img>Feature Name</dt>
                    <dd className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                <dt className="ftN"><img src={icon3} alt=''></img>Feature Name</dt>
                    <dd className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                </dl>
            </div>
        </div>
        <div class="flex-container mid" className='mcontainer' id="flex" >
            <br/>
            <div className='mfirst-row' id="hc1">
                <p className="subh">Choose From Different Stores</p>
            </div>
            <div className='msecond-row'>
             <p className="hd" >Laundry Stores Near You</p>
            </div>
            <div class="flex-child" className='msecond-column' id="ic1">
                <div class="media">
                    <img src={img1}  alt="phone app, list search"></img>
                </div>
            </div>  
            <div class="flex-child" className='mthird-row' id="bc1">
                <dl>
                    <dt className="ftN"><img src={icon1} alt=''></img>Feature Name</dt>
                        <dd className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                    <dt className="ftN"><img src={icon2} alt=''></img>Feature Name</dt>
                        <dd className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                    <dt className="ftN"><img src={icon3} alt=''></img>Feature Name</dt>
                        <dd className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</dd>
                </dl>
            </div>
        </div>
        <div class="flex-container" className="container" id="flex">
            <br/>
            <div class="flex-child" className='first-row' id="hc2">
                <p className="subh">Payment</p>
            </div>
            <div className='second-row'>
                <p className="hd">Quick Payment</p>
            </div>
            <div class="flex-child" className='first-column' id="ic2">
                <div className="media">
                    <img src={img2}  alt="phone app with visa card"></img>
                </div>
            </div>
            <div class="flex-child" className='third-row' id="bc2">
                <div class="info2">            
                    <p className="esy" style={{ lineHeight: '28px', fontWeight: 600 }}>Easy payment mode</p>
                    <p className="para" style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <ul>
                    <li className="para" style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li className="para" style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li className="para" style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}
export default comp3;