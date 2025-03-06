import Link from "next/link";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";

const Sinkope = () => {
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
                    Sínkope
                  </div>
                  <div className="h-description text-center mt-5">
                    <p>
                      Tuve el placer de participar en el cortometraje <strong>Sínkope</strong>, donde desempeñé varios roles clave en su producción. Como <strong>ayudante de producción</strong>, me encargué de coordinar las actividades en el set, asegurando que todo el equipo y los recursos estuvieran organizados y en funcionamiento. Además, colaboré estrechamente con el equipo de <strong>fotografía</strong>, asistiendo en la preparación de los escenarios, iluminación y captura de las mejores tomas. También formé parte del equipo de <strong>arte y caracterización</strong>, encargándome de los detalles de maquillaje y vestuario, para garantizar que los personajes reflejaran la visión del director. Esta experiencia me permitió trabajar de manera colaborativa y desarrollar una comprensión integral de la producción audiovisual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="section section-inner m-video" style={{ position: "relative", width: "100%", height: "auto" }}>
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/MTdcAjTHIqk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Sinkope;
