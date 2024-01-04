import styles from "./styles.module.css";

const HeroVideo = () => {
  return (
    <section>
      <div className="flex">
        <h1 className={styles.title}>CHORD MACHINE</h1>
        <h2 className={styles.subtitle}>AKT-0.1</h2>
      </div>
      <video
        src="https://akutostudio.com/media/site/5860e12ff3-1682000625/website_header.mp4"
        loop={true}
        muted={true}
        autoPlay={true}
        playsInline={true}
      ></video>
    </section>
  );
};

export default HeroVideo;
