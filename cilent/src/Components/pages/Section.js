import React,{useState,useEffect} from 'react';
import Slider from '../Layout/Slider';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import jQuery from 'jquery';
import axios from 'axios';
import moment from 'moment';
import { NavLink } from 'react-router-dom';


const Section = () =>{

  const [blog_data,set_blog_data] = useState([]); // blog
    

  useEffect(()=>{

    const $ = window.$;
    $('.Count').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 5000,
          easing: 'swing',
          step: function () {
              $this.text(Math.ceil(this.Counter));
          }
      });
    });

    load_blog();// load blog data

  },[])

  // blog load
  const load_blog = async () =>{
    await axios.get('/Blogdata/new_Blog')
    .then((res)=>{
        console.log("data",res);
        set_blog_data(res.data);
    })
    .catch((err)=>{
        console.log("error",err);
    })
  }

  const options = {
    margin: 10,
    loop:true,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    // navText: ["Prev", "Next"],
    smartSpeed: 2000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 3,
      }
    },
  };

  const new_options = {
    margin: 0,
    loop:true,
    responsiveClass: true,
    nav: false,
    dots: false,
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // navText: ["Prev", "Next"],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 2,
        },
        1400: {
          items: 2,
      }
    },
  };

  return(
    <>
     <Slider/>
    <div className="container-fluid mt-5 p-0">
      <h1 id="IT">Complete IT Services</h1>
      <p id="ahemdabad">Ahmedabad’s Leading Website Design and Development Company</p>
      <p id="as">As a leading web designing company in Ahmedabad, we understand the
        significance of designing for purpose in order to enhance the user
        experience.
      </p>

      <div className="row">
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/web-design-icon.png" />
          <h3>Web Design</h3>
          <p id="IT-Text">
            Infilon combines skill, understanding, knowledge, talent and experience to produce cutting edge visuals in web designing.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/mobile-App.png" />
          <h3>Mobile Apps</h3>
          <p id="IT-Text">
            From your innovative business idea to Intuitive, Appealing & perfect Android and iPhone mobile application development.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/seo.png" />
          <h3>Search Engine Optimization</h3>
          <p id="IT-Text">
            We focuses on engaging website visitors naturally and organically to boost Google Ranking to help achieve good ROI of internet marketing campaign.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/software.png" />
          <h3>Software Development</h3>
          <p id="IT-Text">
            Being an Award winning, Business software development company we always deliver success with smile, commitment and dedication.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/ecommerce.png" />
          <h3>Ecommerce Services</h3>
          <p id="IT-Text">
            Websites are good but ecommerce sites than earns are even better, we are here to turn your investment into profit making stage.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/enter-price.png" />
          <h3>Enterprise Resource Planning</h3>
          <p id="IT-Text">
            We have team of professional developers who can work on small scale to Multinational ERP Software applications.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>

      <div className="row mb-5 pb-5">
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/react-3-1.png" />
          <h3>React Native Development</h3>
          <p id="IT-Text">
            We’re a leading mobile app development company having expertise in React Native. We assist our clients to launch applications on both iOS and Android. We Build React Native Mobile Apps. Rapidly, and with Precision.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/bot-1.png" />
          <h3>Chat Bot Development</h3>
          <p id="IT-Text">
            Chatbots have turned out to be a standout amongst the most enticing platforms in recent times. If you are looking to have a custom Chatbot development, we have the right Chatbot development solutions for you.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
        <div className="col-sm-4 mt-5 pl-5 pr-5" id="media-icon-hover">
          <img src="/Images/IT/cloud-computing-1.png" />
          <h3>IoT Development</h3>
          <p id="IT-Text">
            Improve Business Productivity and Efficiency utilizing our high-end IOT professional services. If you are intending to build your own IOT Application Development Solution, then consider Infilon Technologies as your one-stop solution.
          </p>
          <a id="fa-right" href="">READ MORE <i id="fas-icon" className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>

      <div className="Main-section-Inficulture">
         <div className="Main-section-Inficulture-text">
             <h1>#Inficulture</h1>
             <p>why do we have a great culture:</p>
             <span>
                 We value employee opinions<br></br>
                 We create an innovative environment<br></br>
                 We hire intellectually and wisely<br></br>
                 We create dream maps<br></br>
                 We ASK, We DONT guess<br></br>
                 We nurture young leaders<br></br>
                 We share responsibility and work load<br></br>
             </span>
         </div>
     </div>


     <h1 id="SOME">SOME AMAZING FACTS ABOUT US</h1>
     <p id="With-over">With over 11 years of experience, Infilon has built websites and mobile apps for clients in Web Development Company in Ahmedabad,
        India, and across the world. Not all web pages created are equal, We transform your idea into creative web designing & web development in a way that
        it looks Good. Our team of experts leads you in every step of the way, from business model to implementation with a smooth transition. We have made
         interesting footprints in the IT industry with tremendous and strong client referrals. We provide your business with a wide range of services including
         Web design and Web development, Website redesigning, Custom application software development, Product development, SEO (search engine optimization),
        E-commerce solutions, and much more to enhance organizational functioning and extend the power to harness identity and management of your Business.
    </p>


      <div className="row" id="no-data">
        <div className="col-sm-3" id="no-count">
          <h3 className="Count">664</h3>
          <i class="fal fa-horizontal-rule fa-9x"></i>
          <h3>Clients</h3>
        </div>
        <div className="col-sm-3" id="no-count">
          <h3 className="Count">11</h3>
          <i class="fal fa-horizontal-rule fa-9x"></i>
          <h3>Years Of Experience</h3>
        </div>
        <div className="col-sm-3" id="no-count">
          <h3 className="Count">12</h3>
          <i class="fal fa-horizontal-rule fa-9x"></i>
          <h3>Awards</h3>
        </div>
        <div className="col-sm-3" id="no-count">
          <h3 className="Count">883</h3>
          <i class="fal fa-horizontal-rule fa-9x"></i>
          <h3>Projects Completed</h3>
        </div>
      </div>

      <div className="mt-5" id="Main-section-Blog">
        
      <OwlCarousel className='owl-theme' {...new_options}>
        
        <div id="Main-section-Blog-inside">
          <div id="Main-section-Blog-inside-top">
            <img src="/Images/testimonial/Premila-Sharan.jpg"/>
            <h1>- Pramila Sharan (IRS), Additional Director General, NIFT,</h1>
            <p>Ministry of Textiles, Government of INDIA</p>
          </div>

          <div className="Main-section-Blog-inside-bottom">
            <p>" The Admission Department of National Institute of Fashion Technology (NIFT)
              Head office appreciates the effective and timely contribution by the company to the
              entire process making it a resounding success. "
            </p>
          </div>
        </div>

        <div id="Main-section-Blog-inside">
          <div id="Main-section-Blog-inside-top">
            <img src="/Images/testimonial/Professor-Errol-Dsouza-1.jpg" />
            <h1>- Errol D'souza, IIM-A director,</h1>
            <p>Indian Institute of Management (IIM) – Ahmedabad</p>
          </div>

          <div className="Main-section-Blog-inside-bottom">
            <p>" The quality standards, dedication and sincerity demonstrated by the team at Infilon
                were of high standards and we appreciate the same "</p>
          </div>
        </div>

        <div id="Main-section-Blog-inside">
          <div id="Main-section-Blog-inside-top">
            <img src="/Images/testimonial/Pramod-Kumar-Sharma.jpg" />
            <h1>- Pramod Kumar Sharma, Program coordinator, Paryavan mitra,</h1>
            <p>Ministry of Environment and Forest, Government of INDIA</p>
          </div>

          <div className="Main-section-Blog-inside-bottom">
            <p>" I would like to congratulate you and your team in particular for successful development and implementation of our website “paryavaran mitra” which is a program of Centre for Environmental Education. "</p>
          </div>
        </div>

      </OwlCarousel>

        {/* <div className="col-sm-6" id="Main-section-Blog-left">
          <div id="blog">
            <div className="Main-section-Blog-inside-left-top">
                <img src="/Images/Premila-Sharan.jpg"/>
                <h1>- Pramila Sharan (IRS), Additional Director General, NIFT,</h1>
                <p>Ministry of Textiles, Government of INDIA</p>
            </div>
            <div className="Main-section-Blog-inside-left-bottom">
                <p>The Admission Department of National Institute of Fashion Technology (NIFT)
                  Head office appreciates the effective and timely contribution by the company to the
                  entire process making it a resounding success.</p>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6" id="Main-section-Blog-right">
          <div id="blog2">
            <div className="Main-section-Blog-inside-left-top">
                <img src="/Images/Professor-Errol-Dsouza-1.jpg" />
                <h1>- Errol D'souza, IIM-A director, </h1>
                <p>Indian Institute of Management (IIM) – Ahmedabad</p>
            </div>
            <div className="Main-section-Blog-inside-left-bottom">
                <p>The quality standards, dedication and sincerity demonstrated by the team at Infilon
                  were of high standards and we appreciate the same</p>
            </div>
          </div>
        </div> */}

      </div>

      <h1 id="SOME">Latest Blog</h1>
      <h3 className="mt-3">in information technology world</h3>
      <div className="row mt-5 mb-5" id="Main-section-Latest-blog">

        {/* <OwlCarousel className='owl-theme' {...options}> */}
          
          
        {blog_data.map((blog_item,key)=>(
                    
          <div id="Main-section-Latest-blog-inside-post">
            
            <a href={`/Blog_inside/${blog_item._id}`}>
              { blog_item.blog_image == "" ? "" : <img src={'/Images/blog/' + blog_item.blog_image}/> }
            </a>
            
            <h5><a href={`/Blog_inside/${blog_item._id}`} style={{fontSize:'18px'}} id="blog-post-a">{blog_item.blog_title}</a></h5>
            <p>
            {blog_item.blog_content.substr(0, 135)} […]
            </p>
            <div className="row Main-section-Latest-blog-line">
              <div className="text-left ml-3">
                <h6>Post by: {blog_item.author}</h6>
              </div>&nbsp;&nbsp;
              <div className="text-right">
                <h6>{moment(blog_item.blog_date).format(' MMMM DD, YYYY')}</h6>
              </div>
            </div>
          </div>
        
        ))}


          {/* <div id="Main-section-Latest-blog-inside-post">
            <img src="/Images/blog/b1.jpg" />
            <h5>Some Reasons Why Businesses Need Social Media Marketing</h5>
            <p>
            Some Reasons Why Businesses Need Social Media Marketing Social media marketing is one of the most powerful tools in digital marketing
            </p>
            <div className="row Main-section-Latest-blog-line">
              <div className="text-left ml-3">
                <h6>Post by: admin</h6>
              </div>&nbsp;&nbsp;
              <div className="text-right">
              <h6>April 23, 2021</h6>
              </div>
            </div>
          </div>
        
          <div id="Main-section-Latest-blog-inside-post">
            <img src="/Images/blog/b2.jpg" />
            <h5>How to Hiring Professional Magento Developers</h5>
            <p>
            Typically, when we start an outlet to sell products, we need a room where they are displayed, a room to
            </p>
            <div className="row Main-section-Latest-blog-line">
              <div className="text-left ml-3">
                <h6>Post by: admin</h6>
              </div>&nbsp;&nbsp;
              <div className="text-right">
                <h6>April 20, 2021</h6>
              </div>
            </div>
          </div>

          <div id="Main-section-Latest-blog-inside-post">
            <img src="/Images/blog/b3.jpg" />
            <h5>Some Reasons to Choose Python Framework - Django</h5>
            <p>
            Django is a high-level, open-source Python web framework that allows for clean, rapid development and practical design. Now, you are wondering
            </p>
            <div className="row Main-section-Latest-blog-line">
              <div className="text-left ml-3">
                <h6>Post by: admin</h6>
              </div>&nbsp;&nbsp;
              <div className="text-right">
                <h6>April 12, 2021</h6>
              </div>
            </div>
          </div> */}

        {/* </OwlCarousel> */}
      </div>

      <div className="pb-5 Main-section-SOME-OF-OUR-CLIENTS">
          <h1 className="mt-5">SOME OF OUR CLIENTS</h1>
            <div className="mt-5 Main-section-SOME-OF-OUR-CLIENTS-img">
              <img src="/Images/Company/c1.png" />
              <img src="/Images/Company/c2.png" />
              <img src="/Images/Company/c3.png" />
              <img src="/Images/Company/c4.png" />
              <img src="/Images/Company/c5.png" />
              <img src="/Images/Company/c6.png" />
              <img src="/Images/Company/c7.png" />
              <img src="/Images/Company/c8.png" />
              <img src="/Images/Company/c9.png" />
              <img src="/Images/Company/c10.png" />
              <img src="/Images/Company/c11.png" />
              <img src="/Images/Company/c12.png" />
              <img src="/Images/Company/c13.png" />
              <img src="/Images/Company/c14.png" />
              <img src="/Images/Company/c15.png" />
              <img src="/Images/Company/c16.png" />
              <img src="/Images/Company/c17.png" />
              <img src="/Images/Company/c18.png" />
              <img src="/Images/Company/c19.png" />
              <img src="/Images/Company/c20.png" />
            </div>
      </div>

        <div className="Main-section-sm">
          <div className="Main-section-sm-inside">
              <img src="/Images/social-icons/Logo1.png" />
              <p className="mt-4">
                    Sales<br></br>
                    <a href="tel:+91 95100 16999">+91 95100 16999</a><br></br>
                    <a href="tel:+91 99044 69794">+91 99044 69794</a><br></br>
              </p>
          </div>
          <div className="Main-section-sm-inside">
              <img src="/Images/social-icons/Logo2.png" />
              <p className="mt-4"><a href="mailto:info@infilon.com">info@infilon.com</a></p>
          </div>
          <div className="Main-section-sm-inside">
              <img src="/Images/social-icons/Logo3.png" />
              <p className="mt-4"><a href="skype:infilon?call">infilon</a></p>
          </div>
          <div className="Main-section-sm-inside">
              <img src="/Images/social-icons/Logo4.png" />
              <p className="mt-4">
                  Service<br></br>
                  <a href="tel:+91 9099 830 350">+91 9099 830 350</a><br></br>
                  <a href="tel:+91 8000 230 350">+91 8000 230 350</a><br></br>
              </p>
          </div>
        </div>

        {/*<div class="row Main-section-Hire">
            <div class="col-sm-6">
              <p>Hire Dedicated Resources</p>
            </div>
            <div class="col-sm-6">
              <button>HIRE NOW</button>
            </div>
        </div>

         <div className="row Main-section-Quick-Links">
          
          <div className="Main-section-Quick-Links-inside">
            <p>Quick Links</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
              <ul>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Responsive Website Design
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Android App Development
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> iPhone App Development
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Mobile App Development
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Top SEO Company in Ahmedabad
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Software Development
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Ecommerce Services
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> Open Source Development
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> ERP Software Solutions
                      </a>
                  </li>
                  <li>
                      <a href="" style={{textDecoration:'none'}} >
                          <i class="fal fa-chevron-right"></i> React Native Development
                      </a>
                  </li>
              </ul>
          </div>
          <div className="Main-section-Quick-Links-inside">
            <i id="data-link" class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
            <ul>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Accounting Software
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Billing Software
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Web ERP
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Web CRM
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Hire Developer
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Domain & Hosting
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Bulk SMS & Email
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Employee policy
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Career
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Portfolio
                    </a>
                </li>
                <li>
                    <a href="" style={{textDecoration:'none'}} >
                        <i class="fal fa-chevron-right"></i> Blog
                    </a>
                </li>
            </ul>
          </div>
          <div className="Main-section-Quick-Links-inside">
              <p>Contact Us:</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
              <br></br>
              <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.017872460409!2d72.5703573149192!3d23.02311598495282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f466a8194f%3A0xbdcde14274fb0096!2sInfilon%20-%20Mobile%20App%20Development%20Company!5e0!3m2!1sen!2sin!4v1614169278523!5m2!1sen!2sin" width="291" height="160" style={{border:'0',allowfullscreen:'',loading:'lazy'}}></iframe>
              <h6>407, Sakar 2, Ellis Bridge, Ashram Road, Ahmedabad, Gujarat, India – 380006</h6>
              <h4>Infilon Technologies Rating : 4.9 / 5</h4>
              <div className="social-icon">
                <li>
                    <a href="https://www.google.com"><i class="fab fa-facebook-square fa-2x"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com"><i class="fab fa-twitter fa-2x"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com"><i class="fab fa-google-plus-g fa-2x"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com"><i class="fab fa-instagram fa-2x"></i></a>
                </li>
              </div>
          </div>
          <div className="Main-section-Quick-Links-inside">
            <p>Get Quotation</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
            <br></br>
            <button>Get Quotation</button>
            <br></br>
            <p>Sales & Support</p><i class="fal fa-horizontal-rule fa-2x" style={{fontSize:'60px'}}></i>
            <div className="sale">
              <b>Sales :</b>
              <br></br>
              <i class="fas fa-phone-alt"></i><p> : +91-95100 16999</p> <br></br>
              <i class="fas fa-phone-alt"></i><p> : +91-99044 69794</p> <br></br>
            </div>
            <div className="Support mt-2">
              <b>Support :</b>
              <br></br>
              <i class="fas fa-phone-alt"></i><p> : +91 79 4009 1208</p> <br></br>
              <i class="fas fa-phone-alt"></i><p> : +91 9099 830 350</p> <br></br>
              <i class="fab fa-whatsapp" style={{fontSize:'20px'}}></i><p> : +91 8000 230 350</p> <br></br>
            </div>
            <div className="Career mt-2">
               <b>Career :</b>
               <br></br>
               <span>Click Here to Join us</span>
            </div>  
          </div>
        </div>

        <div className="row Main-section-footer">
          <p>  © 2021 Infilon Technologies Pvt. Ltd. All rights reserved.</p>
          <img id="foot-img" src="/Images/footer.png" />
          <div className="row Main-section-footer-inside-icon">
            <ul>
              <li>
                  <a href="https://www.google.com"><i class="fab fa-facebook-square fa-2x"></i></a>
              </li>
              <li>
                  <a href="https://www.google.com"><i class="fab fa-twitter fa-2x"></i></a>
              </li>
              <li>
                  <a href="https://www.google.com"><i class="fab fa-google-plus-g fa-2x"></i></a>
              </li>
              <li>
                  <a href="https://www.google.com"><i class="fab fa-instagram fa-2x"></i></a>
              </li>
            </ul>
          </div>
        </div> */}
      

    </div>
    </>
  );
}

export default Section;
