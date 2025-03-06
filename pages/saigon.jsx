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
                      Recientemente, tuve la oportunidad de llevar a cabo un <em>rebranding</em> completo para <strong>Saigon Vietnamese Cuisine</strong>, una marca que buscaba renovar su imagen y adaptarse a las nuevas tendencias del mercado. El objetivo principal fue mantener la esencia y los valores de la marca, pero con un enfoque más fresco, moderno y alineado con las expectativas de su audiencia.
                    </p>

                    <p>
                      Rediseñé el logotipo, elegí una paleta de colores más dinámica y actualicé los tipografías para lograr una imagen más coherente y profesional. Además, trabajé en el desarrollo de nuevos elementos visuales que reflejan la evolución de la marca, sin perder la conexión con su historia y orígenes.
                    </p>

                    <p>
                      El resultado final fue una imagen renovada que mantiene la autenticidad de la marca, pero transmite una mayor cercanía y modernidad. Este <em>rebranding</em> no solo mejoró la percepción visual, sino que también reforzó la identidad de la marca, ayudando a conectar mejor con su audiencia y destacar en un mercado competitivo.
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
