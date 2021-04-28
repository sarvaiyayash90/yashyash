import React from 'react';


const Slider = () => {
    return (

        // <div class="hero-image">
        //     <div class="hero-text">
        //         <h1>I am Sarvaiya Yash</h1>
        //         <p>And I'm a Photographer</p>
        //         <button>Hire me</button>
        //     </div>
        // </div>
      <div className="slider">
        <div id="carouselExampleIndicators" class="carousel slide"  data-interval="2000" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/Images/Silder/ba1.jpg" alt="Los Angeles"/>
            </div>
            <div class="carousel-item ">
              <img src="/Images/Silder/ba2.jpg" alt="Chicago"/>
            </div>
            <div class="carousel-item ">
              <img src="/Images/Silder/ba3.jpg" alt="New york"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

    );
}

export default Slider;
