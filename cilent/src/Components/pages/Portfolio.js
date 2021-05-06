import React, { useState, useEffect } from 'react'

const Portfolio = () => {

    useEffect(()=>{
        const $ = window.$;
        $('#android1,#android2,#android3,#android4,#android5,#android6,#android7,#android8,#android9,#android10').show();
        $('#React_Native1,#React_Native2,#React_Native3,#React_Native4,#React_Native5,#React_Native6,#React_Native7,#React_Native8').show();
        $('#website1,#website2,#website3,#website4,#website5,#website6,#website7,#website8,#website9,#website10').show();
        $('#website11,#website12,#website13,#website14,#website15,#website16,#website17,#website18,#website19,#website20').show();
        $('#website21,#website22,#website23,#website24,#website25,#website26,#website27,#website28,#website29,#website30').show();
        $('#website31,#website32,#website33,#website34,#website35,#website36,#website37,#website38,#website39,#website40').show();
        $('#website41').show();
        

    })


    const show_all = () =>{
        const $ = window.$;
        $('#android1,#android2,#android3,#android4,#android5,#android6,#android7,#android8,#android9,#android10').show();
        $('#React_Native1,#React_Native2,#React_Native3,#React_Native4,#React_Native5,#React_Native6,#React_Native7,#React_Native8').show();
        $('#website1,#website2,#website3,#website4,#website5,#website6,#website7,#website8,#website9,#website10').show();
        $('#website11,#website12,#website13,#website14,#website15,#website16,#website17,#website18,#website19,#website20').show();
        $('#website21,#website22,#website23,#website24,#website25,#website26,#website27,#website28,#website29,#website30').show();
        $('#website31,#website32,#website33,#website34,#website35,#website36,#website37,#website38,#website39,#website40').show();
        $('#website41').show();
        
    }

    const show_Android = () =>{
        const $ = window.$;
        $('#android1,#android2,#android3,#android4,#android5,#android6,#android7,#android8,#android9,#android10').show();
        $('#React_Native1,#React_Native2,#React_Native3,#React_Native4,#React_Native5,#React_Native6,#React_Native7,#React_Native8').hide();
        $('#website1,#website2,#website3,#website4,#website5,#website6,#website7,#website8,#website9,#website10').hide();
        $('#website11,#website12,#website13,#website14,#website15,#website16,#website17,#website18,#website19,#website20').hide();
        $('#website21,#website22,#website23,#website24,#website25,#website26,#website27,#website28,#website29,#website30').hide();
        $('#website31,#website32,#website33,#website34,#website35,#website36,#website37,#website38,#website39,#website40').hide();
        $('#website41').hide();
        
    }

    const React_Native = () =>{
        const $ = window.$;
        $('#android1,#android2,#android3,#android4,#android5,#android6,#android7,#android8,#android9,#android10').hide();
        $('#React_Native1,#React_Native2,#React_Native3,#React_Native4,#React_Native5,#React_Native6,#React_Native7,#React_Native8').show();
        $('#website1,#website2,#website3,#website4,#website5,#website6,#website7,#website8,#website9,#website10').hide();
        $('#website11,#website12,#website13,#website14,#website15,#website16,#website17,#website18,#website19,#website20').hide();
        $('#website21,#website22,#website23,#website24,#website25,#website26,#website27,#website28,#website29,#website30').hide();
        $('#website31,#website32,#website33,#website34,#website35,#website36,#website37,#website38,#website39,#website40').hide();
        $('#website41').hide();
        
    }

    const Website = () =>{
        const $ = window.$;
        $('#android1,#android2,#android3,#android4,#android5,#android6,#android7,#android8,#android9,#android10').hide();
        $('#React_Native1,#React_Native2,#React_Native3,#React_Native4,#React_Native5,#React_Native6,#React_Native7,#React_Native8').hide();
        $('#website1,#website2,#website3,#website4,#website5,#website6,#website7,#website8,#website9,#website10').show();
        $('#website11,#website12,#website13,#website14,#website15,#website16,#website17,#website18,#website19,#website20').show();
        $('#website21,#website22,#website23,#website24,#website25,#website26,#website27,#website28,#website29,#website30').show();
        $('#website31,#website32,#website33,#website34,#website35,#website36,#website37,#website38,#website39,#website40').show();
        $('#website41').show();
        
    }

    return ( 
        <div className="container-fluid p-0">
            <div className="contact-section-nav">
                <div className="contact-section-nav-text">
                    <h1> Portfolio </h1>
                    <p> Home / Portfolio </p>
                </div>
            </div>

            <div className="portfolio-section">

                <div className="portfolio-section-btn">
                    <button  class="button" exact="true" onClick={() => { show_all() }} >ALL</button>
                    <button  class="button" exact="true" onClick={() => { show_Android() }} >Android</button>
                    <button  class="button" exact="true" onClick={() => { React_Native() }} >React Native</button>
                    <button  class="button" exact="true" onClick={() => { Website() }} >Website</button>
                </div>

                <div className="row portfolio-section-box">
                    <div className="portfolio-section-box-1" id="android1">
                        <img src="/Images/portfolio/android/and1.jpg"/>
                        <h6>Stock Management</h6>
                    </div>
                    
                    <div className="portfolio-section-box-1" id="android2">  
                        <img src="/Images/portfolio/android/and2.jpg"/>
                        <h6>Track 927</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android3">
                        <img src="/Images/portfolio/android/and3.jpg"/>
                        <h6>Chat Application</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android4">
                        <img src="/Images/portfolio/android/and4.jpg"/>
                        <h6>SIP Calculator</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android5">
                        <img src="/Images/portfolio/android/and5.jpg"/>
                        <h6>Employee & Work Management</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android6">
                        <img src="/Images/portfolio/android/and6.jpg"/>
                        <h6>Pharmaceutial Application</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android7">
                        <img src="/Images/portfolio/android/and7.jpg"/>
                        <h6>Label Printing</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android8">
                        <img src="/Images/portfolio/android/and8.jpg"/>
                        <h6>EMI Calculator</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android9">
                        <img src="/Images/portfolio/android/and9.jpg"/>
                        <h6>Coaching class</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="android10">
                        <img src="/Images/portfolio/android/and10.jpg"/>
                        <h6>All Unit Converter</h6>
                    </div>
                
                    <div className="portfolio-section-box-1" id="React_Native1">
                        <img src="/Images/portfolio/React_Native/RN1.jpg"/>
                        <h6>Golf App</h6>
                    </div>
                    
                    <div className="portfolio-section-box-1" id="React_Native2">
                        <img src="/Images/portfolio/React_Native/RN2.jpg"/>
                        <h6>Stories App</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="React_Native3">
                        <img src="/Images/portfolio/React_Native/RN3.jpg"/>
                        <h6>jewellers App</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="React_Native4">
                        <img src="/Images/portfolio/React_Native/RN4.jpg"/>
                        <h6>Marine Engine & Parts App</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="React_Native5">
                        <img src="/Images/portfolio/React_Native/RN5.jpg"/>
                        <h6>Nturition App</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="React_Native6">
                        <img src="/Images/portfolio/React_Native/RN6.jpg"/>
                        <h6>Business Directory</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="React_Native7">
                        <img src="/Images/portfolio/React_Native/RN7.jpg"/>
                        <h6>Book Store - Wholesale</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="React_Native8">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Book Store</h6>
                    </div>

                    {/* ================================ */}
                    
                    <div className="portfolio-section-box-1" id="website1">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Kyra</h6>
                    </div>
                    
                    <div className="portfolio-section-box-1" id="website2">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>MBK Diamonds</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website3">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>CEE India</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website4">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>xapton</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website5">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Eccenric Business</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website6">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>prayosha</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website7">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Micratel</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website8">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Yoshan</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website9">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>varsha Industries</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website10">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Travelsbuff</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website11">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Tax Consult</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website12">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Surelia Engineers</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website13">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Solar Engineers</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website14">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Shyam Jay Projects</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website15">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Sachi Agency</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website16">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Prorites</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website17">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Prisam Engitech</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website18">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Prerna Smart</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website19">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Peenak Consultancy</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website20">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Nakshatra Group</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website21">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Precision Mass</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website22">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Lokbharti</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website23">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>IAGES</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website24">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Elite Foods</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website25">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Creative Composite</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website26">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>C D Patel</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website27">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Bapasitaram Prints</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website28">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Arrow PCB</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website29">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Axio Bio Solution</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website30">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Zee School</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website31">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Vardan</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="website32">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Sunflower IVF Hospital</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="website33">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Satyam Scan</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="website34">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Eat right</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="website35">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>KP Bhavan Hostel</h6>
                    </div>

                    <div className="portfolio-section-box-1" id="website36">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Global Hydraulics</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website37">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Cureill</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website38">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Chemical Industries</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website39">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>R.P. Vasani School</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website40">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Nidhi Hospital</h6>
                    </div>
                    <div className="portfolio-section-box-1" id="website41">
                        <img src="/Images/portfolio/React_Native/RN8.jpg"/>
                        <h6>Wudbox</h6>
                    </div>
                </div>
            
            </div>

            

        </div>
     );
}
 
export default Portfolio;