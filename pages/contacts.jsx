import { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4r65vi7", // Reemplaza con tu Service ID
        "template_7eifh2d", // Reemplaza con tu Template ID
        formData,
        "H5mpOgQYUdvLjBhwp" // Reemplaza con tu Public Key de EmailJS
      )
      .then(
        (response) => {
          console.log("Mensaje enviado con éxito:", response);
          setSuccess(true);
          setError(false);
          setFormData({ name: "", email: "", message: "" }); // Resetear el formulario
        },
        (err) => {
          console.error("Error al enviar el mensaje:", err);
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <Layout>
      <div className="wrapper">
        <PageTitle title="Contáctame" />

        <div className="section section-inner m-contacts-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="m-titles">
                  <div className="m-title">Ponte en contacto</div>
                </div>

                <div className="contacts-form">
                  <form onSubmit={handleSubmit}>
                    <div className="group">
                      <div className="value">
                        <input
                          type="text"
                          name="name"
                          placeholder="Nombre Completo"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="group">
                      <div className="value">
                        <input
                          type="email"
                          name="email"
                          placeholder="Correo Electrónico"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="group full">
                      <div className="value">
                        <textarea
                          name="message"
                          placeholder="Mensaje"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="submit">
                      <button type="submit" className="btn">
                        Enviar Mensaje
                      </button>
                    </div>
                  </form>

                  {success && (
                    <div className="alert-success">
                      <p>Gracias, tu mensaje se ha enviado con éxito.</p>
                    </div>
                  )}
                  {error && (
                    <div className="alert-danger">
                      <p>Error al enviar el mensaje. Inténtalo de nuevo.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="m-titles">
                  <h2 className="m-title">Información de contacto</h2>
                </div>
                <div className="services-items row">
                  <div className="services-col col-lg-4">
                    <div className="services-item">
                      <div className="icon">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="name">Teléfono:</div>
                      <div className="text">+34 689471394</div>
                    </div>
                  </div>
                  <div className="services-col col-lg-4">
                    <div className="services-item">
                      <div className="icon">
                        <i className="fab fa-font-awesome-flag" />
                      </div>
                      <div className="name">Ubicación:</div>
                      <div className="text">
                        Benimaclet, 46020 <br />
                        Valencia - España
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-lg-4">
                    <div className="services-item">
                      <div className="icon">
                        <i className="fas fa-at" />
                      </div>
                      <div className="name">Correo electrónico:</div>
                      <div className="text">inesmartinezmarti97@gmail.com</div>
                    </div>
                  </div>
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

export default Contacts;
