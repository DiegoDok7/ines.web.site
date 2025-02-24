import { useState } from "react";

const AboutVideo = () => {
  const [video, setVideo] = useState(false);
  return (
    <div
      className="section section-inner m-video-large"
      onClick={() => setVideo(true)}
    >
      <div
        className={`video  scroll-animate ${
          video ? "animate__animated active" : ""
        }`}
      >
        <div
          className="img js-parallax"
          style={{ backgroundImage: "url(assets/images/started-n7.jpg)" }}
        />
        {video && (
          <video className="js-video-iframe" controls>
            <source src="assets/videos/video-presentacion.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="play" />
      </div>
    </div>
  );
};
export default AboutVideo;
