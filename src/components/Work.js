
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import rbg from "../assets/img/rbg.PNG";
import st from "../assets/img/st.PNG";
export const Work = () => {
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
                        <h2>Internships</h2>
                        <p></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <a href="https://drive.google.com/file/d/1E9x358kvnirAw-H9hIlt9Eo64NWKD4A4/view?usp=drive_link"><img src={rbg} alt="Image" />
                                <h5>ROBO-G</h5></a>
                            </div>
                            <div className="item">
                            <a href="https://drive.google.com/file/d/1yu75GgX-StF0GFQ1MbMzRQRfRxLmdba_/view?usp=sharing"><img src={st} alt="Image" />
                                <h5>STAR Innovators</h5></a>
                            </div>
                            
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
