import { Swiper, SwiperSlide } from "swiper/react";
import AboutVideo from "../src/components/AboutVideo";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { jsTestimonials } from "../src/sliderProps";
import GridDistortion from "../src/components/GridDistortion/GridDistortion";
const About = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="h-titles">
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Sobre mí
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
        >
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <GridDistortion
              imageSrc="assets/images/background_ines.jpg"
              grid={10}
              mouse={0.1}
              strength={0.15}
              relaxation={0.9}
              className="custom-class"
            />
          </div>
        </div>
        <div
          className="section section-inner section-description scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>
                  Inés Martínez
                </h1>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                Soy Inés Martínez, una apasionada directora de arte, diseñadora y fotógrafa.
                Mi enfoque creativo se basa en la combinación de distintas disciplinas para generar
                experiencias visuales únicas y memorables.
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                Me encanta explorar nuevas perspectivas, jugar con los conceptos y dar vida a ideas
                a través del diseño gráfico, la dirección artística y la fotografía. Cada proyecto
                que emprendo es una oportunidad para innovar, comunicar y conectar con el público de
                una manera auténtica y estética.
              </div>
            </div>
          </div>
        </div>
        {/* Section Services */}
        <div className="section section-inner m-services">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Mis habilidades
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-chart-bar" />
                      </div>
                      <div className="name">Branding</div>
                      <div className="text">
                        Construcción de identidades visuales que transmiten esencia, valores y
                        emociones. Un lenguaje gráfico que cuenta historias y deja huella.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-copyright" />
                      </div>
                      <div className="name">Dirección de Arte</div>
                      <div className="text">
                        Curaduría visual y conceptual para proyectos que buscan impactar. Cada
                        imagen, cada detalle, cada composición, una pieza clave en la narrativa.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-object-group" />
                      </div>
                      <div className="name">Diseño Gráfico</div>
                      <div className="text">
                        Transformación de ideas en composiciones visuales equilibradas, estéticas
                        y funcionales. Diseño que comunica, seduce y conecta.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-ad" />
                      </div>
                      <div className="name">Fotografía</div>
                      <div className="text">
                        Luz, encuadre y emoción. Capturo momentos, atmósferas y sensaciones que
                        convierten lo cotidiano en extraordinario.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-rocket" />
                      </div>
                      <div className="name">Creatividad Estratégica</div>
                      <div className="text">
                        Más que diseño, una visión. Conceptos que van más allá de lo visual para generar
                        experiencias auténticas e inolvidables.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-life-ring" />
                      </div>
                      <div className="name">Narrativa Visual</div>
                      <div className="text">
                        El arte de contar historias sin palabras. Colores, formas y texturas
                        que evocan, inspiran y emocionan.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Video Large */}
        <AboutVideo />
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default About;
