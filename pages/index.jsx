import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";
// import Splitting from "splitting";

const Index = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Hero Main Slider */}
        <Swiper {...home1SliderProps} className="section hero-main-slider">
          <SwiperSlide className="swiper-slide" data-color="dark">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/background_ines.jpg)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles" style={{ color: "white" }}>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="titles">
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Inés <br />
                        Martínez
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Art Director, Designer and <br /> Photographer
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            <div className="slide" style={{ position: "relative", width: "100%", height: "100%" }}>
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
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>

            {/* slide titles */}
            <div
              className="slide-titles"
              style={{
                position: "absolute",
                bottom: "20px",  // Adjust this value as needed for positioning
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                width: "100%",
              }}
            >
              <div className="more-bts" style={{ display: "flex", justifyContent: "center" }}>
                <Link legacyBehavior href="/fluida">
                  <a
                    data-splitting=""
                    className="btn more-btn scrolla-element-anim-1"
                    style={{
                      backgroundColor: "#ff6600",
                      color: "white",
                      padding: "12px 24px",
                      fontSize: "18px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      transition: "0.3s ease-in-out",
                    }}
                  >
                    See Details
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(assets/images/started-n2_4-1920x1080.jpg)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">art</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        The Dance
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "url(assets/images/started-n14_1-1000x1080.jpg)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">art</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Negative Space
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Creativity is to discover a question that has never been
                      asked. If one brings up an idiosyncratic question, the
                      answer he gives will necessarily be unique as well.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/work-single">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};
export default Index;
