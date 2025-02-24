import Link from "next/link";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";

const Lalluna = () => {
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
                    Ron Legendario "Ronsse"
                  </div>
                  <div className="h-description text-center mt-5">
                    <p>
                      Campaña realizada para la marca de Ron Legendario. En ella se pretende disfrutar del buen tardeo español junto a las ganas de cuidarse con su nuevo Ron fresa. 
                      Premios: Long List en "La Lluna"
  . 
                    </p>
                  </div>
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
            src="https://www.youtube.com/embed/k2IbRLsilNY?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Lalluna;
