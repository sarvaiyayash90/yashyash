import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact_Us = () => {

    return ( 
        <div className="container-fluid p-0">

            <div className="contact-section-nav">
                <div className="contact-section-nav-text">
                    <h1>Contact US</h1>
                    <p>Infilon Technologies Pvt. Ltd.</p>
                </div>
            </div>

            <div id="contact-section-map">
                <div id="contact-section-map-left">
                    <img src="/Images/Contact_us/map/map1.png" />
                    <h4 id="text-map">Infilon Technologies Pvt. Ltd.</h4>
                    <div className="contact-section-map-left-address">
                        <p className="mt-3" style={{color: '#000',Textalign: 'center'}}><i class="far fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;407, Sakar 2, Ellis Bridge, Ashram Road, Ahmedabad, Gujarat,India – 380006</p>
                        <p><i class="fa fa-map-pin" ></i>&nbsp;&nbsp;&nbsp;<a href="https://www.google.com/maps/place/Infilon+Technologies+Pvt+Ltd/@23.03523,72.563,13z/data=!4m2!3m1!1s0x0:0xbdcde14274fb0096?hl=en-US" target="_blank" rel="noopener">How to Reach us</a></p>
                        <p id="map-sales">Sales:</p>
                        <p><i class="far fa-phone-alt"></i>&nbsp;<a href="tel:+91-95100 16999">+91-95100 16999</a></p>
                        <p><i class="far fa-phone-alt"></i>&nbsp;<a href="tel:+91-99044 69794">+91-99044 69794</a></p>
                        <p id="map-sales">Support:</p>
                        <p><i class="far fa-phone-alt"></i>&nbsp;<a href="tel:+91 79 4009 1208">+91 79 4009 1208</a></p>
                        <p><i class="far fa-phone-alt"></i>&nbsp;<a href="tel:+91 9099 830 350">+91 9099 830 350</a></p>
                        <p><i class="fab fa-whatsapp"></i>&nbsp;<a href="tel:+91 8000 230 350">+91 8000 230 350</a></p>
                        <p><i class="fal fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:info@infilon.com">info@infilon.com</a></p>
                        <p><i class="fab fa-skype"></i>&nbsp;&nbsp;<a href="skype:infilon?call">infilon</a></p>
                        <p id="map-sales">Career:</p>
                        <p><i class="fa fa-book"></i>&nbsp;&nbsp;<a href="/Career" style={{textDecoration:'none'}} >Click Here to Join us</a></p>
                    </div>
                </div>
                <div id="contact-section-map-right">
                    <img src="/Images/Contact_us/map/map2.png" />
                    <h4 id="text-map">Media Clock</h4>
                    <div className="contact-section-map-right-address">
                        <p className="mt-3" style={{color: '#000',Textalign: 'center'}}><i class="far fa-map-marker-alt"></i>&nbsp;&nbsp;392 A St Kilda Road, St Kilda VIC 3182</p>
                        <p><i class="fa fa-map-pin"></i>&nbsp;&nbsp;&nbsp;<a href="https://www.google.com/maps?ll=-37.830949,144.964841&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=IN&amp;mapclient=embed&amp;q=1/222+Kings+Way+South+Melbourne+VIC+3205+Australia" target="_blank" rel="noopener">How to Reach us</a></p>
                        <p><i class="far fa-phone-alt"></i>&nbsp;<a href="tel:+61 3 9016 4442">+61 3 9016 4442</a></p>
                        <p><i class="far fa-phone-alt"></i>&nbsp;<a href="tel:+61 410 576 590">+61 410 576 590</a></p>
                        <p><i class="fal fa-envelope"></i>&nbsp;&nbsp;<a href="mailto:info@mediaclock.com.au">info@mediaclock.com.au</a></p>

                    </div>
                </div>
            </div>

            <h1 id="find" className="mt-3">Find Us On Map</h1>
            <div className="find-map mt-5">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.017872460409!2d72.5703573149192!3d23.02311598495282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f466a8194f%3A0xbdcde14274fb0096!2sInfilon%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1614169278523!5m2!1sen!2sin" width="100%" height="100%" style={{border:'0',allowfullscreen:'',loading:'lazy'}}></iframe>
            </div>

        </div>
    );
}
 
export default Contact_Us;