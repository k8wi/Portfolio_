import rn from "../assets/img/rn.PNG";
import bc from "../assets/img/bc.PNG"
import apis from "../assets/img/apis.PNG"
import dj from "../assets/img/dj.PNG"
import nmit from "../assets/img/nmit.PNG"
import dsce from "../assets/img/dsce.PNG"

import Carousel from 'react-multi-carousel';

export const Certificate = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Certifications and Accomplishmemts</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/NJKL4QQWEJNB"><img src={bc} alt="Image" />
                                <h5>Blockchain</h5></a>
                            </div>
                            <div className="item">
                               <a href="https://www.coursera.org/account/accomplishments/certificate/9EEEUCESLA62"> <img src={apis} alt="Image" />
                                <h5>APIs</h5></a>
                            </div>
                            <div className="item">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/WQN5U2X7VCTR"><img src={rn} alt="Image" />
                                <h5>React-Native</h5></a>
                            </div>
                            <div className="item">
                               <a href="https://www.coursera.org/account/accomplishments/certificate/CL2KAGHM425P"> <img src={dj} alt="Image" />
                                <h5>Developing Applications with SQL, Databases and Django</h5></a>
                            </div>
                            <div className="item">
                               <a href="https://drive.google.com/file/d/1SN6cAfX8WViFhL7UWafUrblzC0JCTBOh/view?usp=drive_link"> <img src={nmit} alt="Image" />
                                <h5>NMITHacks</h5></a>
                            </div>
                            <div className="item">
                               <a href="https://drive.google.com/file/d/1i1okdZAjy4qkvPlRH7NVaDzvnGs5WqxZ/view?usp=drive_link"> <img src={dsce} alt="Image" />
                                <h5>AVENTUS Hackathon</h5></a>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
