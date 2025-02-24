import Link from "next/link";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";

const Belros = () => {
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
                    El sabor del cine
                  </div>
                  <div className="h-description text-center mt-5">
                    <p>
                     El sabor del cine nace como proyecto colaborativo con el estudio Paraiso. Pretende fusionar la experiencia de ir al cine con la de disfrutar de unos buenos snacks gracias a Belros. 
                     Dirección de arte, diseño y fotografía de producto
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
          <img src="assets/images/belros/imagen1.jpg" alt="Fluida Main" style={{ width: "100%" }} />
        </div>

        {/* Section for 2 Images */}
        <div className="section section-inner m-images">
          <div className="container">
            <div className="row">
              {/* First Image */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="works-item">
                  <div className="image scrolla-element-anim-1 scroll-animate" data-animate="active">
                    <div className="img">
                      <a href="assets/images/belros/imagen2.jpg" className="has-popup-image">
                        <img src="assets/images/belros/imagen2.jpg" alt="Image 1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section for PDF (iframe) */}
        <div className="section section-inner m-pdf">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h3 className="h-title">Detalles del proyecto</h3>
                <div className="pdf-viewer">
                  <iframe
                    src="assets/images/belros/pdf1.pdf"
                    width="100%"
                    height="600px"
                    style={{ border: "none" }}
                    title="Fluida PDF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </Layout>
  );
};

export default Belros;
