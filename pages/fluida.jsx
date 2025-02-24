import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { mGalleryCarousel } from "../src/sliderProps";

const Fluida = () => {
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
                    Fluida
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
          <img src="assets/images/fluida/imagen1.png" alt="Fluida Main" style={{ width: "100%" }} />
        </div>
        {/* Section Gallery */}
        <div className="section section-inner m-gallery">
          <div className="container">
            <div className="row">
              {["imagen2.png", "imagen3.jpg", "imagen4.png", "imagen5.png", "imagen6.png", "imagen7.png", "imagen8.png", "imagen9.jpg"].map((img, index) => (
                <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <div className="works-item">
                    <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                      <div className="img">
                        <a href={`assets/images/fluida/${img}`} className="has-popup-image">
                          <img src={`assets/images/fluida/${img}`} alt={`Image #${index + 1}`} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="section section-inner m-video" style={{ position: "relative", width: "100%", height: "auto" }}>
          <video
            src="assets/videos/video-fluida.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Fluida;
