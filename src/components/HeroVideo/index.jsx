import styles from "./styles.module.css";

const HeroVideo = () => {
  return (
    <section className="mb-4 md:mb-12">
      <div className="flex mb-4 md:mb-2 p-4 md:p-0">
        <h1 className={styles.title}>CHORD MACHINE</h1>
        <h2 className={styles.subtitle}>AKT-0.1</h2>
      </div>
      {/* <video
        src="https://akutostudio.com/media/site/5860e12ff3-1682000625/website_header.mp4"
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
      ></video> */}
      <video
        poster="/grid-assets/akuto-videoposter.jpg"
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
      >
        <source
          type="video/mp4"
          src="https://akutostudio.com/media/site/5860e12ff3-1682000625/website_header.mp4"
        ></source>
        <source
          src="https://akutostudio.com/media/site/e9c4142259-1682000628/website_header.webm"
          type="video/webm"
        ></source>
      </video>
    </section>
  );
};

export default HeroVideo;
