
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pub from "../assets/img/pub.PNG";

export const Publications = () => {
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
                        <h2>Publications</h2>
                        <center>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                           
                            <div className="item">
                            <a href="https://sjcjycl.cn/article/view-2023/04-448.php"><img src={pub} alt="Image" />
                                <h5>Crime Data Analysis using Machine Learning Techniques</h5></a>
                            </div>
                            
                            
                        </Carousel></center>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
  )
}
