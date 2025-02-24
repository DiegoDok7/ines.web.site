import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [showLoading, setShowLoading] = useState(false);
  let timer1 = setTimeout(() => setShowLoading(true), 1000);
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
  }, [showLoading]);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  return (
    <Fragment>
      {/* Section Works */}
      <div className="section section-inner m-works">
        <div className="container">
          {/* filter */}
          <div className="filter-links">
            <a onClick={handleFilterKeyChange("*")} data-filter="*">
              Todo
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-arquitectura")}
              data-filter="sorting-arquitectura"
            >
              Arquitectura y paisajes
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-retrato")}
              data-filter="sorting-retrato"
            >
              Retrato
            </a>
            <a
              onClick={handleFilterKeyChange("sorting-producto")}
              data-filter="sorting-producto"
            >
              Producto
            </a>
          </div>
          {/* works items */}
          <div className="works-items row column-2-offset">
            {[...Array(17).keys()].map(i => (
              <div key={i} className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-arquitectura">
                <div className="works-item">
                  <Link legacyBehavior href="#">
                    <a>
                      <span className="image">
                        <span className="img">
                          <img
                            src={`assets/images/arquitectura/imagen${i + 1}.jpg`}
                            alt={`Arquitectura ${i + 1}`}
                          />
                        </span>
                      </span>
                      <span className="desc">
                        <span
                          className="category splitting-text-anim-4 scroll-animate"
                          data-splitting="chars"
                          data-animate="active"
                        >
                          Paisajes
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
            {[...Array(8).keys()].map(i => (
              <div key={i} className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-producto">
                <div className="works-item">
                  <Link legacyBehavior href="#">
                    <a>
                      <span className="image">
                        <span className="img">
                          <img
                            src={`assets/images/producto/imagen${i + 1}.jpg`}
                            alt={`producto ${i + 1}`}
                          />
                        </span>
                      </span>
                      <span className="desc">
                        <span
                          className="category splitting-text-anim-4 scroll-animate"
                          data-splitting="chars"
                          data-animate="active"
                        >
                          Producto
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
            {[...Array(7).keys()].map(i => (
              <div key={i} className="works-col col-xs-12 col-sm-6 col-md-6 col-lg-6 sorting-retrato">
                <div className="works-item">
                  <Link legacyBehavior href="#">
                    <a>
                      <span className="image">
                        <span className="img">
                          <img
                            src={`assets/images/retratos/imagen${i + 1}.jpg`}
                            alt={`Retrato ${i + 1}`}
                          />
                        </span>
                      </span>
                      <span className="desc">
                        <span
                          className="category splitting-text-anim-4 scroll-animate"
                          data-splitting="chars"
                          data-animate="active"
                        >
                          Retrato
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
