import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";

const Saigon = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="h-titles">
                  <div
                    className="h-subtitle red splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Proyecto
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Saigon Rebranding
                  </div>
                  <div className="h-description text-center mt-5">
                    <p>
                      Rebranding del restaurante Saigon, donde he diseñado desde cero los logos, la carta, 
                      los platos, la tarjeta de visita y las bolsas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <img src="assets/images/saigon/imagen1.png" alt="Saigon Main" style={{ width: "100%" }} />
        </div>
        {/* Section Gallery */}
        <div className="section section-inner m-gallery">
          <div className="container">
            <div className="row">
              {["imagen2.png", "imagen3.png", "imagen4.png", "imagen5.png"].map((img, index) => (
                <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="works-item">
                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="img">
                        <a href={`assets/images/saigon/${img}`} className="has-popup-image">
                          <img src={`assets/images/saigon/${img}`} alt={`Image #${index + 1}`} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Saigon;
